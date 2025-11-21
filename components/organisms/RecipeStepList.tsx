'use client'

import { useRecipeContext } from '@/contexts/RecipeContext'
import RecipeStep from '@/components/molecules/RecipeStep'

export default function RecipeStepList({ recipeId }: { recipeId: string }) {
  const { recipes, setRecipes } = useRecipeContext()
  const recipe = recipes[recipeId]

  const handleEditStep = (stepId: string, newText: string) => {
    setRecipes(prev => ({
      ...prev,
      [recipeId]: {
        ...prev[recipeId],
        steps: {
          ...prev[recipeId].steps,
          [stepId]: newText,
        },
      },
    }))
  }

  const handleDeleteStep = (stepId: string) => {
    setRecipes(prev => {
      const updatedSteps = { ...prev[recipeId].steps }
      delete updatedSteps[stepId]
      return {
        ...prev,
        [recipeId]: {
          ...prev[recipeId],
          steps: updatedSteps,
        },
      }
    })
  }

  return (
    <ol className="list-decimal pl-6 space-y-2">
      {Object.entries(recipe.steps).map(([id, step]) => (
        <RecipeStep
          key={id}
          id={id}
          step={step}
          onEdit={(newText) => handleEditStep(id, newText)}
          onDelete={() => handleDeleteStep(id)}
        />
      ))}
    </ol>
  )
}
