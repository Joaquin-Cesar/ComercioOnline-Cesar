import React from 'react';
import "./estilo.css"

const ItemListContainers = ({nombre}) => {
    return (
      <li className='productos'> {nombre}</li>
    )
  }
  
  export default ItemListContainers 