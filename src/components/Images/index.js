import React from "react";
import Container from "./style";

function Images(props) {
  const {img, description } = props
  return (
    <Container>
      <figure>
        <img class="img3" src={img} />
        <p className = "img-text">{description}</p>
      </figure>
      
    </Container>
  );
}

export default Images
