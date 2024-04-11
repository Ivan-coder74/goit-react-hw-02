import { useState } from "react";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);
  const handelClick = () => {
    setClicks(clicks + 1);
  };
  return <button onClick={handelClick}>{clicks}</button>;
}
