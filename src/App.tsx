import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from "./components/layout/Layout";

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<>Este es el inicio</>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
