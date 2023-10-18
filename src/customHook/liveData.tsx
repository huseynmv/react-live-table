import { useEffect, useState } from "react";

export const useLiveData = () => {
  const [message, setMessage] = useState<{
    id: number;
    name: string;
    lastName: string;
  } | null>(null);

  useEffect(() => {
    let count = 0;
    setInterval(() => {
      setMessage({
        id: Math.floor(Math.random() * 9),
        name: "Name" + count,
        lastName: "Last Name" + count,
      });
      count++;
    }, 100);
  }, []);

  return message;
};
