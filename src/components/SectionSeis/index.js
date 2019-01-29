import React from 'react'
import Container from './style'
import imgi from '../../assets/img-izqui.png'
import imgde from '../../assets/img-derec.png'
import Wrapper from '../Wrapper';


function SectionSeis(){
    return(
        <Wrapper>
        <Container>
            <figure className = "fig1">
                <img  className ="imgiz" src = {imgi} />
            </figure>
            <div>
            <h2>Success stories</h2>
           <p>Have you ever made friends while reading books with <br />
            Booklov? We would love to hear your story.</p>
            <p><span>Share your story</span></p>
            <p><small className ="small">Share your story</small></p>

            </div>
            <figure className = "fig2">
                <img className ="imgde" src = {imgde}/>
            </figure>
        </Container>
        </Wrapper>
    )
}

export default SectionSeis