import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

import DetailPage from "./components/DetailPage/DetailPage"
import Login from "./components/Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/detail" element = {<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
