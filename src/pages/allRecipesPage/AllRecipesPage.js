import RecipesPage from "../recipesPage/RecipesPage";


const AllRecipesPage = () => {

    const url = process.env.REACT_APP_BACKEND_URL + "/recipes";
    const pageTitle = "All Recipes";


    return ( 
        <RecipesPage url={url} page={pageTitle} />
     );
}
 
export default AllRecipesPage;