'use client'

import { useState, FormEvent } from 'react'
import { useRecipeContext } from '@/contexts/RecipeContext'

export default function RecipeStepForm({ recipeId }: { recipeId: string }) {
  const [input, setInput] = useState('')
  const { recipes, setRecipes } = useRecipeContext()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const id = `step-${Date.now()}`
    const updatedRecipe = {
      ...recipes[recipeId],
      steps: { ...recipes[recipeId].steps, [id]: input },
    }
    setRecipes({ ...recipes, [recipeId]: updatedRecipe })
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Add Step">
      <label htmlFor="recipe-step" className="block font-semibold mb-1">
        Add Recipe Step
      </label>
      <textarea
        id="recipe-step"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        className="w-full border rounded p-2 mb-2"
      />
      <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
        Add Step
      </button>
    </form>
  )
}
