import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home, PrivateRoute, SignIn, SignUp, } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooksFailure, getBooksStart, getBooksSuccess } from "./slice/Books";
import { signUserFailure, signUserStart, signUserSuccess } from "./slice/Auth";
import { getItem, getItemKey } from "./helpers/persistenceStorage";
import AuthService from "./service/auth";
import { Navbar } from "./components/Navbar";
import Error from "./components/ErrorPage/Error";


function App() {
  const navigate = useNavigate()
  const { loggedIn, isLoading } = useSelector((state) => state);
  useEffect(() => {
    if (!loggedIn) {
      navigate('/signin')
    }
  }, [])
   return (
    <div className="w-full h-[100vh] border border-red-500   bgImage" >

      <Routes>
        {/* Public Routes */}
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
