import { useState, useEffect } from 'react';
import styles from './recipeform.module.css';
import { MdCancel } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";



const RecipeForm = ({ recipeToEdit, onSaveRecipe }) => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    ingredients: [''],
    instructions: [''],
    category: '',
    method: '',
    cuisine: '',
    diet: '',
    course: '',
    note: '',
    mealtime: '',
    image: null,
    cookingtime: 0,
    serving: 0,
    budget: 0,
    preptime: 0,
  });

  useEffect(() => {
    if (recipeToEdit) {
      setRecipeData(recipeToEdit);
    }
  }, [recipeToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleAddIngredient = () => {
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, ''],
    });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipeData.ingredients];
    updatedIngredients[index] = value;
    setRecipeData({
      ...recipeData,
      ingredients: updatedIngredients,
    });
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = recipeData.ingredients.filter((_, i) => i !== index);
    setRecipeData({
      ...recipeData,
      ingredients: updatedIngredients,
    });
  };

  const handleAddInstruction = () => {
    setRecipeData({
      ...recipeData,
      instructions: [...recipeData.instructions, ''],
    });
  };

  const handleInstructionChange = (index, value) => {
    const updatedInstructions = [...recipeData.instructions];
    updatedInstructions[index] = value;
    setRecipeData({
      ...recipeData,
      instructions: updatedInstructions,
    });
  };

  const handleRemoveInstruction = (index) => {
    const updatedInstructions = recipeData.instructions.filter((_, i) => i !== index);
    setRecipeData({
      ...recipeData,
      instructions: updatedInstructions,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRecipeData({
      ...recipeData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveRecipe(recipeData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
  {/* Recipe Name Input Block */}
  <div className={styles.inputBlock}>
    <label>Recipe Name</label>
    <input
      type="text"
      name="name"
      value={recipeData.name}
      onChange={handleInputChange}
      placeholder="E.g. Spaghetti Bolognese"
      required
    />
  </div>

  {/* Ingredients Input Block */}
  <div className={styles.inputBlock}>
    <label>Ingredients</label>
    {recipeData.ingredients.map((ingredient, index) => (
      <div key={index} className={styles.ingredientInput}>
        <input
          type="text"
          value={ingredient}
          onChange={(e) => handleIngredientChange(index, e.target.value)}
          placeholder="E.g. 200g Spaghetti"
          required
        />
        <MdCancel
          onClick={() => handleRemoveIngredient(index)}
          className={styles.removeButton}
        />
      </div>
    ))}
    <button
      type="button"
      onClick={handleAddIngredient}
      className={styles.addButton}
    >
      Add Ingredient
    </button>
  </div>

  {/* Instructions Input Block */}
  <div className={styles.inputBlock}>
    <label>Instructions</label>
    {recipeData.instructions.map((instruction, index) => (
      <div key={index} className={styles.instructionInput}>
        <textarea
          value={instruction}
          onChange={(e) => handleInstructionChange(index, e.target.value)}
          placeholder="E.g. Boil spaghetti for 10 minutes"
          required
          rows={3}
        />
        <MdCancel
          onClick={() => handleRemoveInstruction(index)}
          className={styles.removeButton}
        />
      </div>
    ))}
    <button
      type="button"
      onClick={handleAddInstruction}
      className={styles.addButton}
    >
      Add Instruction
    </button>
  </div>

  {/* Category Input Block */}
  <div className={styles.inputBlock}>
    <label>Category</label>
    <input
      type="text"
      name="category"
      value={recipeData.category}
      onChange={handleInputChange}
      placeholder="E.g. Pasta"
    />
  </div>

  {/* Image Input Block */}
  <div className={styles.inputBlock}>
    <label className={styles.imageLabel} htmlFor="imageUpload">
      <span>{recipeData.image ? 'Change Image' : 'Upload Image'}</span>
      <span className={styles.supportedFormats}>
        supported formats: jpg, jpeg, png
      </span>
      <IoCloudUploadOutline className={styles.uploadIcon} />
    </label>
    <input
      id="imageUpload"
      type="file"
      accept="image/*"
      onChange={handleImageChange}
    />
    {recipeData.image && (
      <div className={styles.preview}>
        <h3>Image Preview</h3>
        <img
          src={URL.createObjectURL(recipeData.image)}
          alt="Recipe Preview"
          className={styles.imagePreview}
        />
      </div>
    )}
  </div>

  {/* Additional Info Input Blocks */}
  <div className={styles.inputBlock}>
    <label>Method of Cooking</label>
    <input
      type="text"
      name="method"
      value={recipeData.method}
      onChange={handleInputChange}
      placeholder="E.g. Boiling"
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Cuisine</label>
    <input
      type="text"
      name="cuisine"
      value={recipeData.cuisine}
      onChange={handleInputChange}
      placeholder="E.g. Italian"
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Diet</label>
    <input
      type="text"
      name="diet"
      value={recipeData.diet}
      onChange={handleInputChange}
      placeholder="E.g. Vegetarian"
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Course</label>
    <input
      type="text"
      name="course"
      value={recipeData.course}
      onChange={handleInputChange}
      placeholder="E.g. Main Course"
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Note</label>
    <textarea
      name="note"
      value={recipeData.note}
      onChange={handleInputChange}
      placeholder="Any special notes about the recipe?"
      rows={4}
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Meal Time (Breakfast, Lunch, Dinner, etc.)</label>
    <input
      type="text"
      name="mealtime"
      value={recipeData.mealtime}
      onChange={handleInputChange}
      placeholder="E.g. Dinner"
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Cooking Time (minutes)</label>
    <input
      type="number"
      name="cookingtime"
      value={recipeData.cookingtime}
      onChange={handleInputChange}
      placeholder="E.g. 30"
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Serving</label>
    <input
      type="number"
      name="serving"
      value={recipeData.serving}
      onChange={handleInputChange}
      placeholder="E.g. 4 servings"
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Budget</label>
    <input
      type="number"
      name="budget"
      value={recipeData.budget}
      onChange={handleInputChange}
      placeholder="E.g. 20"
    />
  </div>

  <div className={styles.inputBlock}>
    <label>Prep Time (minutes)</label>
    <input
      type="number"
      name="preptime"
      value={recipeData.preptime}
      onChange={handleInputChange}
      placeholder="E.g. 10"
    />
  </div>

  <button type="submit" className={styles.submitButton}>Save Recipe</button>
</form>

  );
};

export default RecipeForm;
