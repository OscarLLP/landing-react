import React from "react";
import Container from "./style";
import Wrapper from '../Wrapper'


function CompoSectioncinco(props) {
  const { title, descripton, reverse, img } = props;
  return (
    <Wrapper>
    <Container reverse={reverse}>
      <figure>
        <img className = "Section51" src={img} />
    </figure>
      <div>
      <p className = "title">{title}</p>
        <p className = "text-p">{descripton}</p>
      </div>
    </Container>
    </Wrapper>
  );
}

export default CompoSectioncinco;
