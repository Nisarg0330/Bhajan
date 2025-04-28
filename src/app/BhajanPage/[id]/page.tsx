'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { bhajanList } from "@/lib/data";
import Navbar from "@/components/navbar";

type Bhajan = {
  id: number;
  title: string;
  src: string;
};

const BhajanPage = () => {
  const { id } = useParams() as { id: string }; // Get the `id` from the URL
  const [bhajanContent, setBhajanContent] = useState<string>("Loading...");
  const [bhajanTitle, setBhajanTitle] = useState<string>("");

  useEffect(() => {
    const fetchBhajan = async () => {
      const bhajan = bhajanList.find((b) => b.id === parseInt(id)); // Find the bhajan with the matching `id`

      if (!bhajan) {
        setBhajanContent("Bhajan not found.");
        return;
      }

      setBhajanTitle(bhajan.title); // Set the title of the bhajan

      try {
        const res = await fetch(bhajan.src);
        if (!res.ok) {
          throw new Error("Failed to fetch bhajan.");
        }
        const text = await res.text();
        setBhajanContent(text);
      } catch (error) {
        setBhajanContent("Failed to load bhajan.");
      }
    };

    fetchBhajan();
  }, [id]);

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-[95%] h-[90%] bg-white/5 rounded-3xl backdrop-blur-sm shadow-xl overflow-auto p-6">
        <div className="text-2xl font-bold text-center text-gray-700 mb-4">
          <h2 className="text-2xl font-semibold text-[#4B2E2E] mb-2 mt-4">
            {bhajanTitle}
          </h2>
        </div>

        <div className="flex flex-col gap-8 text-[#A0522D] text-sm sm:text-base md:text-center lg:text-lg">
          <pre className="whitespace-pre-line p-4 rounded text-center text-gray-600 font-Noto_Sans_Gujarati font-semibold ">
            {bhajanContent}
          </pre>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default BhajanPage;
