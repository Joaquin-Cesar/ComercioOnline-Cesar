
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainers from "./components/ItemListContainers/ItemListContainers.js";
import ItemDetailContainers from "./components/ItemDetailContainers/ItemDetailContainers.js";

function App() {
  return (<>
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <main>
        <h2>Mis Productos</h2>
        <ul className='items'>
        <ItemDetailContainers  />
        </ul>
      </main>
    </div>
    </>
  );
}

export default App;
