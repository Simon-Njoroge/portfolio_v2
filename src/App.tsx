import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Container from './pages/container';
import Homeconatiner from './container/Home_container';
function App() {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Container><Homeconatiner/></Container>
  }

 ])

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
