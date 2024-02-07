import React, { useState,useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [searchTerm, setSearchTerm] = useState("") 

  useEffect(() => {
    fetch ("http://localhost:6001/plants")
    .then(res => res.json())
    .then(setPlants)

  }, [])

  function addPlant(newPlant){
    setPlants([...plants, newPlant])

  }

  const plantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

   return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
