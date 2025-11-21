'use client'

import { useState, useLayoutEffect } from 'react'
import ThemeToggleButton from '@/components/atoms/ToggleThemeButton'

export default function ToggleTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme as 'light' | 'dark')
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return <ThemeToggleButton onClick={handleToggle} label="Toggle Theme" />
}
