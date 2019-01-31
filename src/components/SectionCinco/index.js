import React from "react";
import Container from "./style";
import CompoSectioncinco from "../CompoSectioncinco";
import Img1 from "../../assets/section-5-1.png";
import Img2 from '../../assets/Section-5-2.png';
import Img3 from '../../assets/Section-5-3.png';
import Wrapper from '../Wrapper/index'


function SectionCinco() {
  return (
    <Wrapper>
    <Container>
      <div className = "compo-5" >
      <CompoSectioncinco
      img={Img1}
        title="Over one million books at your hand."
        descripton="One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time. uohguohuoughauohgou rehuorhgu haguihruoghsruoghuoh"
      />
      </div>
      <div>
      <CompoSectioncinco    
      img={Img2}    
        title="Switch between your reading modes easily"
        descripton="One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time."
        reverse
      />
      </div>
      <div>
      <CompoSectioncinco
      img={Img3}
        title="One click purchase, instant reading."
        descripton="One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time."
      />
      </div>
    </Container>
    </Wrapper>
  );
}

export default SectionCinco;
