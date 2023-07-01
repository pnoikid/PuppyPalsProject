import {puppyList} from './data.js';
import "./App.css";
import { useState } from 'react';



function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleFeatPupClick(id) {
    // some logic here
 setFeatPupId(id);
     
    }
    const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleFeatPupClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}

      {featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>{featuredPup.age}</li>
            <li>{featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

  export default App
