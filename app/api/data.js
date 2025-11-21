export const recipeSteps = {
    1: {
        value: "In a small pot boil some water",
        isCompleted: false,
    },
    2: {
        value: "Add dried ramen and simmer for 4 minutes",
        isCompleted: false,

    }
};

export function getSteps() {
    return Object.entries(recipeSteps).map(([id, data]) => ({ id, ...data }));
}

export function addStep(step) {
    const id = Date.now().toString();
    recipeSteps[id] = { value: step, isCompleted: false };
    return { id, ...recipeSteps[id] };
}   