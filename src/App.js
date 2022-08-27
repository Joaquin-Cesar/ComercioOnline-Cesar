
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainers from "./components/ItemListContainers/ItemListContainers.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <main>
        <h2>Mis Productos</h2>
        <ul className='items'>
        <ItemListContainers nombre= "Hamburguesa" />
        <ItemListContainers nombre= "Pizza" />
        <ItemListContainers nombre= "Complementos" />
        <ItemListContainers nombre= "Bebidas" />
        <ItemListContainers nombre= "Postres" />
        </ul>
      </main>
    </div>
    
  );
}

export default App;
