import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Container from './pages/container';
import Homeconatiner from './container/Home_container';
import Aboutcontainer from './container/about_container';
import Skillscontainer from './container/skills_container';
import Projectcontainer from './container/projectcontainer';
import Certificatecontainer from './container/Certificatescontainer';
import Blogscontainer from './container/blogs_container';
import Contactcontainer from './container/contact_container';
import Communitycontainer from './container/community_container';
function App() {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Container><Homeconatiner/></Container>
  },
  {
    path:'Aboutme',
    element:<Container><Aboutcontainer/></Container>
  },
  {
    path:'Skills',
    element:<Container><Skillscontainer/></Container>
  },
  {
    path:'Projects',
    element:<Container><Projectcontainer/></Container>
  },
  {
    path:'Cerificates',
    element:<Container><Certificatecontainer/></Container>
  },
  {
    path:'Blogs',
    element:<Container><Blogscontainer/></Container>
  },
  {
    path:'community',
    element:<Container><Communitycontainer/></Container>
  },
  {
    path:'Contact',
    element:<Container><Contactcontainer/></Container>
  }

 ])

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
