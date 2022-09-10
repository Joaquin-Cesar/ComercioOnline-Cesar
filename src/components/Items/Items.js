import React from 'react'

const Items = ({id, nombre, precio, imagen}) => {

  return (
   <>
   
     <div className='contenedorPadre'>
            <img src={imagen} alt={nombre}/>
            <div>
              <h5>{nombre}</h5>
            <p> {precio}</p>
              <button className={id}>Comprar</button>
            </div>
          </div>
   </>
  )
}

export default Items