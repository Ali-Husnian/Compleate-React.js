import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((result) => {
          if (!result.ok) {
            throw Error("could not fetch data for this response!");
          }
          return result.json();
        })
        .then((data) => {
          setIsPanding(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPanding(false);
        });
    }, 1000);
  }, [url]);
  return { data, isPanding, error };
};

export default useFetch;
