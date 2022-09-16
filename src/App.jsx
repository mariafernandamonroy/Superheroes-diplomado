import { useEffect, useState } from "react";

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    llamarApi();
  }, []);

  const llamarApi = async () => {
    const respuesta = await fetch("http://localhost:4000/superheroes");
    const data = await respuesta.json();
    setHeroes(data);
  };

  return (
    <div className="App">
      {heroes.map((superheroe)=><div key={superheroe.id}><p>{superheroe.nombre.toLowerCase()}</p></div>)}
    </div>
  );
}

export default App;
