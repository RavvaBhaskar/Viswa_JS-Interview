import React, { useState } from "react";

function comp() {
  const [userprops, setUserprops] = useState({ name: "", age: "" });
  handleClick = () => {
    setUserprops((userprops.name = "radomName"));
    setUserprops((userprops.age = 25));
  };
  return (
    <div>
      <button onClick={handleClick()}></button>
    </div>
  );
}

export default comp;
