'use client'

import { useState } from 'react'

interface EditableDescriptionProps {
  description?: string
  onSave: (newDescription: string) => void
}

export default function EditableDescription({ description, onSave }: EditableDescriptionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(description || '')

  const handleSave = () => {
    onSave(value)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="flex flex-col gap-2">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded px-2 py-1 w-full h-24"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <p
      className="text-gray-700 cursor-pointer"
      onClick={() => setIsEditing(true)}
      title="Click to edit description"
    >
      {description || <em className="text-gray-500">No description yet. Click to add one.</em>}
    </p>
  )
}
