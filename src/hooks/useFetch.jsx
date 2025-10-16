import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const drinks = await response.json();
        setData(drinks);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDrinks();
  }, [url]);

  return { data, loading, error };
}
