import React from 'react'
import Container from './style'
import ico1 from '../../assets/ico1-f.png'
import ico2 from '../../assets/ico2-f.png'
import ico3 from '../../assets/ico3-f.png'
import ico4 from '../../assets/ico4-f.png'


function CompoFooter(){
    return(
        <Container>
            <div>
                <img  className ="img" src={ico1} />
                <img  className ="img" src={ico2} />
                <img  className ="img" src={ico3} />
                <img  className ="img" src={ico4} />

                <p><small className = "small">Privacy Policy  |  Terms of use - All Rights Reserved with Booklov</small></p>
            </div>
        </Container>
    )
}

export default CompoFooter