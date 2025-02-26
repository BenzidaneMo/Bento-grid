import './App.css'

function App() {
  
  return (
    <>
      <main className='container'>
        <article className='bx-1 bck-clr-purple pad-1 box-shadow brd-rad-1 grid-col-span'>
          <h1>Social Media <span className='clr-yellow'>10x</span> <span className='italic'>Faster</span> with AI</h1>
          <img src="\images\illustration-five-stars.webp" alt="" />
          <p>Over 4,000 5-star reviews</p>
        </article>
        
        <article className='bx-2 bck-clr-white clr-black pad-1 box-shadow brd-rad-1'>
          <img src="\images\illustration-multiple-platforms.webp" alt="" />
          <h3>Manage multiple accounts and platforms.</h3>
        </article>
        
        <article className='bx-3 bck-clr-yellow clr-black pad-1 box-shadow brd-rad-1'>
          <h3>Maintain a consistent posting schedule.</h3>
          <img src="\images\illustration-consistent-schedule.webp" alt="" />
        </article>
        
        <article className='bx-4 bck-clr-light-purple clr-black pad-1 box-shadow brd-rad-1'>
          <h3>Schedule to social media.</h3>
          <img src="/images/illustration-schedule-posts.webp" alt="" />
          <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </article>
        
        <article className='bx-5 bck-clr-purple flex pad-1 box-shadow brd-rad-1 grid-col-span'>
          <img src="\images\illustration-grow-followers.webp" alt="" />
          <h2>Grow followers with non-stop content.</h2>
        </article>
        
        <article className='bx-6 bck-clr-white clr-black pad-1 box-shadow brd-rad-1'>
          <h1>&gt;56%</h1>
          <p>faster audience growth</p>
          <img src="\images\illustration-audience-growth.webp" alt="" />
        </article>
        
        <article className='bx-7 clr-black'>
          <div className='s-box-1 bck-clr-light-yellow pad-1 box-shadow brd-rad-1'>
            <h2>Create and schedule content <span className='clr-purple italic'>quicker.</span></h2>
            <img src="\images\illustration-create-post.webp" alt="" />
          </div>
          <div className='s-box-2 bck-clr-yellow pad-1 box-shadow brd-rad-1'>
            <h2>Write your content using AI.</h2>
            <img src="\images\illustration-ai-content.webp" alt="" />
          </div>
        </article>
      </main>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">Mohamed Benzidane</a>.
      </footer>
      
    </>
  )
}

export default App
