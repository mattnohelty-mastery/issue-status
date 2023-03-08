import { useState, useEffect } from "react";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5555/component`)
      .then(response => response.json())
      .then(data => {
        setError();
        setLoading(false);
        setResults(data);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      })
  }, []);

  return [
    loading,
    error,
    results || []
  ];
};