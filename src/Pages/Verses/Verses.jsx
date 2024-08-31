import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./Verses.css";

// Function to fetch verses for a given chapter
const fetchVerses = async (id) => {
  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "84540ad9bbmshad04fc78e838f5ap109f10jsn1a7e166a4c12",
      "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error fetching verses: ${response.statusText}`);
  }
  return response.json();
};

function Verses({ id }) {
  const [currIndex, setCurrIndex] = useState(0);

  // Use react-query to fetch verses data
  const {
    data: verses = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["verses", id],
    queryFn: () => fetchVerses(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  const handlePrev = () => {
    setCurrIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrIndex((prevIndex) =>
      prevIndex < verses.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const CurrVerse = verses[currIndex];

  return (
    <main className="versewrapper">
      <div className="versediv">
        <div className="prevbtn">
          <i
            className="ri-arrow-left-line"
            onClick={handlePrev}
            style={{ cursor: currIndex > 0 ? "pointer" : "default" }}
          ></i>
        </div>

        <div className="versecnt">
          {isLoading && <p>Loading verses...</p>}
          {error && <p>Error: {error.message}</p>}
          {CurrVerse && (
            <div className="verse">
              <h3>Verse: {CurrVerse.verse_number}</h3>
              <h5>{CurrVerse.text}</h5>
              <h6>{CurrVerse.translations[4]?.description}</h6>
            </div>
          )}
        </div>

        <div className="nextbtn">
          <i
            className="ri-arrow-right-line"
            onClick={handleNext}
            style={{
              cursor: currIndex < verses.length - 1 ? "pointer" : "default",
            }}
          ></i>
        </div>
      </div>
    </main>
  );
}

export default Verses;
