import React from "react";
import { useState } from "react";
import Button from "../Button";
import Tax from "./Tax";
import Todos from "./Todos";

const Display = () => {
  const [showText, setShowtext] = useState(false);
  const hideText = "xxxxxx";
  const display = () => {
    setShowtext(!showText);
  };

  //Lists and Keys
  const users = [
    { id: 1, name: "Grace" },
    { id: 2, name: " Favour" },
    { id: 3, name: "Tola" },
    { id: 4, name: "Kenny" },
  ];

  return (
    <section>
      <div>
        <Button title={showText ? "hide" : "show"} onClick={display} />
        {showText ? <p>My battery charger is faulty</p> : hideText}
      </div>

      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.id} {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Tax />
      </div>
      <div>
        <Todos />
      </div>
    </section>
  );
};

export default Display;
