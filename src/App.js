import "./App.css";
import Steptwo from "./composant/Steptwo";
import Footer from "./composant/Footer";
import Form from "./composant/Form";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [switch1, setSwitch1] = useState(false);

  return (
    <div className="App">
      {switch1 === false ? (
        <Form
          name={name}
          setname={setName}
          email={email}
          setemail={setEmail}
          password={password}
          setpassword={setPassword}
          passwordconfirmation={passwordConfirmation}
          setpasswordconfirmation={setPasswordConfirmation}
          switch1={switch1}
          setSwitch1={setSwitch1}
        />
      ) : (
        <Steptwo
          switch1={switch1}
          setSwitch1={setSwitch1}
          name={name}
          email={email}
          password={password}
        />
      )}

      <Footer text="Made with React at Le Reacteur by Doud" />
    </div>
  );
}

export default App;
