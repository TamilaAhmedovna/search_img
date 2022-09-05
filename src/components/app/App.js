import ImagesList from '../images-list/images-list';
import Search from '../search/search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <section>
        <ImagesList />        
      </section>
    </div>
  );
}

export default App;
