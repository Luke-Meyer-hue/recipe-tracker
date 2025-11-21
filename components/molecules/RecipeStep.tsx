'use client'

import { useState } from 'react'
import CheckboxWithLabel from '@/components/atoms/CheckboxWithLabel'

interface RecipeStepProps {
  id: string
  step: string
  onEdit: (newText: string) => void
  onDelete: () => void
}

export default function RecipeStep({ id, step, onEdit, onDelete }: RecipeStepProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(step)

  const handleSave = () => {
    onEdit(value)
    setIsEditing(false)
  }

  return (
    <li className="mb-2 gap-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 border rounded px-2 py-1"
          />
          <button
            onClick={handleSave}
            aria-label={`Save edits to ${step}`}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            aria-label={`Cancel editing ${step}`}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <CheckboxWithLabel id={id} label={step} />
          <button
            onClick={() => setIsEditing(true)}
            aria-label={`Edit ${step}`}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            aria-label={`Delete ${step}`}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </>
      )}
    </li>
  )
}
