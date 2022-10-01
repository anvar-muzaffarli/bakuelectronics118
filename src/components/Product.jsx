import React from 'react'
// Obyektin parcalanmasi
const Product = ({product, basket,total,setBasket}) => {

const basketItem = basket.find(item=> item.id === product.id)


const addBasket = _ => {
  const checkBasket = basketItem

  if(checkBasket) {
    checkBasket.amount += 1

    // spread operator
    // const arr1 = ["Aygun", "Ayshen", "Mehdi"]

    // const arr2 = [...arr1, "Rauf"]

    setBasket([...basket.filter(item=>item.id !==product.id ), checkBasket ])
  }

  else {
    setBasket([...basket, 
      {
      id:product.id,
      amount:1
    }])
  }
}




  return (
    <div className="product">
    <img src={product.image} alt="" />
    <h5>{product.title}</h5>
    <div className="price">{product.price}</div>

    <div className="actions">
        <button className="refund-btn"  >REFUND BASKET</button>
        <span></span>
        <button className="add-basket-btn">ADD BASKET</button>
    </div>
</div>
  )
}

export default Product