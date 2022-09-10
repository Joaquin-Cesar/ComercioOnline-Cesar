import React from 'react';
import '../ItemListContainers/estilo.css'
import data from './mock-data';
import ItemsDetail from '../ItemsDetail/ItemsDetail';
import { useState, useEffect } from 'react';
const ItemDetailContainers = () => {
   const[items, setItems] = useState([])
  const getData = new Promise ((resolve,reject)=>{
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

   useEffect(() => {
    
   getData.then((result)=>{
    setItems(result)
    console.log(result)
   })
   }, [])
  return (
      <>
          <ItemsDetail itemsDetail={items} />
      </>
    )
  }
  
  export default ItemDetailContainers