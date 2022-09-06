import React from 'react';
import "./estilo.css"
import data from './mock-data';
import ItemsList from '../ItemsList/ItemsList';
import { useState, useEffect } from 'react';
const ItemListContainers = () => {
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
          <ItemsList itemsList={items}/>
      </>
    )
  }
  
  export default ItemListContainers 