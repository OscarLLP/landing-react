import React from 'react'
import Container from './style'
import personas from '../../assets/personas.png'
import Button from '../Button'
import Wrapper from '../Wrapper';


function SectionSiete(){
    return(
        <Wrapper>
        <Container>
            <div>
                <h2 className = "h2">Don't be shy, say hi!</h2>
                <article>
                    <p className = "p">Talk about books, happiness, lifestyle and <br /> 
                     everything that’s realted books.</p>
                </article>
            </div>

            <div className = "button">
            <Button  name = "Get The App"/>
            </div>

            <figure className = "figure">
                <img className = "personas" src={personas} />
            </figure>
        </Container>
        </Wrapper>

    )
}

export default SectionSiete