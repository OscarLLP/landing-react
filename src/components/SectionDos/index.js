import React from 'react'
import { Container } from './style'
import img from '../../assets/img-mano.png'


function SectionDos(){
    return(
        <Container>
                <div>
                    <img src={img} />
                </div>

                    <div className = "container-div">
                        <div>
                            <p className = "text-p1">Talking book, happiness, lifestyle and <br />
                            everything that’s realted books.</p>
                            
                        </div>

                        <div className = "div-2">
                            <p className = "text-p2">Join us on Telegram</p>
                        </div>
                    </div>


                
        </Container>
        
        

    )

}


export default SectionDos