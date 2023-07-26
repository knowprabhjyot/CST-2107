import { FC } from "react";
import { Product } from "../../types/product";
import { Wrapper } from "../App.styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { Text } from "./Item.styles";

type ItemProps = {
  item: Product;
  addToCart: (cartItem: Product) => void;
};

const Item: FC<ItemProps> = ({ item, addToCart }) => {
  return (
    <Wrapper>
      <Card>
        <Box textAlign="center" padding="8px">
          <img src={item.image} width={100} height={100} />
        </Box>
        <CardContent>

          <Text gutterBottom variant="h6">
            {item.title}
          </Text>

          <Text variant="body2" color="text.secondary">
            {item.description}
          </Text>

          <CardActions>
            <Button onClick={() => addToCart(item)} size="small">
              Add To Cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default Item;
