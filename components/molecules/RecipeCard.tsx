'use client'

import Link from 'next/link'
import { useRecipeContext } from '@/contexts/RecipeContext'

interface RecipeCardProps {
  id: string
  title: string
  description?: string
  imageUrl?: string
}

export default function RecipeCard({
  id,
  title,
  description = 'No description provided.',
  imageUrl,
}: RecipeCardProps) {
  const { setRecipes } = useRecipeContext()

  const handleDelete = () => {
    if (confirm('Delete this recipe?')) {
      setRecipes((prev) => {
        const updated = { ...prev }
        delete updated[id]
        return updated
      })
    }
  }

  return (
    <article
      className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
      aria-label={`Recipe card for ${title}`}
    >
      <header>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      </header>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Cover for ${title}`}
          className="w-full h-40 object-cover rounded mb-3"
        />
      ) : (
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded mb-3 text-gray-500">
          No image
        </div>
      )}

      <p className="text-gray-600 mb-3">{description}</p>

      <footer className="flex justify-between items-center">
        <Link
          href={`/recipes/${id}`}
          className="text-blue-600 underline hover:text-blue-800"
        >
          View Recipe
        </Link>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </footer>
    </article>
  )
}
