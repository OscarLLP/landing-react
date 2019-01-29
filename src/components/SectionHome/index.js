import React from 'react'
import {Container } from './style'
import img from '../../assets/img.png'
import Button from '../Button'
function SectionHome(){
    return(
        <Container>
            <div>
                <h3 className = "h3">Reading book is fun & easier than ever.</h3 >
                 <p className = "p"> One glance at a book and you hear the<br />
                 voice of another person, perhaps this <br/>
                 dead for 1,000 years. To read is to<br />
                 voyage through time.</p>
                 <div className = "container_Button">
                 <Button  name = "Get The App"/>
                 
                 <p><small className = "small">android app will be releaseed soom</small></p>
                 </div>
                 
                
            </div>
            <div>
                <img className = "img2" src={img} /> 
            </div>
        </Container>

    )
}


export default SectionHome 