import React from 'react'
import ItemsData from '../ItemsDetail/ItemsDetail';
import data from '../ItemListContainers/mock-data';
import { useState, useEffect } from 'react';
const ItemDetailContainers =() => {
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
            <ItemsData itemsData={items}/>
        </>
      )
}

export default ItemDetailContainers