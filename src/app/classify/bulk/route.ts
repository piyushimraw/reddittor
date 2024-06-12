import { NextRequest, NextResponse } from "next/server";
import PipelineSingleton from "../pipeline";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const texts = body.texts;
  if (!texts || !Array.isArray(texts) || texts.length === 0) {
    return NextResponse.json(
      {
        error: "Missing text parameter",
      },
      { status: 400 }
    );
  }
  const classifier = await PipelineSingleton.getInstance();

  let result = [];

  for (const text of texts) {
    result.push(await classifier(text));
  }

  return NextResponse.json(result);
}
