import './App.css';
import GeneratedCard from './components/generatedcard/GeneratedCard.js';
import Ingredients from './components/ingredients/Ingredients.js';
import Instructions from './components/instructions/Instructions.js';
import Login from './components/login/Login.js';
import Navbar from './components/navbar/Navbar.js';
import SignUp from './components/signup/SignUp.js';

function App() {

  return (
    <div className="App">
      <div className="styles-dec">
        <SignUp />    
      </div>
    </div>
  );
}

export default App;
