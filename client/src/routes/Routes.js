import MainIndex from '../pages/MainIndex/index'
import MainSignIn from '../pages/MainSignIn/index'
import MainUser from '../pages/MainUser/index'
import { Routes, Route } from 'react-router-dom';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<MainIndex />} />
      <Route path="/sign-in" element={<MainSignIn />} />
      <Route path="/user" element={<MainUser />} />
    </Routes>
  )
}

export default RoutesApp;