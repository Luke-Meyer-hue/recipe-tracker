'use client'



import {  useRecipeContext } from '@/contexts/RecipeContext'
import RecipeCard from '@/components/molecules/RecipeCard'
import {  useState, FormEvent } from 'react'
import ThemeToggle from '@/components/molecules/ToggleTheme'
import AddRecipeForm from '@/components/molecules/AddRecipeForm'
import ToggleTheme from '@/components/molecules/ToggleTheme'

export default function HomePage() {
  const { recipes, setRecipes } = useRecipeContext()
  const [title, setTitle] = useState('')


  const handleAddRecipe = (e: FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    const id = `recipe-${Date.now()}`
    setRecipes({ ...recipes, [id]: { title, steps: {} } })
    setTitle('')
  }

  return (
    <section>
      <ToggleTheme />
      <AddRecipeForm />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(recipes).map(([id, recipe]) => (
        <RecipeCard
          key={id}
          id={id}
          title={recipe.title}
          description={recipe.description}
          imageUrl={recipe.imageUrl}
        />
      ))}
      </div>
    </section>
  )
}
