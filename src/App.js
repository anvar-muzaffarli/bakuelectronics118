import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import {React, useState} from 'react'

// melumat bazasi
import products from './products.json'
// komponentler
import Navbar from './components/Navbar';
import Product from './components/Product';
function App() {

  // STATE ANLAYISHINI
  const [money,setMoney] = useState(1500)
  const [basket, setBasket] = useState([])
  const [total,setTotal] = useState(0)


  return (
    <>

 <Navbar total={total} money={money} />
    <div className='mehsullar'>
    {
      products.map(p =>(
        <Product product={p} basket={basket} setBasket={setBasket} total={total} />
      ))
    }

</div>

 </>
  );
}

export default App;
