import React, {useState} from "react";

function Components() {
  const [phones, setPhones] = useState([]);
  const [phoneYear, setPhoneYear,] = useState(new Date().getFullYear());
  const [phoneBrand, setPhoneBrand] = useState("");
  const [phoneModel, setPhoneModel] = useState("");

  function handleAddPhone() {
    const newPhones= {year: phoneYear, brand: phoneBrand, model:phoneModel }

    setPhones(prevPhones => [...prevPhones,newPhones]);

    setPhoneYear(new Date().getFullYear());
    setPhoneBrand("");
    setPhoneModel("");
  }

  function handleRemovePhone(index) {
    setPhones(phones.filter((element,i) => i !== index ))
  }

  function handlePhoneYear(event) {
    setPhoneYear(event.target.value);
  }

  function handlePhoneBrand(event) {
    setPhoneBrand(event.target.value);
  }

  function handlePhoneModel(event) {
    setPhoneModel(event.target.value)
  }

 return (<div>
            <h1>List of Phones</h1>
            <ul>
                {phones.map((phone, index) => <li key={index} onClick={() => handleRemovePhone(index)}> {phone.year} {phone.brand} {phone.model} </li>)}
            </ul>

            <input type="number" value={phoneYear} onChange={handlePhoneYear}/><br/>
            <input type="text" value={phoneBrand} onChange={handlePhoneBrand} placeholder="Enter the phone brand here"/><br/>
            <input type="text" value={phoneModel} onChange={handlePhoneModel} placeholder="Enter the phone Model here"/><br/>
            <button onClick={handleAddPhone}>Add Phone</button>
        </div>);
}

export default Components;