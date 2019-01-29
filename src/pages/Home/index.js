import React, { Component } from 'react'
import Header from '../../components/Header'
import SectionHome from '../../components/SectionHome';
import SectionDos from '../../components/SectionDos';
import SectionTres from '../../components/SectionTres';
import SectionCuatro from '../../components/SectioCuatro';
import SectionCinco from '../../components/SectionCinco';
import SectionSeis from '../../components/SectionSeis';
import SectionSiete from '../../components/SectionSiete';
import SectionFooter from '../../components/SectionFooter';



class index extends Component {
 render() {
   return (
       <div>  
          <Header />
          <SectionHome />
          <SectionDos />
          <SectionTres />
          <SectionCuatro />
          <SectionCinco />
          <SectionSeis />
          <SectionSiete />
          <SectionFooter />
      </div>  
   )
 }
}


export default index 