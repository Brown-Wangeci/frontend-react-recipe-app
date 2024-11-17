import RecipesPage from "../recipesPage/RecipesPage";

const FavoritesPage = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/users/favorites";
    const pageTitle = "My Saved Recipes";

    return (
        <RecipesPage credentials={true} url={url} page={pageTitle}/>
    );
};

export default FavoritesPage;
