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
    id:1,
    name: "A",
    image: "a image",
  },
  {
    id:2,
    name: "B",
    image: "b image",
  },
  {
    id:3,
    name: "C",
    image: "c image",
  },
]

function randerFood(dish) {
  // console.log(dish);
  return <Food name={dish.name} image={dish.image}/>
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} />
      ))}
    </div>
  );
}

export default App;
