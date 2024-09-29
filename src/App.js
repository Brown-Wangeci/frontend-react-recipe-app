import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import LogInPage from './pages/loginPage/LoginPage.js';
import SignUpPage from './pages/signUpPage/SignUpPage.js';
import RecipesPage from './pages/recipesPage/RecipesPage.js';
import Footer from './components/footer/Footer.js';
import ResetPasswordPage from './pages/resetPasswordPage/ResetPasswordPage.js';
import LandingPage from './pages/landingPage/LandingPage.js';
import CreateRecipePage from './pages/createRecipePage/CreateRecipePage.js';
import IndividualRecipePage from './pages/individualRecipePage/IndividualRecipePage.js';
import { UserProvider } from './context/UserContext.js';


function App() {

  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <div className="navbar">
            <Navbar/>
          </div>
          <div className="pages">
            <Routes>
              <Route path='/'>
                <Route index element={<LandingPage/>}/>
                <Route path='login' element={<LogInPage/>}/>
                <Route path='signup' element={<SignUpPage/>}/>
                <Route path='recipes' element={<RecipesPage/>}/>
                <Route path='create-recipe' element={<CreateRecipePage/>}/>
                <Route path='reset-password' element={<ResetPasswordPage/>}/>
                <Route path='recipe/:id' element={<IndividualRecipePage/>}/>
              </Route>
            </Routes>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
