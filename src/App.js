import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./components/routing/MainRouter";

function App() {
    return (
        <Router>
            <MainRouter />
        </Router>
    );
}

export default App;
