import React from 'react'
import  apple from '../../assets/img-manzana.png'
import  Container from './style'


function Button(props){
    return(
            <Container>
            <a  className = "a2" href="#"> 
                 <img className = "apple" src= {apple} /> 
                 <span>{props.name}</span>  
             </a>
             
             
            </Container>
    )

}

export default Button   