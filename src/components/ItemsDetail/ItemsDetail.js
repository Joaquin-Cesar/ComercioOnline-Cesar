import React from 'react'
import Items from '../Items/Items'
const ItemsDetail =({itemsDetail}) =>{

    const Item = itemsDetail.filter((el) =>el.id===0)
    console.log(Item)
    return (
    <>
    
    {Item.map((producto)=>{
    

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