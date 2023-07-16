import React, { useState } from "react"
import { User_login } from './User_login';
import { User_signup } from "./User_signup";

function App() {
  const [currentForm, SetcurrentForm] = useState('login');

  const toggle_form = (form_name) => {
    SetcurrentForm(form_name);
  }


  return (
    <div className="App">
      {
        currentForm == "login" ? <User_login onform_switch={toggle_form} /> : <User_signup onform_switch={toggle_form} />
      }


    </div>
  );
}

export default App;
