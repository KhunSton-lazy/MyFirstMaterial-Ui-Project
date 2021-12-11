import React from "react"
import ReactDOM from "react-dom"
import { NestedList } from "./asset/component/dashboard"
import { PrimarySearchAppBar } from "./asset/component/header"
import "./asset/style/style.css"

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <div className="container">
        <NestedList />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))