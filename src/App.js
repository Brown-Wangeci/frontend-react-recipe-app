import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from './pages/loginPage/LoginPage.js';
import SignUpPage from './pages/signUpPage/SignUpPage.js';
// import RecipesPage from './pages/recipesPage/RecipesPage.js';
import Footer from './components/footer/Footer.js';
import ResetPasswordPage from './pages/resetPasswordPage/ResetPasswordPage.js';
import LandingPage from './pages/landingPage/LandingPage.js';
import CreateRecipePage from './pages/createRecipePage/CreateRecipePage.js';
import IndividualRecipePage from './pages/individualRecipePage/IndividualRecipePage.js';
import NavbarWrapper from './components/NavbarWrapper.js';
import AllRecipesPage from './pages/allRecipesPage/AllRecipesPage.js';
import FavoritesPage from './pages/favoritesPage/FavoritesPage.js';
import MyRecipesPage from './pages/myRecipesPage/MyRecipesPage.js';
import ProtectedRoute from './routingcomponents/ProtectedRoute.js';
import PublicRoute from './routingcomponents/PublicRoute.js';
import { Toaster } from 'sonner';
import NotFoundPage from './pages/notFoundPage/NotFoundPage.js';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <div className="navbar">
            <NavbarWrapper/>
          </div>
          <div className="pages">
            <Routes>
              <Route path='/'>
                <Route index element={<LandingPage/>}/>
                <Route path='login' element={<PublicRoute><LogInPage/></PublicRoute>}/>
                <Route path='signup' element={<PublicRoute><SignUpPage/></PublicRoute>}/>
                <Route path='recipes' element={<AllRecipesPage/>}/>
                <Route path='favorites' element={<ProtectedRoute><FavoritesPage/></ProtectedRoute>}/>
                <Route path='my-recipes' element={<ProtectedRoute><MyRecipesPage/></ProtectedRoute>}/>
                <Route path='create-recipe' element={<ProtectedRoute><CreateRecipePage/></ProtectedRoute>}/>
                <Route path='reset-password' element={<ResetPasswordPage/>}/>
                <Route path='recipe/:id' element={<IndividualRecipePage/>}/>
              </Route>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </BrowserRouter>
        <Toaster
          icons={{
            success: '🎉',
            error: '😢'
            }
          }
          richColors
          position="top-right"
          toastOptions={{
            closeButton: true,
            style: {
              padding: '15px 25px',
              fontSize: '20px',
              fontWeight: 'bold',
              gap: '20px',
              alignItems: 'flex-start',
            }
          }}
        />

    </div>
  );
}

export default App;
