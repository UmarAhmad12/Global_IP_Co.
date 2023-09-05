import { ToastContainer } from "react-toastify"
import Userpage from "./components/Userpage"
import { Routes, Route } from "react-router-dom"
import RegisterSec from "./components/RegisterSec"
import Login from "./components/Login"

function App() {

  return (
    <>
            <Routes>
              <Route path="/" element = {<Userpage/>} />
              <Route path="/loggedin" element= {<Login />} />
              <Route path="/registration" element= {<RegisterSec />} />
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
