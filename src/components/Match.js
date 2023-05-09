import { useContext, useState } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
const Match = () => {
  const { sign } = useContext(HoroscopeContext);
  console.log(sign, "match comp");
  const [match, setMatch] = useState(false);
  return (
    <div>
      <button onClick={() => setMatch(!match)}>Match</button>
      <h4>{match ? `Match: ${sign.match}` : " "}</h4>
    </div>
  );
};

export default Match;
