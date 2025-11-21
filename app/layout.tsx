import type { Metadata } from 'next'
import './globals.css'
import { RecipeContextProvider } from '@/contexts/RecipeContext'

export const metadata: Metadata = {
  title: 'Recipe Step Tracker',
  description: 'Track and manage your recipes easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'light';
                document.documentElement.dataset.theme = savedTheme;
              })();
            `,
          }}
        />
      </head>
      <body>
        <RecipeContextProvider>
          {children}
        </RecipeContextProvider>
      </body>
    </html>
  )
}
