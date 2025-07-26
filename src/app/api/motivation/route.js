'use server'
import {GoogleGenAI} from "@google/genai";
import {redirect} from "next/navigation";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    }
);

export async function POST(req){
    const formData = await req.formData();
    const motivation = formData.get('motivation');
    const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `A person has submitted a form asking for motivation. Their reason is:
${motivation}

Write a powerful, emotionally intense motivational message (120–180 words) in a single paragraph. The tone should be bold, empowering, and direct—like a coach firing someone up before a big moment. Include: a strong attention-grabbing opening, recognition of the user's struggle, one practical piece of advice to help them move forward, and a final rallying call-to-action. `,

    });
    const encodedResult = encodeURI(result.text);
    return redirect(`/result?text=${encodedResult}`);
}