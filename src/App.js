import './App.css';
import SearchBar from './components/searchbar';
import Products from './components/products';
import ProductProvider from './context/productProvider';
function App() {
  return (
<ProductProvider>
    <div className="App">
      <header className="App-header">
      <SearchBar></SearchBar>
      <Products></Products>
      </header>
    </div>
  </ProductProvider>
  );
}

export default App;
