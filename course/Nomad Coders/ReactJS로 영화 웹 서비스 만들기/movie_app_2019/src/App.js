import PropTypes from "prop-types";

function Food({name, image, rating}) {
  // console.log(props);
  // console.log(props.fav);
  return( 
    <div>
      <h1>I like {name}</h1>
      <h2>{image}</h2>
      <h3>{rating}/5.0</h3>
    </div>
  )
}

const foodILike = [
  {
    id:1,
    name: "A",
    image: "a image",
    rating: 5,
  },
  {
    id:2,
    name: "B",
    image: "b image",
    rating: 4.9,
  },
  {
    id:3,
    name: "C",
    image: "c image",
    rating: 4.8,
  },
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
