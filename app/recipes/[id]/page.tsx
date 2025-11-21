'use client'

import { useParams } from 'next/navigation'
import { useRecipeContext } from '@/contexts/RecipeContext'
import RecipeStepForm from '@/components/organisms/RecipeStepForm'
import RecipeStepList from '@/components/organisms/RecipeStepList'
import EditableDescription from '@/components/molecules/RecipeCardDescription'
import RecipeImageUploader from '@/components/organisms/RecipeImageUploader'
import Link from 'next/link'

export default function RecipePage() {
  const { id } = useParams()
  const { recipes, setRecipes } = useRecipeContext()
  const recipe = recipes[id as string]

  if (!recipe)
    return (
      <section className="p-4">
        <p className="mb-3 text-gray-700">Recipe not found.</p>
        <Link href="/" className="text-blue-600 underline">← Back to recipes</Link>
      </section>
    )

  const updateRecipe = (fields: Partial<typeof recipe>) => {
    setRecipes(prev => ({ ...prev, [id as string]: { ...prev[id as string], ...fields } }))
  }

  return (
    <section aria-labelledby="recipe-title" className="max-w-2xl mx-auto p-6 border rounded-lg shadow">
      <header className="flex justify-between items-center mb-4">
        <h2 id="recipe-title" className="text-2xl font-bold">
          {recipe.title}
        </h2>
        <Link href="/" className="text-blue-500 underline">← Back</Link>
      </header>

      <RecipeImageUploader
        imageUrl={recipe.imageUrl || null}
        title={recipe.title}
        onUpload={imageUrl => updateRecipe({ imageUrl })}
      />

      <EditableDescription
        description={recipe.description}
        onSave={description => updateRecipe({ description })}
      />

      <hr className="my-4" />

      <RecipeStepForm recipeId={id as string} />
      <RecipeStepList recipeId={id as string} />
    </section>
  )
}
