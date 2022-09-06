
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainers from "./components/ItemListContainers/ItemListContainers.js";

function App() {
  return (<>
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <main>
        <h2>Mis Productos</h2>
        <ul className='items'>
        <ItemListContainers  />
        </ul>
      </main>
    </div>
    </>
  );
}

export default App;
