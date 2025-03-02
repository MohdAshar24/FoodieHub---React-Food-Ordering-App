// import obj from "../utils/mockdata";

//const arr = useState(obj);
//const [filterres, setfilterres] = arr; it is an another way to write the use state function as it is ntng but aray destructing

//|| [] (Fallback to an Empty Array)
// If restaurants is undefined or null, it will default to an empty array ([]).
// This prevents errors when calling .map() (since .map() only works on arrays).

{/_ <RestuarantCard  resdata={obj[0]}/>
<RestuarantCard  resdata={obj[1]}/>
_/}

//SHIMMER UI

const ShimmerUI = () => {
return (

<div className="shimmer-container">
{Array(6) // Creates an array with 6 empty values
.fill("") // Fills it with empty strings (not necessary but improves readability)
.map((\_, index) => (
<ShimmerCard key={index} /> // Renders a shimmer card for each array item
))}
</div>
);
};

export default ShimmerUI;
Explanation:
It returns a <div> with the class "shimmer-container", which is styled in Shimmer.css.
The .map() function loops over an array of 6 empty elements, creating 6 ShimmerCard components.
Each ShimmerCard represents a single shimmering placeholder.
The key={index} ensures React efficiently updates the UI.

CUSTOM HOOKS ------------------------------------------------------------------------------------
THE CODE BEFORE USING CUSTOM HOOKS------------------------

// const [menu, setmenu] = useState(null);
// const [resname, setresname] = useState("");

const { resid } = useParams();
const menu = useRestutantmenu(resid);
const resname = useResturantname(resid);

// useEffect(() => {
// fetchdata();
// }, []);

// const fetchdata = async () => {
// const data = await fetch(RESTURANT + resid);
// const json = await data.json();
// console.log(RESTURANT + resid);
// setmenu(
// json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
// .itemCards
// );
// console.log(json.data.cards[0].card.card.text);
// setresname(json.data.cards[0].card.card.text);
// };
