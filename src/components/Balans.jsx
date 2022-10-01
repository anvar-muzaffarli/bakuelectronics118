import React from 'react'
// CONDITIONAL RENDERING &&

// TERNARY OPEARTOR ? :
const Balans = ({total,money}) => {
  return (
    <>
    {
        total > 0 && money -total !==0 &&(
            <div> <span>{money-total}</span> AZN</div>
        )
    }

    {
        total===0 && money>0 && (
            <div><span>{money} AZN</span></div>
        )
    }

    {
        money-total === 0 && (
            <div>😪</div>
        )
    }
    
    </>
  )
}

export default Balans