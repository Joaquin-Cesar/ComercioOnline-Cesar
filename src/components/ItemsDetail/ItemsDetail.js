import React from 'react'
import Items from '../Items/Items'
const ItemsDetail =({itemsDetail}) =>{
console.log(itemsDetail)
    return (
    <>
    
    {itemsDetail.map((producto)=>{
    

    return(
        <Items 
        key={producto.id}
        nombre={producto.nombre}
        precio={producto.precio}
        imagen={producto.imagen}
        />
       )
    
      })}
      </> 
  )

}

export default ItemsDetail