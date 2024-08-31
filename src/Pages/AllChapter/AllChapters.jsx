import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./AllChapter.css";

// Function to fetch chapters
const fetchChapters = async () => {
  const url =
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "84540ad9bbmshad04fc78e838f5ap109f10jsn1a7e166a4c12",
      "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error fetching chapters: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

function AllChapters() {
  // Use react-query to fetch chapters
  const { data, error, isLoading } = useQuery({
    queryKey: ["chapters"],
    queryFn: fetchChapters,
    staleTime: 1000 * 60 * 60 * 24, // Cache data for 24 hours
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });

  // Function handle chapter click
  function handleClick(id) {
    console.log("Chapter clicked", id);
  }

  return (
    <main className="allwrap">
      <div className="textcenter">
        <h1>Learn through chapters</h1>
      </div>
      <div className="cnt">
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading chapters...</h1>
        ) : error ? (
          <h1>Error fetching data: {error.message}</h1>
        ) : (
          data.map((Item) => (
            <div className="chapter" key={Item.id}>
              <Link to={`/chapter/${Item.id}`} className="customlink">
                <h1 onClick={() => handleClick(Item.id)}>
                  Chapter: {Item?.chapter_number}
                </h1>
              </Link>
              <h3>{Item?.name_translated}</h3>
              <p>{Item.chapter_summary}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default AllChapters;
