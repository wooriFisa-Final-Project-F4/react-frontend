import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Card.css";

export const Card = (props: any) => {
  const [show, setShown] = useState(false);
  const { imagen, name, price } = props;

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
  });
  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="frame">
        <img src={imagen} alt={name} />
      </div>
      <div className="nametag">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </animated.div>
  );
};
