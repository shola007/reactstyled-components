// import react from "react";
import styled from "styled-components";

const Product = ({ name, price }) => {
  return (
    <Wrapper price={price}>
      <h4>{name} </h4>
      <p>${price}</p>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  width: 300px;
  background: #fff;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    text-tranform: capitalize;
  }
  p {
    color: ${({ price }) => {
      if (price < 100) return "blue";
      if (price > 500) return "red";
      return "#222";
    }};
  }
`;
export default Product;
