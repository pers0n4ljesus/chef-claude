export default function ingredientsList ({ ingredients, getRecipe, ref}) {

  const ingredientList = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>
  })
  


  return (
    <section ref={ref}>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
      {ingredients.length > 3 &&
        <div className="get-recipe-container">
        <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={getRecipe}>Get a recipe</button>
    </div>}
    </section>
  )
}