import { ArrowDownToLine } from 'lucide-react';
import './nav.scss'
import resume from '../assets/resume 1.pdf'
const Navbar = () => {
  

    const day: any = document.querySelector('#bday')
    day?.addEventListener('click', () => {
      document.body.classList.toggle("mode")

    })
   
  
  return (
    <>
      <div className="flex justify-between p-5 bg-gray-900 text-white   shadow-md border-b-2 border-orange-600" id='nav'>
        <div>
          <p className="font-bold  text-orange-600 text-2xl">Simon.</p>
        </div>
        <div className="flex gap-2">
        <a href={resume} download><button className="flex items-center gap-1 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <ArrowDownToLine />
            Resume
          </button></a>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"  id="bday">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
