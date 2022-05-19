import axios from "axios";
import React, {useState} from "react";

function App() {

    const[input, setInput] = useState({});

    const handleChangeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({...values, [name]: value}));
        console.log(value);
    } 

    const submitEvent = (e) => {
        e.preventDefault();
        console.log(input);

        axios.post('http://localhost/assessment_db/exportPet', input)
        .then(function(res){
            console.log(res);
        })
    }

  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="petName" type="text" placeholder="Name of Pet" onChange={handleChangeEvent}/>
            <select name="petSpecies" onChange={handleChangeEvent}>
              <option selected disabled hidden>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select name="petGender" onChange={handleChangeEvent}>
              <option selected disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="petAge" type="text" placeholder="Age of Pet (years) " onChange={handleChangeEvent}/>
            <input name="petId" type="text" placeholder="Pet MicroChip Id" onChange={handleChangeEvent}/>
            <input name="ownerName" type="text" placeholder="Pet Owner Name" onChange={handleChangeEvent}/>
            <input name="ownerId" type="text" placeholder="Pet Owner ID Number" onChange={handleChangeEvent}/>
            <input name="exportOrigin" type="text" placeholder="Export Origin" onChange={handleChangeEvent}/>
            <input name="exportDestination" type="text" placeholder="Export Destination" onChange={handleChangeEvent}/>

            <button onClick={submitEvent}>Lets Export That Pet!</button>

            

          </form>

        </div>
    </div>
  );
}

export default App;
