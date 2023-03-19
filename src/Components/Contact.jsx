import React, { useState } from 'react';
import "../Styles/Contact.css"; // import your CSS file for styling

function ContactForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
const[prf,setPrf]=useState("");
const[mail,setMail]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  }

  return (
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="age" name="age" value={gender} onChange={(e) => setGender(e.target.value)} />
   
        </div>
        <div className="form-group">
          <label htmlFor="e-mail">E-mail:</label>
          <input type="text" id="mail" name="age" value={mail} onChange={(e) => setMail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="prf">Profession:</label>
          <input type="text" id="prf" name="prf" value={prf} onChange={(e) => setPrf(e.target.value)} />
        </div>
        
        
      </form>
    </div>
  );
}

export default ContactForm;
