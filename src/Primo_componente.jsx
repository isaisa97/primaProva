// ...existing code...
import React, { useState, useEffect } from "react";

function Primo_componente() {
  const [string, setString] = useState("io sono un componente il mo numero preferito è : ");
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(counter => counter + 1);

    }, 1000);
    return () => clearInterval(id);
  }, []);


  useEffect(() => {
    setString(string => "io sono un componente il mo numero preferito è : " + counter);
  }, [counter]);



  return (
    <>
      <h2>{string}</h2>
      <p>Counter: {counter}</p>
    </>
  );
}

export default Primo_componente