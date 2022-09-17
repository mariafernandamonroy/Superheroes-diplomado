import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    llamarApi();
  }, []);

  const llamarApi = async () => {
    const respuesta = await fetch("https://heroes-data-firebase-default-rtdb.firebaseio.com/superheroes.json");
    const data = await respuesta.json();
    setHeroes(data);
  };

  return (
    <div className="grid grid-cols-3">
      {heroes.map((superheroe) => (
        <Card key={superheroe.id} heroe={superheroe} />
      ))}
    </div>
  );
}

export default App;
