import React, { useEffect, useState } from "react";
import { customFetch } from "./customFetch";

function UseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    customFetch(1).then(({ data }) => {
      setData(data);
    });
  }, []);

  console.log(data);
  return <div>useEffect</div>;
}

export default UseEffect;
