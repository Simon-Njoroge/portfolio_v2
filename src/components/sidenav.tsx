import { House, Linkedin, Github, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
const Sidenavbar = () => {
  return (
    <>
      <div className="h-screen max-w-32 bg-gray-900 text-white p-5 border-r-2">
        <div className="pb-5 border-b-2 border-green-700">
          <Link to='/'><p className="flex gap-2 items-center text-lg font-bold cursor-pointer">
          <House /> Home
          </p></Link>
        </div>
        <div className="mt-5">
          <ul>
            
            <Link to="/Aboutme"><li className="p-3 border-b-2 border-gray-700 hover:bg-gray-800 transition duration-300 cursor-pointer">
              About
            </li></Link>
            <Link to="/Skills"> <li className="p-3 border-b-2 border-gray-700 hover:bg-gray-800 transition duration-300 cursor-pointer">
              My Skills
            </li></Link>
            <Link to="/Projects"><li className="p-3 border-b-2 border-gray-700 hover:bg-gray-800 transition duration-300 cursor-pointer">
              Projects
            </li></Link>
            <Link to="/Cerificates"><li className="p-3 border-b-2 border-gray-700 hover:bg-gray-800 transition duration-300 cursor-pointer">
              Certifites
            </li></Link>
            <Link to="/Blogs"><li className="p-3 border-b-2 border-gray-700 hover:bg-gray-800 transition duration-300 cursor-pointer">
              Blogs
            </li></Link>
            <Link to="/Contact"> <li className="p-3 border-b-2 border-gray-700 hover:bg-gray-800 transition duration-300 cursor-pointer">
              Contacts
            </li></Link>
            <li className="p-3 border-b-2 border-gray-700 flex gap-4 items-center justify-center hover:bg-gray-800 transition duration-300">
              <Linkedin className='cursor-pointer' />
              <Github className='cursor-pointer'  />
              <Youtube  className='cursor-pointer' />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidenavbar;
