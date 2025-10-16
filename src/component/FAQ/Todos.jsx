import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { MdError } from "react-icons/md";
import Button from "../Button";

const Todos = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setLoading(false);
      console.log(data);
      setUsers(data);
    } catch (error) {
      setError(error.message || " error fetching todo");
      setLoading(false);
      console.log(error, "error fetching");
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState([]);
  const [fullname, setFullname] = useState([]);
  const [password, setPassword] = useState([]);
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [confirmPassword, setConfirmpassword] = useState([]);
  const [register, setRegister] = useState();
  const [reset, setReset] = useState("");
  const [err, setErr] = useState("");

  const addTodo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          Method: "POST",
          headers: { "Conent-Type": "application/json" },
          body: JSON.stringify({
            title,
            userId: 1,
            completed: false,
            fullname: "",
            username: "",
            password: "",
            email: "",
            confirmPassword: "",
          }),
        }
      );

      const todos = await response.json();
      setUsers(todos);
      setTitle(title);
      setFullname(fullname);
      setUsername(username);
      setEmail(email);
      setPassword(password);
      setConfirmpassword(confirmPassword);
      setRegister(register);
      setReset(reset);
      console.log(todos);
    } catch (err) {
      setErr(err.message || "error posting data");
      console.log(err, "error posting");
      if (!fullname) {
        setErr();
      }
      if (!username) {
        setErr();
      }
      if (!email) {
        setErr();
      }
      if (!password) {
        setErr();
      }
      if (!confirmPassword) {
        setErr();
      }
    }
  };
  useEffect(() => {
    addTodo();
  });
  return (
    <section>
      <div>
        {loading ? (
          <AiOutlineLoading3Quarters />
        ) : error ? (
          <p> {err}</p>
        ) : !users ? (
          <p> Data is unavailable</p>
        ) : (
          <ul>
            {users.slice(0, 10).map(user => (
              <li key={user.id}>
                <p>{user.id}</p>
                <strong>{user.title} </strong>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="post-form">
        <form>
          <label htmlFor="fullName"> Full Name</label>
          <br />
          {error ? <p>{err}</p> : <input type="text" />}

          <br />
          <label htmlFor="userName"> Username</label>
          <br />
          {error ? <p>{err}</p> : <input type="text" />}
          <br />
          <label htmlFor="eMail">Email</label>
          <br />
          {error ? <p>{err}</p> : <input type="email" />}
          <br />
          <label htmlFor="passWord"> Password</label>
          <br />
          {error ? <p>{err}</p> : <input type="password" />}
          <br />
          <label htmlFor="confirmPassord"> Confirm Password</label>
          <br />
          {error ? <p>{err}</p> : <input type="password" />}
          <br />
          {error ? <p>{err}</p> : <input type="checkbox" />}
          <label htmlFor="agree"> I have read and agree to the Terms</label>
          <br />
          <div className="btn-sect">
            <Button
              title={"Register"}
              className={"reg-btn"}
              onClick={register}
            />
            <Button title={"Reset"} className={"reset-btn"} onClick={reset} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Todos;
