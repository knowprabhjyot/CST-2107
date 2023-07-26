import React, { FC } from "react";
import { Wrapper } from "../App.styles";
import { Product } from "../../types/product";
import CartItem from "../CartItem/CartItem";
import { Box, Button } from "@mui/material";

type CartProps = {
  cartItems: Product[];
  removeFromCart: (id: string) => void;
  addToCart: (cart: Product) => void;
  resetAll: () => void;
};

export const Cart: FC<CartProps> = ({ cartItems, resetAll, removeFromCart, addToCart }) => {
  return (
    <Wrapper>
      <Box display="flex" justifyContent="space-between">
        <h2>My Cart</h2>
        {cartItems.length > 0 && <Button onClick={resetAll}>Reset All</Button>}
      </Box>

      {cartItems.length === 0 && <p>No items in cart</p>}
      {cartItems.map((product) => {
        return (
          <CartItem
            key={product.id}
            item={product}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        );
      })}
    </Wrapper>
  );
};
