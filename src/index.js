import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { Store } from "./redux/store"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
ReactDom.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider >, document.getElementById("root")
)