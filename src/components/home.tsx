import me from '../assets/me 1.jpg'
import { TypeAnimation } from 'react-type-animation';
import { Gauge } from '@mui/x-charts/Gauge';
import Stack from '@mui/material/Stack';
const Home=()=>{

    const Range:any= [{
        id:1,
        Name:"Years experienced",
        Gauge:1
    },
    {
        id:2,
        Name:"Live Project",
        Gauge:20
    },
    {
        id:3,
        Name:"Positive feedback",
        Gauge:100
    },
    {
        id:4,
        Name:"People team lead",
        Gauge:8
    }
]

    return(
        <>
        <div className="text-white flex gap-2">
            <div>
              <p className='flex gap-2'>Hey , I am <p className='text-orange-600 font-bold'>Mukiri Simon Njoroge</p></p>
              <p>I am an enthusiastic Computer Scientist and a Full Stack Web Developer, passionate about creating innovative web applications and solving complex problems with code. With expertise in various modern technologies, I strive to build solutions that are both functional and user-friendly.</p>
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
  style={{ fontSize: '1em', display: 'inline-block', color: 'green' }}
  repeat={Infinity}
/>
<div className='flex gap-5 justify-center  bg-gray-800 mt-5 rounded-md '>
 {
    Range && Range.map((range:any)=>{
        return(<>
        <div key={range.id} className=''>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
     
      <Gauge width={100} height={100} value={range.Gauge} startAngle={-90} endAngle={90} />
    </Stack>
            <p className='text-orange-600'>{range.Name}</p>
        </div>
        </>)
    })
 }
</div>
<div>
    
</div>
            </div>
            {/* folders */}
            <div>
            <img src={me} alt="" className='rounded cursor-pointer relative hover:-top-2' />
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </>
    )
}
export default Home