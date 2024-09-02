import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import LogInPage from './pages/loginPage/LoginPage.js';
import SignUpPage from './pages/signUpPage/SignUpPage.js';
import RecipesPage from './pages/recipesPage/RecipesPage.js';
import Footer from './components/footer/Footer.js';
import ResetPasswordPage from './pages/resetPasswordPage/ResetPasswordPage.js';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="pages">
          <Routes>
            <Route path='/'>
              <Route path='login' element={<LogInPage/>}/>
              <Route path='signup' element={<SignUpPage/>}/>
              <Route path='recipes' element={<RecipesPage/>}/>
              <Route path='reset-password' element={<ResetPasswordPage/>}/>
            </Route>
          </Routes>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
