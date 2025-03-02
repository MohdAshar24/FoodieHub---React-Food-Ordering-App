import { useEffect, useState } from "react";
import { RESTURANT } from "../utils/constants";

const useRestutantmenu = (resID) => {
  const [menu, setmenu] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RESTURANT + resID);
    const json = await data.json();
    setmenu(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
        .itemCards
    );
  };
  console.log(menu);
  return menu;
};

export default useRestutantmenu;
