import { useEffect, useState } from "react";
import Button from "../Button";
import useCounter from "../useCounter";
import { LikeCount, ChangeColor } from "../useCustomHooks";
import Login from "../Login";

const Solution = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const { counts, increment } = useCounter();
  const { likes, increase, reset } = LikeCount();
  const { color, change } = ChangeColor();
  const [login, setLogin] = useState(false);

  //useEffect
  useEffect(() => {
    alert("function trigger");
  }, []);

  return (
    <section className="solution">
      <div className="container">
        <Login isLogin={login} />
        <div className="solution-sec">
          <div className="solution-sec1">
            <h1>Count: {count} </h1>
            <Button
              title={"count"}
              className={"count-btn"}
              onClick={() => setCount(count + 1)}
            />
          </div>
          <div className="form">
            <form>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Button
                title={"Submit"}
                className={"form-btn"}
                onClick={() => alert(`hello ${name}`)}
              />
            </form>
          </div>
          <div>
            <Button title={`counts: ${counts}`} onClick={increment} />
          </div>

          <div className="solution-sec2">
            <div className="background-linear"></div>
            <div className="sol-linear"></div>
            <div className="diagonal-linear"></div>
            <div className="slant-linear"></div>
          </div>
        </div>
        <div className="custom">
          <Button title={likes} onClick={increase} className={"like-btn"} />
          <h1>Likes</h1>
          <Button title={"Reset"} onClick={reset} className={"reset-btn"} />
          <div>
            <Button
              title={"change"}
              style={{ backgroundColor: color }}
              onClick={change}
              className={"color-btn"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
