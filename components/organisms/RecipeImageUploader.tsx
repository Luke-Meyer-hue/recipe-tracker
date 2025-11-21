'use client'

import { ChangeEvent } from 'react'

interface RecipeImageUploaderProps {
  imageUrl?: string | null
  title: string
  onUpload: (fileDataUrl: string) => void
}

export default function RecipeImageUploader({ imageUrl, title, onUpload }: RecipeImageUploaderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      onUpload(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="mb-4">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Cover for ${title}`}
          className="w-full h-56 object-cover rounded-lg mb-3"
        />
      ) : (
        <p className="text-gray-500 italic mb-3">No image uploaded yet.</p>
      )}
      <label htmlFor="imageUpload" className="block text-sm font-medium mb-1 text-gray-700">
        Upload new cover photo:
      </label>
      <input id="imageUpload" type="file" accept="image/*" onChange={handleChange} className="text-sm" />
    </div>
  )
}
