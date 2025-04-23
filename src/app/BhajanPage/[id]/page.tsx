"use client";

import { useEffect, useState } from "react";
import { bhajanList } from "@/lib/data";

type Bhajan = {
  id: number;
  title: string;
  src: string;
};

const BhajanPage = () => {
  const [bhajanTexts, setBhajanTexts] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBhajans = async () => {
      const texts: Record<number, string> = {};
      await Promise.all(
        bhajanList.map(async (bhajan) => {
          try {
            const res = await fetch(bhajan.src);
            if (!res.ok) {
              throw new Error(`Failed to fetch bhajan with id ${bhajan.id}`);
            }
            const text = await res.text();
            texts[bhajan.id] = text;
          } catch (error) {
            console.error(`Error fetching bhajan ${bhajan.id}:`, error);
            texts[bhajan.id] = "Error loading bhajan.";
          }
        })
      );
      setBhajanTexts(texts);
      setLoading(false);
    };

    fetchAllBhajans();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-repeat bg-center" style={{ backgroundImage: "url('/backgroundLight.png')" }}>
        <div className="text-2xl font-bold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-repeat bg-center" style={{ backgroundImage: "url('/backgroundLight.png')" }}>
      <div className="w-[95%] h-[90%] bg-white rounded-3xl shadow-lg flex flex-col justify-center items-center overflow-y-auto p-4">
        <div className="text-2xl font-bold text-center text-gray-700 gap-6 flex flex-col justify-center items-center">
          {bhajanList.map((bhajan: Bhajan) => (
            <div key={bhajan.id} className="text-center max-w-3xl">
              <h2 className="mb-2 font-Noto_Sans_Gujarati">{bhajan.title}</h2>
              <pre className="font-Noto_Sans_Gujarati whitespace-pre-wrap">
                {bhajanTexts[bhajan.id] || "Error loading bhajan."}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BhajanPage;