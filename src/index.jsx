import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import AnimalList from './components/AnimalList';
import Animaldetail from './components/Animaldetail';

const App = () => {
  const [animals, setAnimals] = useState(null);
  const [idAnimal, setIdAnimal] = useState(0);

  useEffect(() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
    .then(response => response.json())
    .then(data => setAnimals(data.zvirata))
  }, [])

  const handleAnimal = (id) => {
    setIdAnimal(id - 1);
  }

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        {
          animals !== null 
          ? <>
            <AnimalList onAnimal={handleAnimal} animal={animals}/>
            <Animaldetail animal={animals[idAnimal]}/>
          </>
          : console.log("nacitam")
        }
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
