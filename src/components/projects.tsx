import proj1 from '../assets/Screenshot 2024-10-25 094218.png'
import proj2 from '../assets/Screenshot 2024-10-25 094638.png'
import proj3 from '../assets/Screenshot 2024-10-25 094930.png'
import proj4 from '../assets/Screenshot 2024-10-25 095107.png'
import proj5 from '../assets/Screenshot 2024-10-25 095300.png'
import proj6 from '../assets/Screenshot 2024-10-25 095458.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Project = () => {
    const handleClick = () => {
        toast.loading("Running pnpm run dev");
    };

    const project = [
        {
            id: 1,
            title: "Rotaract Club of Kirinyaga University",
            description: "A website showcasing the initiatives and events organized by the Rotaract Club of Kirinyaga University.",
            image: proj1,
            link: "https://rotaractkirinyagauni.org/"
        },
        {
            id: 2,
            title: "Rest Country",
            description: "A React app that provides details about different countries, including population, region, and capital.",
            image: proj2,
            link: "https://countries-react-project-eight.vercel.app/"
        },
        {
            id: 3,
            title: "Blogr Landing",
            description: "A landing page project for Blogr, featuring responsive design and visually appealing layouts.",
            image: proj3,
            link: "https://blogr-landing-project-1.vercel.app/"
        },
        {
            id: 4,
            title: "Snap React Project",
            description: "A React-based front end for a mock social media platform, inspired by the Snap landing page.",
            image: proj4,
            link: "https://snap-react-project-2.vercel.app/"
        },
        {
            id: 5,
            title: "To-Do App",
            description: "A functional to-do list app that allows users to add, edit, and delete tasks to stay organized.",
            image: proj5,
            link: "https://todo-app-react-nu-one.vercel.app/"
        },
        {
            id: 6,
            title: "FAQs",
            description: "An FAQ section built with HTML, allowing users to expand and view answers to common questions.",
            image: proj6,
            link: "https://todo-app-react-nu-one.vercel.app/"
        }
    ];

    return (
        <>
            <div className="p-6 bg-gray-900 min-h-screen text-white">
                <h1 className="text-orange-500 font-bold text-3xl text-center mb-8">Projects.</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.length > 0 ? (
                        project.map((proj) => (
                            <div key={proj.id} className="bg-gray-800 rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform">
                                <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                <h2 className="text-xl font-semibold text-center mb-2">{proj.title}</h2>
                                <p className="text-gray-400 text-sm text-center mb-4">{proj.description}</p>
                                <div className="flex justify-center">
                                    <a 
                                        href={proj.link} 
                                        rel="noopener noreferrer"
                                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                                        onClick={handleClick}
                                    >
                                        Go Live
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No projects available</p>
                    )}
                </div>
            </div>
            <ToastContainer />
            <br/>
            <br/>
            <br/>
            
           
        </>
    );
};

export default Project;
