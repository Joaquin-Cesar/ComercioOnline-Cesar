import React from 'react';
import "./estilo.css"
import ItemsCount from './ItemsCount/ItemsCount';
const ItemListContainers = ({nombre}) => {
    return (
      <>
      <div className='productos'>
      <li className='producto'> {nombre}</li>
      <ItemsCount />
      </div>
      </>
    )
  }
  
  export default ItemListContainers 