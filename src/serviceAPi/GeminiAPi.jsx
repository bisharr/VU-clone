import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = "AIzaSyCKPaMOFURKXnokmRNEKUTTrjiyPUNN3u4";
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function askGemini(question) {
  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: question,
  });

  const response = await result.text;

  console.log("Gemini Text:", response); // ✅ This should log your answer
  return response; // ✅ You must return the generated text here
}
