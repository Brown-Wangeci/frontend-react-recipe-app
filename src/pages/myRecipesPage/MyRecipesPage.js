import RecipesPage from "../recipesPage/RecipesPage";

const MyRecipesPage = () => {
    const url = process.env.REACT_APP_BACKEND_URL + "/users/myrecipes";
    const pageTitle = "My Recipes";

    return (
        <RecipesPage credentials={true} url={url} page={pageTitle}/>
    );
};

export default MyRecipesPage;

