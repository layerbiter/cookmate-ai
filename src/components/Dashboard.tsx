import { useState } from 'react'
import { useUserStore } from '../stores/userStore'

export function Dashboard() {
  const { email, preferences } = useUserStore()
  const [recipe, setRecipe] = useState<{ title: string; ingredients: string[] } | null>(null)

  const handleGenerateRecipe = () => {
    setRecipe({
      title: "Delicious Pasta Primavera",
      ingredients: [
        "8 oz pasta",
        "2 cups mixed vegetables",
        "3 cloves garlic",
        "2 tbsp olive oil",
        "Salt and pepper to taste"
      ]
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-neon w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Welcome, {email}!
        </h1>
        
        <div className="mb-6 text-neon-blue">
          <p>Your preferences:</p>
          <ul className="mt-2 space-y-1">
            <li>Diet: {preferences?.diet}</li>
            <li>Cuisines: {preferences?.cuisines.join(', ')}</li>
            <li>Goals: {preferences?.goals.join(', ')}</li>
          </ul>
        </div>

        <button
          onClick={handleGenerateRecipe}
          className="w-full bg-neon-purple text-white rounded-lg py-2 px-4 
                   hover:bg-neon-pink transition-colors duration-300
                   focus:outline-none focus:ring-2 focus:ring-neon-blue mb-6"
        >
          Generate Recipe
        </button>

        {recipe && (
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-3 text-white">{recipe.title}</h2>
            <ul className="list-disc list-inside text-neon-blue">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}