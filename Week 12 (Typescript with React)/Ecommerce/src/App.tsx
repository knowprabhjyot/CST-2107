import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types/product";
import { getAllProducts } from "./utils/product";
import { Badge, Drawer, Grid } from "@mui/material";
import { CustomButton, Wrapper } from "./components/App.styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Item from "./components/Item/Item";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        setProductList(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // Lets keep it for you.
  // Try to find the bug and fix it.
  const handleAddToCart = (cartItem: Product) => {
    setCartItems((prevList) => {


      // Find the cart item if its already there, then remove it
      const isItemFound = cartItems.find((product) => product.id === cartItem.id);

      if (isItemFound) {
        return prevList.map((product) => {
          if (product.id === isItemFound.id) {
            return { ...product, amount: product.amount + 1 }
          }
          return product;
        })
      }

      return [...prevList, {...cartItem, amount: 1 }];
      // if its not there then add it

    });
  };

  // THis works only for removing the item
  const handleRemoveFromCart = (id: string) => {
    setCartItems((prevList) => {
      return prevList.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return acc;
          }
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as Product[]);
    })
  }

  const resetAll  = () => {
    setCartItems([]);
  }

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          removeFromCart={handleRemoveFromCart}
          addToCart={handleAddToCart}
          resetAll={resetAll}
        />
      </Drawer>

      <CustomButton color="primary" onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={cartItems.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </CustomButton>

      <Grid container spacing={3}>
        {productList.map((product) => {
          return (
            <Grid item xs={12} sm={3}>
              <Item
                addToCart={handleAddToCart}
                item={product}
                key={product.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export default App;
