import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/Routes';
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;