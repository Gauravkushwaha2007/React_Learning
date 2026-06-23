import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterBUtton from './components/CounterButton'
import Card from './components/card'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Learn From Gaurav</h1>
          <p>
            Gaurav kushwaha is a juior Full Stack developer Whants to learn everything about development.
          </p>
          <CounterBUtton/>
        </div>

      </section>
      <section>
        <div className='p-5 mt-4 flex flex-wrap gap-3 w-full border-violet-800 border-1'>
          {/* {Card(name='Gaurav' age={21})} */}
          <Card name='Abhay' img= "https://images.unsplash.com/photo-1766246099181-2055091f8721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" age={23}/>
          <Card name='Ashish Singh' img= "https://plus.unsplash.com/premium_photo-1781571817449-bbb1e662385c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" age={33}/>
          <Card name='Gaurav Kushwaha' img= "https://images.unsplash.com/photo-1781444554216-60fa5ac34903?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"  age={19}/>
          <Card name='Rishu Mishra' img= "https://images.unsplash.com/photo-1781468217416-6312674f03b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"  age={20}/>
          <Card name='Raj Thakur' img= "https://images.unsplash.com/photo-1781348424213-468c60e1c76a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D"  age={22}/>
          <Card name='Vivek Singh' img= "https://plus.unsplash.com/premium_photo-1781045230616-8fe522a552da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D" age={24}/>
          
        </div>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
