import React from "react";
import { SendIcon } from "./ui/icons";

export type Label = "POSITIVE" | "NEGATIVE" | "NEUTRAL";
export type SentimentProps = { label?: Label };

function Sentiment({ label }: SentimentProps) {
  if (!label) return null;

  let color = "text-green-500";
  if (label === "NEGATIVE") {
    color = "text-red-500";
  } else if (label === "NEUTRAL") {
    color = "text-yellow-500";
  }

  return (
    <>
      <SendIcon className={`w-4 h-4 ml-4 mr-2 ${color}`} />
      <span className={`${color}`}>{label}</span>
    </>
  );
}

export default Sentiment;
