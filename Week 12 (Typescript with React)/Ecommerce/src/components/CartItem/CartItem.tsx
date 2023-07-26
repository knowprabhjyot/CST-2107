import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Wrapper } from "../App.styles";
import { Text } from "../Item/Item.styles";
import { Product } from "../../types/product";
import { FC } from "react";

type CartItemProps = {
  item: Product;
  removeFromCart: (id: string) => void;
  addToCart: (cart: Product) => void;
};

const CartItem: FC<CartItemProps> = ({ item, removeFromCart, addToCart }) => {
  return (
    <Wrapper>
      <Card sx={{ maxWidth: 300 }}>
        <Box textAlign="center" padding="8px">
          <img src={item.image} width={100} height={100} />
        </Box>
        <CardContent>
          <Text gutterBottom variant="h6">
            {item.title}
          </Text>

          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>

          <CardActions>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </Button>
            <p>{item.amount}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default CartItem;
