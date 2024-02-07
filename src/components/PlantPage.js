import React, { useState,useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])


  useEffect(() => {
    fetch ("http://localhost:6001/plants")
    .then(res => res.json())
    .then(setPlants)

  }, [])

  function addPlant(newPlant){
    setPlants([...plants, newPlant])

  }

   return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
