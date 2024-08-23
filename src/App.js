import './App.css';
import GeneratedCard from './components/generatedcard/GeneratedCard.js';
import Ingredients from './components/ingredients/Ingredients.js';
import Instructions from './components/instructions/Instructions.js';

function App() {

  return (
    <div className="App">
      <div className="styles-dec">
        <GeneratedCard />
        <Ingredients />
      </div>
      <Instructions />
    </div>
  );
}

export default App;
