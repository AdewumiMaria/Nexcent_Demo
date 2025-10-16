import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Userdetails = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setUser(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error, "data not fetched");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { id } = useParams();

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <div>
          <h2>Userdetails</h2>
          <h3>{id}</h3>
          <h4>{users.title}</h4>
          <p>{users.body} </p>
        </div>
      )}
    </div>
  );
};

export default Userdetails;
