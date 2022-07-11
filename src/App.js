import React from 'react';
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import {Routes, Route} from "react-router-dom";

function App() {
    return (<div className="App">
        <Routes>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/signin' element={<Signin/>}/>
        </Routes>
    </div>);
}

export default App;
