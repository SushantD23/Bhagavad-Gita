import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Verses from "../Verses/Verses";
import "./Chapter.css";
import "../Verses/Verses.css";

// Function to fetch chapter data
const fetchChapter = async (id) => {
  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "84540ad9bbmshad04fc78e838f5ap109f10jsn1a7e166a4c12",
      "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error fetching chapter: ${response.statusText}`);
  }

  return response.json();
};

function Chapter() {
  const { id } = useParams();

  // Use react-query to fetch chapter data
  const { data, error, isLoading } = useQuery({
    queryKey: ["chapter", id],
    queryFn: () => fetchChapter(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  return (
    <main className="chapterwrapper">
      <div className="chapterdata">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <>
            <h1>Chapter: {data.chapter_number}</h1>
            <h2>{data.name_translated}</h2>
            <p>{data.chapter_summary}</p>
          </>
        )}
      </div>
      <Verses id={id} />
    </main>
  );
}

export default Chapter;
