import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Router>
            <AnimatePresence>
        <App/>
        </AnimatePresence>
        </Router>
    </React.StrictMode>
);