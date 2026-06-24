import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/card'
function App() {

  // const names = ['Rahul', 'Gaurav', 'Rishabh', 'Priya', 'Shivani', 'Ankita'];
  const jobs = [
    {
      company : 'Amazon',
      role: 'UI/UX Designer',
      price: '₹120/hr',
      location: 'Baikunthpur, Rewa',
      img: 'https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      company : 'Blinkit',
      role: 'Backend Developer',
      price: '₹100/hr',
      location: 'Ahemdabad, India',
      img:'https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww'
    },
    {
      company : 'Apple',
      role: 'Graphic Designer',
      price: '₹140/hr',
      location: 'Bombay, India',
      img: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fHww'
    },
    {
      company : 'Swiggy',
      role: 'UI/UX Designer',
      price: '₹90/hr',
      location: 'Pune, Maharastra',
      img: 'https://i.pinimg.com/originals/28/b1/73/28b173f6230996a61699f78a5050b942.png'
    },
    {
      company : 'Wipro',
      role: 'Frontend Developer',
      price: '₹100/hr',
      location: 'Delhi, India',
      img: 'https://plus.unsplash.com/premium_photo-1728874855668-7dbfad5b0a41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpcHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      company : 'NVIDIA',
      role: 'Graphic Designer',
      price: '₹150/hr',
      location: 'Jabalpur, MP',
      img: 'https://images.unsplash.com/photo-1662947683280-3be5bfc47075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bnZpZGlhfGVufDB8fDB8fHww'
    },
    {
      company : 'Zomato',
      role: 'Blog Maker',
      price: '₹100/hr',
      location: 'Bhopal, MP',
      img: 'https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGl1bXxlbnwwfHwwfHx8MA%3D%3D'
    },
  ];
  return (
    <>
      <section className='flex flex-col items-center justify-center p-[30px] gap-[25px] text-center' id="center">
        <div className="hero relative">
          <img src={heroImg} className="base w-[170px] relative" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework h-[28px] top-[34px] absolute left-[50%] transform -translate-x-1/2" alt="React logo" />
          <img src={viteLogo} className="vite top-[107px] h-[26px] absolute left-1/2 -translate-x-1/2" alt="Vite logo" />
        </div>
        <div>
          <h1>Learn From Gaurav</h1>
          <p>
            Gaurav kushwaha is a juior Full Stack developer Whants to learn everything about development.
          </p>
        </div>

      </section>
      <section>
        {/* <div className='p-5 mt-4 flex flex-wrap gap-4 w-full border-violet-800 border-1'>
          {names.map((ele)=>{
            return <Card name={ele}/>
          })}
        </div> */}
        <div className='p-5 mt-4 flex flex-wrap gap-4 w-full border-violet-800 border-1'>
          {
            jobs.map((job, index)=>{
              return <Card index={index} job={job}/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default App
