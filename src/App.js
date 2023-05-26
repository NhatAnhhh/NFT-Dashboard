import './App.css';
import Home from 'containers/Home';
import Login from 'containers/Login';
import About from 'containers/About';
import { useRoutes } from 'react-router-dom';



function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    // { path: "*", element: <NotFoundPage /> }
  ])
  return element;
  // return (
  //   <div className="App">
  //     <Routes>
  //       <Route path='/' element={<Home />}></Route>
  //       <Route path='/login' element={<Login />}></Route>
  //       <Route path='/about' element={<About />}></Route>
  //     </Routes>
  //   </div >
  // );
}

export default App;
