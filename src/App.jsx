import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import Login from "./components/Login";
import RegisterPage from "./components/RegisterPage";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Login />} />
        <Route path="/registration" element= {<RegisterPage />} />
        <Route path="/loggedin" element = {<Home  />} />
      </Routes>

      <ToastContainer 
        position="bottom-center"
        autoClose={2000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
