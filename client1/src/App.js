
import './App.css';

import {Router} from '@reach/router'
import CreateProducts from './components/createProduct';
import OneProduct from './components/viewOneProduct'
import UpdateProduct from './components/updateproduct';

function App() {
  return (
    <div className="App">
      
      <h1>Product Manager</h1>
      
      <br/>

      

      <br/>

      

      <Router>

        <OneProduct path ="/api/product/:_id"/>
        <CreateProducts path="/"/>
        <UpdateProduct path="/api/edit/:_id"/>
      </Router>
      
    </div>
  );
}

export default App;
