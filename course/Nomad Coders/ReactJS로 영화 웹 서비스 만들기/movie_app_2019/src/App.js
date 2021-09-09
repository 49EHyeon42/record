function Food({name, image}) {
  // console.log(props);
  // console.log(props.fav);
  return( 
    <div>
      <h1>I like {name}</h1>
      <h2>{image}</h2>
    </div>
  )
}

const foodILike = [
  {
  name: "A",
  image: "a image",
  },
  {
    name: "B",
    image: "b image",
  },
  {
    name: "C",
    image: "c image",
  },
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
       <Food name={dish.name} image={dish.image}/>
      ))}
    </div>
  );
}

export default App;
