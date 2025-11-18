'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Recipe {
  title: string
  description?: string
  imageUrl?: string | null
  steps: Record<string, string>
}

interface RecipeContextType {
  recipes: Record<string, Recipe>
  setRecipes: React.Dispatch<React.SetStateAction<Record<string, Recipe>>>
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined)

export const RecipeContextProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Record<string, Recipe>>({})

  useEffect(() => {
    const stored = localStorage.getItem('recipes')
    if (stored) {
      try {
        setRecipes(JSON.parse(stored))
      } catch {
        console.error('Failed to parse stored recipes')
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  )
}

export const useRecipeContext = () => {
  const ctx = useContext(RecipeContext)
  if (!ctx) throw new Error('useRecipeContext must be used within RecipeContextProvider')
  return ctx
}
