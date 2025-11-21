'use client'

interface ThemeToggleButtonProps {
  onClick: () => void
  label?: string
}

export default function ThemeToggleButton({ onClick, label = 'Toggle Theme' }: ThemeToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border rounded px-3 py-1 font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={label}
    >
      {label}
    </button>
  )
}
