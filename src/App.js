import logo from './logo.svg';
import './App.css';
import EHeader from './EHeader';
import EBoody from './EBoody';
import CCRecipesList from './CCRecipsList';
import CCMyKitchen from './CCMyKitchen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <CCMyKitchen/>
      </header>
    </div>
  );
}

export default App;
