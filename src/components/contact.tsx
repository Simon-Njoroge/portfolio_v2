import { Mail, Phone, MapPin } from 'lucide-react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form: any = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bu4h10e',
        'template_iqllnrp',
        form.current,
        'YyJhWiG_QznqYfND5',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Email sending failed. Please try again later.');
        },
      );
  };

  return (
    <>
      <div className=" bg-gray-900 text-white rounded-lg shadow-lg  ">
        <div>
          <h1 className="text-orange-600  font-bold text-4xl mb-5">Contact Me</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-orange-600 font-bold text-3xl mb-5">Get In Touch</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-lg">
                <Mail className="text-orange-600" />
                <span>mukirisimon22@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Phone className="text-orange-600" />
                <span>+254 717 322552</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <MapPin className="text-orange-600" />
                <span>Kirinyaga, Kutus</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-orange-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-orange-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-orange-600 outline-none"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Send"
                  className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
