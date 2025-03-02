import { useEffect, useState } from "react";
import { RESTURANT } from "../utils/constants";

const useRestutantname = (resID) => {
  const [resname, setresname] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RESTURANT + resID);
    const json = await data.json();
    setresname(json.data.cards[0].card.card.text);
  };
  console.log(resname);
  return resname;
};

export default useRestutantname;
