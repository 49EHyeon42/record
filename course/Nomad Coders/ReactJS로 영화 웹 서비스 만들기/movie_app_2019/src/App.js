function Food({fav}) {
  // console.log(props);
  // console.log(props.fav);
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="A" />
      <Food fav="B" />
    </div>
  );
}

export default App;
