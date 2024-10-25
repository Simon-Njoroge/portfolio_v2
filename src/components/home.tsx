import me from '../assets/me 1.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Gauge } from '@mui/x-charts/Gauge';
import Stack from '@mui/material/Stack';

const Home = () => {
    const Range = [
        { id: 1, Name: "Years experienced", Gauge: 1 },
        { id: 2, Name: "Live Projects", Gauge: 20 },
        { id: 3, Name: "Positive Feedback", Gauge: 100 },
        { id: 4, Name: "People Team Lead", Gauge: 8 }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Intro and Animation Section */}
                <div className="flex-1">
                    <p className="text-lg mb-2">
                        Hey, I am <span className="text-orange-600 font-bold">Mukiri Simon Njoroge</span>
                    </p>
                    <p className="text-gray-400 mb-4">
                        I am an enthusiastic Computer Scientist and a Full Stack Web Developer, passionate about creating innovative web applications and solving complex problems with code. With expertise in various modern technologies, I strive to build solutions that are both functional and user-friendly.
                    </p>
                    <TypeAnimation
                        sequence={[
                            'I am an enthusiastic Computer Scientist',
                            1000,
                            'I am a Full Stack Web Developer',
                            1000,
                            'I create innovative web applications',
                            1000,
                            'I solve complex problems with code',
                            1000,
                            'I build functional and user-friendly solutions',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1.25em', display: 'inline-block', color: 'lightgreen' }}
                        repeat={Infinity}
                    />

                    {/* Gauges Section */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-8 bg-gray-800 p-4 rounded-md mt-8">
                        {Range.map((range) => (
                            <div key={range.id} className="text-center">
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                                    <Gauge
                                        width={100}
                                        height={100}
                                        value={range.Gauge}
                                        startAngle={-90}
                                        endAngle={90}
                                        
                                    />
                                </Stack>
                                <p className="text-orange-600 mt-2">{range.Name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profile Image Section */}
                <div className="relative hover:-translate-y-2 transform transition duration-300">
                    <img
                        src={me}
                        alt="Mukiri Simon Njoroge"
                        className="w-48 h-48 rounded-full shadow-lg"
                    />
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default Home;
