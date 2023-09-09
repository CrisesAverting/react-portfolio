// Bringing in the required import from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
  // The Outlet component will conditionally swap between the different pages according to the URL
 function App() {

  return (
    <>
      <Nav />
    <div className="wrapper">
      <Outlet />
      <Footer />
    </div>
    </>
  )
}

export default App;

