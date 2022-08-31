import { useState } from "react"
import "./estiloDeItems.css"
export const ItemsCount = () => {
    const [contador, setContador] = useState(0);
    const suma = () =>{
        setContador(contador + 1)
    }

    const resta = () =>{

    setContador(contador - 1)
  
        
     
      
    }
  return (
    <>
    <div className="contador">
    <button onClick={suma} className ="sumador">+</button>
    <h2 className="cantidad">{contador}</h2>
    <button onClick={resta} className ="restador">-</button>
    </div>


    </>
  )
}

export default ItemsCount