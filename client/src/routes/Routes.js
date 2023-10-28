import MainIndex from '../pages/MainIndex/index'
import MainSignIn from '../pages/MainSignIn/index'
import MainUser from '../pages/MainUser/index'
import { Routes, Route, Navigate } from 'react-router-dom';

function RoutesApp() {
  const token = localStorage.getItem("loginToken");
  const isLogged = Boolean(token);

  return (
    <Routes>
      <Route path="/" element={<MainIndex />} />
      <Route path="/login" element={<MainSignIn />} />
      <Route
        path="/profile"
        element={isLogged ? <MainUser /> : <Navigate to="/login" />}
      />
    </Routes>
  )
}

export default RoutesApp;
