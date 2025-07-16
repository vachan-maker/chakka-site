import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function GET(request) {
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain the history of the state of Kerala",
  });
    return new Response(JSON.stringify({ response: result.text }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
