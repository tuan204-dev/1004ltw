import React, { useEffect } from "react";

const Bai3 = ({ name }) => {
  useEffect(() => {
    document.title = name;
  }, [name]);
  return <></>;
};

export default Bai3;
