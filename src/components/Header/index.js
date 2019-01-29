import React from 'react'
import  { Container }  from './style'
import logo from '../../assets/logo-iz.png'
import Button from '../../components/Button'


function Header(){
   return(
       <Container className = "header">
            <div>
                <img className = "logo" src={logo} />
            </div>

            <div className = "div_a">
                <a className ="a1" href="#">Join on telegram</a>
                <Button name=" Get The App" />
            </div>
    
       </Container>
   )
}

export default Header