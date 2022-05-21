import { useState } from "react";

const Card = props => {
  const handleDelete = () => {
    console.log("Delete Clicked!");
  };

  

  const handleClickMe = (event, message) => {
    console.log("event: ", event);
    console.log("message: ", message);
  };
  const [name, setName] = useState("Andrea");
  return (
    <>
      <div className="card">{props.title}</div>
      {/* <button onClick={handleDelete}>DELETE</button>
      <button onClick={event => handleClickMe(event, "Hello")}>CLICK ME</button> */}
      <h1>My name is {name}</h1>
      <input onChange={(event)=>setName(event.target.value)}></input>
    </>
  );
};
export default Card;
