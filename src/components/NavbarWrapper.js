import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const NavbarWrapper = () => {
    const [navLinks, setNavLinks] = useState([]);
    const location = useLocation();
  
    useEffect(()=>{
      if (location.pathname.startsWith('/recipe/')) {
        setNavLinks([
          {name: 'Home', path: '/'},
          {name: 'Recipes', path: '/recipes'},
          {name: 'Create Recipe', path: '/create-recipe'},
          {name: 'My Recipes', path: '/my-recipes'},
          {name: 'Favorites', path: '/favorites'}
        ]);
      } else {
        switch (location.pathname) {
          case '/recipes':
            setNavLinks([
                {name: 'Home', path: '/'},
                {name: 'Create Recipe', path: '/create-recipe'},
                {name: 'My Recipes', path: '/my-recipes'},
                {name: 'Favorites', path: '/favorites'}
            ]);
            break;
          case '/create-recipe':
            setNavLinks([
                {name: 'Home', path: '/'},
                {name: 'Recipes', path: '/recipes'},
                {name: 'Create Recipe', path: '/create-recipe'},
                {name: 'My Recipes', path: '/my-recipes'},
                {name: 'Favorites', path: '/favorites'}
              ]);
            break;
          case '/favorites':
            setNavLinks([
              {name: 'Home', path: '/'},
              {name: 'Recipes', path: '/recipes'},
              {name: 'Create Recipe', path: '/create-recipe'},
              {name: 'My Recipes', path: '/my-recipes'},
            ]);
            break;
          case '/my-recipes':
            setNavLinks([
              {name: 'Home', path: '/'},
              {name: 'Recipes', path: '/recipes'},
              {name: 'Favorites', path: '/favorites'},
              {name: 'Create Recipe', path: '/create-recipe'}
            ]);
            break;
          case '/reset-password':
            setNavLinks([
                {name: 'Home', path: '/'},
                {name: 'Create Recipe', path: '/create-recipe'},
                {name: 'My Recipes', path: '/my-recipes'},
                {name: 'Favorites', path: '/favorites'}
            ]);
            break;
          default:
            setNavLinks([
                {name: 'Home', path: '/'},
                {name: 'Recipes', path: '/recipes'}
            ]);
            break;
        }
      }
    },[location.pathname]);
    return ( 
        <Navbar navLinks={navLinks}/>
     );
}
 
export default NavbarWrapper;