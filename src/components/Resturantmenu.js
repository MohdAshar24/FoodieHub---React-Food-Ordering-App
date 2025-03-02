import { useParams } from "react-router-dom";
import useRestutantmenu from "../utils/useResturantmenu";
import useResturantname from "../utils/useResturantname";
import ShimmerUI from "./Shimmer";

const Resmenu = () => {
  const { resid } = useParams();
  const resname = useResturantname(resid);

  const menu = useRestutantmenu(resid);

  if (menu === null) {
    return <ShimmerUI />;
  }

  return (
    <div>
      <h1>{resname}</h1>
      <h2>menu</h2>

      <ul>
        {menu.map((item) => (
          <h2 key={item.card.info.id}>{item.card.info.name}</h2>
        ))}
      </ul>
    </div>
  );
};

export default Resmenu;
