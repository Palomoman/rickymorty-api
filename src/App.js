import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pages from "./components/Pages";


function App() {

  // hook para dar un estado inicial a la app
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchingCharacters = (initialUrl) => {
    // si me retorna la lista de personajes, la recibo como una respuesta (then)
    // de esta manera importo toda la api al cagar la pagina y, al cargar, ya esto importando
    // el contenido de la api
    fetch(initialUrl)
      .then(response => response.json()) //lo convierto en un objeto json
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }


  // Funciones para buscar si el objeto tiene atributo prev o next
  const onPrevious = () => {
    fetchingCharacters(info.prev)
  }

  const onNext = () => {
    fetchingCharacters(info.next)
  }

  // Utilizo el hook de react "useEffect" para manejar los efectos colaterales, como 
  // por ejemplo una llamada de red (la api).
  // este hook se va a ejecutar una unica vez, cuando el componente se renderiza por primera vez
  useEffect(() => {
    fetchingCharacters(initialUrl);
  }, [])


  return (
    <>
      <Navbar brand="Rick & Morty App" />
      <div className="container mt-5">
        <Pages prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pages prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>
  );
}

export default App;
