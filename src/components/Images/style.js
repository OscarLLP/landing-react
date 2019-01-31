import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #e8f5fa;
 
  div{
    display: flex;
    align-items: center;
    height: 200px;
   
   
}
  
  .img3 {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
   
  }

  .img-text {
    margin-top: 8px;
    text-align: center;
    font-size: 13px;
    width: 155px;
  }

`

export default Container;
