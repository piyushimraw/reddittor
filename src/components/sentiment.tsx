import React from "react";
import { SendIcon } from "./icons";

function Sentiment({ text }: { text: string }) {
  const [loading, setLoading] = React.useState(false);
  const [sentiment, setSentiment] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    if (!text) {
      setLoading(false);
      setSentiment(null);
      return;
    }
    fetch(`/classify?text=${encodeURIComponent(text)}`)
      .then((res) => res.json())
      .then((data) => {
        setSentiment(data?.[0]?.label);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [text]);

  if (loading)
    return (
      <>
        <span className="ml-2">...</span>
      </>
    );

  if (!sentiment) return null;

  let color = "text-green-500";
  if (sentiment === "NEGATIVE") {
    color = "text-red-500";
  } else if (sentiment === "NEUTRAL") {
    color = "text-yellow-500";
  }

  return (
    <>
      <SendIcon className={`w-4 h-4 ml-4 mr-2 ${color}`} />
      <span className={`${color}`}>{sentiment}</span>
    </>
  );
}

export default Sentiment;
