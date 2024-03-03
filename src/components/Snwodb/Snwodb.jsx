import React, { useState } from 'react';
import axios from 'axios'

const Snwodb = () => {

    const [password, setPassword] = useState("");
    // add random number to input field name attribute to remove autocomplete
    const randomName = Math.random().toString(36).substring(2, 15);
    const openPassword = "axtv6&a(99olk09&xgaq";
    const [showList, setShowList] = useState(false);

    const handleListCheck = async (e) => {
        e.preventDefault();

        if (password === openPassword) {
            setShowList(true);
        } else {
            alert("what?")
            return;
        }

        try {
            const res = await axios.get('https://long-newt-coveralls.cyclic.cloud/secure/check/')

        } catch (error) {
            alert(error.message)   
        }

    }

  return (
    <section>
        <input
            type="text"
            name={`password_${randomName}`}
            placeholder="Password"
            autoComplete="off"
            id="fieldId"
            autoCorrect="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleListCheck}>
            List
        </button>
        {showList && <div>Show</div>}
    </section>
  )
}

export default Snwodb