import React, {useState} from "react";

  const initialFormState = {
    name: "",
    image: "",
    price: ""
  };

function NewPlantForm({onAddPlant}) {

const [formData, setFormData] = useState(initialFormState);

function handleChange(e) {
  const { name, value } = e.target
  setFormData({
    ...formData,
    [name]: value
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...formData,
      price: parseFloat(formData.price)
  })
}

  fetch("http://localhost:6001/plants", config)
  .then(response => response.json())
  .then(onAddPlant)

  setFormData(initialFormState);
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );

  }

export default NewPlantForm;
