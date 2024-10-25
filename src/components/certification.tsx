import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Certificate = () => {
    const handleClick=()=>{
        toast.loading("loading please wait....")
    }
    const certificate = [
        {
            id: 1,
            logo: 'https://i.ibb.co/qg9PFP9/Whats-App-Image-2024-10-16-at-10-07-02-8b9afb43.jpg',
            for: 'Full Stack Web Development',
            link: "https://drive.google.com/file/d/1lXpw-fzTcWu832j_OebMuaPO9iNT9Ha3/view?usp=sharing"
        },
        {
            id: 2,
            logo: "https://i.ibb.co/Wcw7wMw/simon-njoroge-module-1-badge-1.png",
            for: "Professional Development",
            link: "https://drive.google.com/file/d/1We0GIfuU639N3-FDCq6LVA6i-uDG8oR-/view?usp=sharing"
        },
        {
            id: 3,
            logo: "https://i.ibb.co/vHhdCFf/simon-njoroge-module-2-badge-1.png",
            for: "Professional Development",
            link: "https://drive.google.com/file/d/14JWaTU6gYRwuZmB5bB9JzD9Sy273TdX2/view?usp=sharing"
        }
    ]
    return (
        <>
            <div>
                <h1 className="text-orange-600 font-bold text-2xl mt-5">Licenses & Certifications.</h1>
                <div className=" block  md:grid md:grid-cols-4 gap-2 ">
                    {
                        certificate.length > 0 ? (
                            certificate && certificate.map((cert) => {
                                return (
                                    <>
                                        <div key={cert.id} className=" mb-5 bg-gray-800 hover:bg-gray-700 transition duration-300 p-2 rounded-md">
                                            <img src={cert.logo} alt="" className="w-full h-40 rounded" />
                                            <p className="text-center text-white font-bold">{cert.for}</p>
                                            <p className="text-center"><a href={cert.link} className="text-center inline-block px-4 py-2 border border-gray-900 rounded-md text-gray-900 hover:bg-red-900 hover:text-white transition-colors duration-300" onClick={handleClick}>
                                                Verify
                                            </a></p>
                                        </div>
                                    </>
                                )
                            })
                        ) : (
                            <p>No certificactions</p>
                        )
                    }
                </div>
            </div>
            <ToastContainer/>
            <br />
            <br />
        </>
    )
}
export default Certificate