import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='bx-1'>
          <h1>Social Media <span>10x</span> Faster with AI</h1>
          <p>Over 4,000 5-star reviews</p>
        </div>
        <div className='bx-2'>
          <h2>Manage multiple accounts and platforms.</h2>
        </div>
        <div className='bx-3'>
          <h2>Maintain a consistent posting schedule.</h2>
        </div>
        <div className='bx-4'>
          <h2>Schedule to social media.</h2>
          <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
        <div className='bx-5'>
          <h2>Grow followers with non-stop content.</h2>
        </div>
        <div className='bx-6'>
          <h2>&gt;56% faster audience growth</h2>
        </div>
        <div className='bx-7'>
          <div className='s-box-1'>
            <h2>Create and schedule content <span>quicker.</span></h2>
          </div>
          <div className='s-box-2'>
            <h2>Write your content using AI.</h2>
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">Mohamed Benzidane</a>.
      </div>
      
    </>
  )
}

export default App
