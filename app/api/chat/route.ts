import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    // 'gemini-2.5-flash-lite' is the primary FREE model in 2026
    model: google("gemini-2.5-flash-lite"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}