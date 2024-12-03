import { useEffect, useState } from "react";
// import "../../components/styles/DailyVerse.css";
import axios from "axios";

const URL = `https://beta.ourmanna.com/api/v1/get?format=json&order=random`;
const BibleVerse = () => {
  const [quote, setQuote] = useState("");
  const [verse, setVerse] = useState("");

  const [errors, setErrors] = useState(null);

  const getVerse = async () => {
    try {
      const res = await axios.get(URL);
      const result = await res.data;

      setVerse(result.verse.details.reference);
      setQuote(result.verse.details.text);
    } catch (error) {
      console.log(error);
      setErrors(error);
    }
  };
  useEffect(() => {
    getVerse();
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     getVerse();
  //   }, 50000);
  // }, [quote, verse]);

  return (
    <div className="daily_verse min-h-96 w-full">
      <div className="dailyverse_cover min-h-96 flex flex-col items-center justify-center gap-6 px-4 py-8 ">
        {errors ? (
          <p className="text-white text-center text-2xl md:text-3xl max-w-2xl">
            Something went wrong. Please try again later. Make sure your
            internet is working
          </p>
        ) : (
          <q className=" verseoftheday text-white text-center text-2xl md:text-3xl max-w-2xl">
            {quote}
          </q>
        )}
        <p
          id="bibleverse"
          className="text-md md:text-xl font-semibold uppercase"
        >
          {verse}
        </p>
      </div>
    </div>
  );
};

export default BibleVerse;
