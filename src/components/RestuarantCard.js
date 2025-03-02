import { URL_LOGO } from "../utils/constants.js";
const RestuarantCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    resdata?.info;
  return (
    <div className="res-card">
      <img className="res-logo" alt="not" src={URL_LOGO + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines.join()}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestuarantCard;
