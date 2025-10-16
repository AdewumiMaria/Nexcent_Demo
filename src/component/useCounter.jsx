import { useState } from "react";

const useCounter = () => {
  const [counts, setCounts] = useState(0);
  const increment = () => setCounts(prev => prev + 1);
  return {
    counts,
    increment,
  };
};

export default useCounter;
