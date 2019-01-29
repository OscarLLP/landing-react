import React, { Component, Fragment } from 'react';
import Home from './pages/Home'
import { createGlobalStyle } from 'styled-components'


const Globales = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Nunito', sans-serif;
  background-color: #f4fcff;
}

`
class App extends Component {
 render() {
   return (
      <Fragment>
        <Globales />
        <Home />
      </Fragment>
   );
 }
}


export default App;
