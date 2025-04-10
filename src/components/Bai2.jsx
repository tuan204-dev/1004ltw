import React, { useState } from "react";

const Bai2 = () => {
  const [click, setClick] = useState(0);

  return (
    <div>
      <p>You click {click} times</p>
      <button onClick={() => setClick((prev) => prev + 1)}>Click me</button>
    </div>
  );
};

export default Bai2;
