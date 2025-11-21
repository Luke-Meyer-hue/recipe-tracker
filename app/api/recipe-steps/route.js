import {NextResponse } from 'next/server';
import { getSteps } from '../../data';
 
export async function GET() {
    try {
        return NextResponse.json(getSteps());
    } catch (err) {
        console.log(err);
    }
    
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { value, isCompleted } = body;
        const newRecipeStep = addStep(value, isCompleted);
        return NextResponse.json(newRecipeStep);
    } catch (err) { 
        console.log(err);
    }
    

}