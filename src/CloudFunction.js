import React, {useState} from 'react';
import axios from 'axios';

const CloudFunction = () => {
    const [sound, setJokes] = useState([]);


    const apiLink = "https://us-central1-woltjer-cis680-cloudappdev.cloudfunctions.net/cs658-react-func";

    const fetchData = async () => {
        const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
        console.log(res.data.sound);
        setJokes([res.data.sound]);
    }
    return (
        <div className="sounds__">
            <h1>Animal Sounds!</h1>
               {/*Fetch data from url*/}
                <button onClick={fetchData}>Load sound</button>

                     {/*data from api goes here*/}
                    {sound && sound.map((j, index) => (
                         <div className="soundData" key={index}>
                          {j}
                         </div>
                     ))}
        </div>
    )
}

export default CloudFunction;