'use client'

import { useState, FormEvent } from 'react'
import { useRecipeContext } from '@/contexts/RecipeContext'
import AddButton from '@/components/atoms/AddButton'

interface AddRecipeFormProps {
  initialTitle?: string
}

export default function AddRecipeForm({ initialTitle = '' }: AddRecipeFormProps) {
  const { recipes, setRecipes } = useRecipeContext()
  const [title, setTitle] = useState(initialTitle)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    const id = `recipe-${Date.now()}`
    setRecipes({ ...recipes, [id]: { title, steps: {} } })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6" aria-label="Add Recipe">
      <label htmlFor="recipe-title" className="block font-semibold mb-1">
        Add New Recipe
      </label>
      <input
        id="recipe-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter recipe name"
        className="w-full border rounded p-2 mb-2"
      />
      <AddButton />
    </form>
  )
}
