import MainIndex from '../pages/MainIndex/index'
import MainSignIn from '../pages/MainSignIn/index'
import MainUser from '../pages/MainUser/index'
import { Routes, Route } from 'react-router-dom';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<MainIndex />} />
      <Route path="/login" element={<MainSignIn />} />
      <Route path="/profile" element={<MainUser />} />
    </Routes>
  )
}

export default RoutesApp;