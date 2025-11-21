// components/atoms/CheckboxWithLabel.tsx
'use client'

import { useState } from 'react'

interface CheckboxWithLabelProps {
  id: string
  label: string
}

export default function CheckboxWithLabel({ id, label }: CheckboxWithLabelProps) {
  const [checked, setChecked] = useState(false)

  return (
    <>
    <div className="flex items-center gap-2" >
      <label
        htmlFor={id}
        style={{ textDecoration: checked ? 'line-through' : 'none' }}
        className="flex-1 cursor-pointer"
      >
        {label}
      </label>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
    </>
  )
}
