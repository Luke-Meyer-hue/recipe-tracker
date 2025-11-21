export async function fetchRecipes() {
    const res = await fetch('/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            recipes {
              id
              title
              description
              imageUrl
            }
          }
        `,
      }),
    })
    const { data } = await res.json()
    return data.recipes
  }
  
  export async function createRecipe(title: string) {
    const res = await fetch('/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation CreateRecipe($input: RecipeInput!) {
            createRecipe(input: $input) {
              id
              title
              description
              imageUrl
            }
          }
        `,
        variables: { input: { title } },
      }),
    })
    const { data } = await res.json()
    return data.createRecipe
  }
  