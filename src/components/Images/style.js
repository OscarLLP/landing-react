import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-left: 410px;
  width: 500px;
  height: 100px;
  justify-content: space-around;

  div{
    display: flex;
    /* justify-content: space-evenly; */
    flex-direction: column;
    align-items: center;
    width: 125px;
}
  

  img {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
   
  }

  p {
    margin-top: 8px;
    text-align: center;
    font-size: 13px;
  }

`

export default Container;
