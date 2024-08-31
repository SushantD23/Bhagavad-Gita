import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./Vod.css";

// Function to fetch the verse count for a given chapter
const fetchVerseCount = async (chapterNumber) => {
  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "84540ad9bbmshad04fc78e838f5ap109f10jsn1a7e166a4c12",
      "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch verse count. Status: ${response.status}`);
  }

  const result = await response.json();
  return result.verses_count;
};


// Function to fetch a random verse
const fetchRandomVerse = async () => {
  const randomChapter = Math.floor(Math.random() * 18) + 1;
  const totalVerses = await fetchVerseCount(randomChapter);

  if (totalVerses === 0) {
    throw new Error("Failed to get verse count");
  }

  const randomVerse = Math.floor(Math.random() * totalVerses) + 1;
  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${randomChapter}/verses/${randomVerse}/`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "84540ad9bbmshad04fc78e838f5ap109f10jsn1a7e166a4c12",
      "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch verse. Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

// Function to calculate the time left for the next verse
const calculateTimeLeft = () => {
  const now = new Date();
  const nextMidnight = new Date();
  nextMidnight.setHours(24, 0, 0, 0);

  const remainingTime = nextMidnight - now;
  if (remainingTime <= 0) return { hours: 0, minutes: 0, seconds: 0 };

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};

function Vod() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Fetch the verse of the day using React Query
  const {
    data: verse,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["randomVerse"],
    queryFn: fetchRandomVerse,
    refetchOnWindowFocus: false, // Prevent refetching on window focus
    staleTime: 1000 * 60 * 60 * 24, // Cache the data for 24 hours
    initialData: () => {
      // Get data from localStorage if it exists
      const storedVerse = localStorage.getItem("verse");
      const lastFetchDate = localStorage.getItem("lastFetch");
      const todayDate = new Date().toDateString();

      if (storedVerse && lastFetchDate === todayDate) {
        return JSON.parse(storedVerse);
      }
      return undefined;
    },
    onSuccess: (data) => {
      // Store the data in localStorage
      localStorage.setItem("lastFetch", new Date().toDateString());
      localStorage.setItem("verse", JSON.stringify(data));
    },
  });

  // Update the time left every second
  useEffect(() => {
    const updateTimeLeft = () => {
      setTimeLeft(calculateTimeLeft());
    };

    const timer = setInterval(updateTimeLeft, 1000);

    // Set a timer to refetch the verse at midnight
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = nextMidnight - now;

    const midnightTimer = setTimeout(() => {
      console.log("Fetching new verse at midnight");
      refetch();
    }, timeUntilMidnight);

    // Cleanup timers on component unmount
    return () => {
      clearInterval(timer);
      clearTimeout(midnightTimer);
    };
  }, [refetch]);

  return (
    <main className="vodwrapper">
      <div className="cntdiv">
        {isLoading ? (
          <h1 style={{textAlign:"center"}}>Loading...</h1>
        ) : error ? (
          <h1 style={{textAlign:"center", color:"rgb(212, 30, 30)"}}>Error fetching verse: {error.message}</h1>
        ) : (
          <div className="text">
            <h1>Verse of the Day</h1>
            <div className="num">
              <h1>Chapter: {verse?.chapter_number}</h1>
              <h2>Verse: {verse?.verse_number}</h2>
            </div>
            <div className="verse">
              <h4>{verse?.text}</h4>
            </div>
            <div className="trans">
              <p>{verse?.translations[4]?.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="time">
        <p>
          Next <span>Verse</span> in
        </p>
        <div className="timeleft">
          <h2>{`${timeLeft.hours}H ${timeLeft.minutes}M ${timeLeft.seconds}S`}</h2>
        </div>
      </div>
    </main>
  );
}

export default Vod;
