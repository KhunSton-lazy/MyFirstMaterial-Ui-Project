import React from "react"
import ReactDOM from "react-dom"
import { NestedList } from "./asset/component/dashboard"
import { PrimarySearchAppBar } from "./asset/component/header"
import { PaitentChart } from "./asset/component/chart"
import "./asset/style/style.css"

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <main className="container">
        <NestedList />
        <div className="chart">
        <PaitentChart />
        </div>
       
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))