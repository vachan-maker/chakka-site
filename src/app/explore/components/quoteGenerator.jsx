import { useEffect, useState, useRef } from "react";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const hasFetched = useRef(false);
  const [author,setAuthor]=useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      getQuote();
      hasFetched.current = true;
    }
  }, []);

  return (
  <div className="justify-center items-center max-w-xs px-5 md:max-w-xs">
    <h2>{quote}</h2>
    <div className="mt-2">
    <p className="mt-3 text-center text-gray-600 italic">- {author}</p>
    </div>
  </div>
  );
}
