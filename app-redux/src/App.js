// import { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
    // this is normal methode without redux
    // const [name , setName] = useState("")
    // const [email , setEmail] = useState("")

    // hethi function lel submit
    // const [isChanged, setIsChanged] = useState(false);
    // const addUser = (e) => {
    //     e.preventDefault();
    //     setIsChanged(true);
    // };
    /*
    return (
        <div className="App">
            <Header name={name} isChanged={isChanged} />
            <div className="main">
                <Sidebar name={name} isChanged={isChanged} />
                <div className="form">
                    {/* n3adi argument lel form kima haka  }
                    <Form
                        setName={setName}
                        setEmail={setEmail}
                        addUser={addUser}
                    />
                </div>
            </div>
        </div>
    );
*/
    // this is methode with redux toolkit

    return (
        <div className="App">
            <Header  />
            <div className="main">
                <Sidebar  />
                <div className="form">
                    <Form/>
                </div>
            </div>
        </div>
    );

}

export default App;
