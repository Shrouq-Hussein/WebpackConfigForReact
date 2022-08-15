import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./components/mainContent.js"
import {Navbar} from "./components/navbar.js"
const App = () => {
    return (
        <div>
            <Navbar />
            <Main />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));