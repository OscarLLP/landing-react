import styled, { css } from 'styled-components'

const Container = styled.div`
text-align: center;
display: flex;
justify-content: space-between;


.Section51{
    height: 350px;
}

.title{
    font-size: 21px;
    font-weight: 800px;
    color: #2f4b6e;
    margin-top: 110px;
    
}

.text-p{
    font-size: 13px;
    color: #2f4b6e;
    height: 100 px;

 
}

${props => props.reverse && css`
    flex-direction: row-reverse;
  `}

`

export default Container