import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestuarantCard from "./RestuarantCard";
import ShimmerUI from "./Shimmer";

const Body = () => {
  const [filterres, setfilterres] = useState([]);
  const [srchbar, setsrchbar] = useState("ashar");

  const [copyvariable, setcopyvariable] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsons = await response.json();
    // console.log(jsons);
    console.log(
      jsons.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0].info.id
    );

    setfilterres(
      jsons.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setcopyvariable(
      jsons.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (filterres.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="search">
        <div className="searchbar">
          <input
            className="inputbar"
            type="text"
            value={srchbar}
            onChange={(e) => {
              setsrchbar(e.target.value);
              console.log("hii");
            }}
          />

          <button
            className="srchbtn"
            onClick={() => {
              const data = filterres.filter((x) =>
                x.info.name.toLowerCase().includes(srchbar.toLowerCase())
              );
              setcopyvariable(data);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="btn"
          onClick={() => {
            obj1 = filterres.filter((value) => value.info.avgRating > 4);
            setfilterres(obj1);
          }}
        >
          ratings high!!
        </button>
      </div>
      <div className="res-container">
        {copyvariable.map((restu) => (
          <Link to={"/resturant/" + restu.info.id} key={restu.info.id}>
            <RestuarantCard resdata={restu} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
