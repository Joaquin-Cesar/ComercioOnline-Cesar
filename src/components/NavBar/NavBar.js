import logo from '../../logo.svg';
import "./styles.css";
import CartWidget from './CartWidget/CartWidget';
const NavBar = () =>{
    return(
         
        <div className='NavBar-container'>
          <div> <img src={logo} width={"50px"} alt= "logo"/></div>  
          <div>
            <ul>
              <li><a href='#'>Todos</a></li>
              <li><a href='#'>Hamburguesa</a></li>
              <li><a href='#'>Pizza</a></li>
              <li><a href='#'>Complementos</a></li>
              <li><a href='#'>Bebida</a></li>
              <li><a href='#'>Postre</a></li>
              </ul>
           </div> 
          <div><button><CartWidget/></button></div> 
        </div>
      
    )
}
export default NavBar