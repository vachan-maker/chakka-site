import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function GET(request) {
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Generate a long, coherent, and meaningful paragraph in Malayalam (around 150–200 words). The content should be general, safe for all audiences, and free from political, religious, or controversial themes. It should reflect positive or neutral ideas, use standard grammar and vocabulary, and be suitable for general reading by people of all ages. Avoid any offensive or culturally inappropriate references.Do not include any explanations, introductions, or English text—only output the paragraph.",
  });
    return new NextResponse.json({ response: result.text });
}
