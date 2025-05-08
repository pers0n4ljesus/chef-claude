import React from 'react'
import Recipe from '/src/components/Recipe'
import IngredientsList from '/src/components/IngredientsList'
import { getRecipeFromMistral } from "/src/ai.js"


export default function Main() {

  const [ingredients, setIngredients] = React.useState([])

  const [recipe, setRecipe] = React.useState("")

  function addIngredient(formData) {
    setIngredients(prevIngredients => [...prevIngredients, formData.get('ingredient')])
  }

  async function getRecipe () {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }



  return (
    <main className="App-main">
      <form action={addIngredient} className="add-ingredient-form">
        <input 
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 &&
        <IngredientsList 
          ingredients={ingredients} 
          getRecipe={getRecipe}
        />
      }

      { recipe &&
        <Recipe recipe={recipe}/>
      }

    </main>
  )
}