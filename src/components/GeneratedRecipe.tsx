interface GeneratedRecipeProps {
  userData: {
    email: string
    preferences: {
      diet: string
      cuisines: string[]
      goals: string[]
    }
    selectedProducts: string[]
  }
  onComplete: () => void
}

export function GeneratedRecipe({ userData, onComplete }: GeneratedRecipeProps) {
  // Static recipe for demo
  const recipe = {
    title: 'Neon Stir-Fry Bowl',
    ingredients: [
      'Noodles',
      'Chicken',
      'Mixed Vegetables',
      'Soy-Glow Sauce'
    ],
    instructions: 'Stir-fry chicken and vegetables under neon lights. Toss with noodles and sauce. Enjoy futuristic flavors!'
  }

  return (
    <div className="panel">
      <h2>{recipe.title}</h2>
      
      <div className="recipe-section">
        <h3 className="label">Ingredients</h3>
        <ul className="space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-neon-cyan">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe-section mt-4">
        <h3 className="label">Instructions</h3>
        <p className="text-neon-cyan">
          {recipe.instructions}
        </p>
      </div>

      <button 
        onClick={onComplete}
        className="button mt-6"
      >
        Go to Dashboard
      </button>
    </div>
  )
}