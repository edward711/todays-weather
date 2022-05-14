import { useState } from "react";

function useApi(apiFunc) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const request = async (...args) => {
    setLoading(true);

    try {
      const { data } = await apiFunc(...args);
      setData(data);
      setError("");
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    error,
    request
  }
}

export default useApi;
