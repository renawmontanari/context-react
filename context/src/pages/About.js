import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useContext(CounterContext);

  // Contexto mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor contador: {counter}</p>
    </div>
  );
};

export default About;
