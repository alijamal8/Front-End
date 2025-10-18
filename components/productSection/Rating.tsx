"use client"
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({rate}:{rate:number}) {
  const [rating, setRating] = useState<number>(rate);
  

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={13}
            className={
              starValue <= (rating)
                ? "text-purple-600 cursor-pointer"
                : "text-gray-400 cursor-pointer"
            }
            
          />
        );
      })}
    </div>
  );
}