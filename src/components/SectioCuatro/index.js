import React from 'react'
import Container  from './style'
import imgs01 from '../../assets/libro.png'
import Images from '../Images'
import imgs02 from '../../assets/mano-celu.png'
import imgs03 from '../../assets/planeta.png'



function SectionCuatro(){   
    return(
        <Container>
            <div className = "content">
            <div class="div-ima">
            <Images
               img={imgs01}
               description= "Largest Collection of Books"
            />
            </div >
            <div class="div-ima">
            <Images 
                img={imgs02}
                description= "One Click Easy Subscription"
            />
            </div>
            <div class="div-ima">
            <Images
                img={imgs03}
                description="Unlimited Books,Anytime you want"
            />
            </div>
            </div>
        </Container>
    )
}

export default SectionCuatro