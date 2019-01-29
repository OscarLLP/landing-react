import React from "react";
import libro from "../../assets/libro.png";
import manocelu from "../../assets/mano-celu.png";
import planeta from "../../assets/planeta.png";
import Container from "./style";

function Images(props) {
  return (
    <Container>
        <div>
          <img src={libro} />
          <p>{props.name1}</p>
        </div>
        <div>
          <img src={manocelu} />
          <p>{props.name2}</p>
        </div>
        <div className="p3">
          <img src={planeta} />
          <p >{props.name3}</p>
        </div>
    </Container>
  );
}

export default Images
