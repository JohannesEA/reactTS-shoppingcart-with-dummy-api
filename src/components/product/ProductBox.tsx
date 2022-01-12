import React from "react";
import Button from "@material-ui/core/Button";
//Types
import { CartItemType } from "../../pages/home/Home";
//Styles
import { Wrapper } from "./ProductBox.styles";

type Props = {
  product: CartItemType;
  handleAddToCart: (clickedProduct: CartItemType) => void;
};

const ProductBox: React.FC<Props> = ({ product, handleAddToCart }) => (
  <Wrapper>
    <img src={product.image} alt={product.title}></img>
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(product)}>Click me</Button>
  </Wrapper>
);

export default ProductBox;
