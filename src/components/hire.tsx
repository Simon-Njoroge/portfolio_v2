import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom';
const Hireme = () => {
  const form: any = useRef(null);
  const [loading, setLoad] = useState(false);
  const navigate = useNavigate();
  const row: any = '4';

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoad(true);

    emailjs
      .sendForm('service_bu4h10e', 'template_iqllnrp', form.current, 'YyJhWiG_QznqYfND5')
      .then(
        () => {
          toast.success('Message sent successfully!'); 
          setLoad(false); 
          setTimeout(() => {
            navigate('/');
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Message failed to send. Please try again later.'); 
          setLoad(false); 
        }
      );
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-10">
      <Link to="/"><button
              className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
            >
              Back
            </button></Link>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Hire Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-white  font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 border text-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 border text-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 border text-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              rows={row}
              placeholder="Write your message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span className="ml-2">Sending</span>
                  <ClipLoader size={20} color="#fff" />
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Hireme;
