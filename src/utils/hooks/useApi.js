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
      return { success: true, data };
    } catch (err) {
      setError(err.message || "Unexpected Error!");
      return { success: false, errorMessage: err.message };
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
