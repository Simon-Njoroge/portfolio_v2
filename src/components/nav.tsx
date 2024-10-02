import { ArrowDownToLine } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-5 bg-gray-900 text-white   shadow-md border-b-2 border-orange-600">
        <div>
          <p className="font-bold text-lg">Simon.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <ArrowDownToLine />
            Resume
          </button>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
