import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Tax = () => {
  const taxs = [
    { id: 1, title: "Update", description: "Update every assignment each day" },
    { id: 2, title: "Prayer", description: "Say daily prayers and be steady" },
    { id: 3, title: "Meals", description: "Dont miss-out on daily meals" },
    {
      id: 4,
      title: "Evaluation",
      description: "Ensure to do proper daily evaluation",
    },
    {
      id: 5,
      title: "Correction",
      description: " Making correction and not making the same mistake",
    },
  ];

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status : ${response.status}`);
      // }
      setUser(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setError(error.message || "Error fetching data");
      console.log(error, "data not fetched");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div>
        <ul>
          {taxs.map(tax => (
            <li key={tax.id}>
              <strong> {tax.id}</strong>
              <strong> {tax.title}</strong>
              <p> {tax.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* chain condition, teinary condition */}
        {loading ? (
          <AiOutlineLoading3Quarters size={30} />
        ) : error ? (
          <p> {error}</p>
        ) : !users ? (
          <p> data isn't available </p>
        ) : (
          <ul>
            {users.slice(0, 50).map(user => (
              <li key={user.id}>
                <strong> {user.id}</strong>
                <Link to={`/faq/tax/${user.id}`}>{user.title}</Link>
                <p>{user.body} </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Tax;
