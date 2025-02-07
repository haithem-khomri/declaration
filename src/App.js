import { useState } from 'react'
import "./App.css"

function App() {
  const [a, setA] = useState(1)

  function YesHandler(){
    setA(a=>1)
    document.querySelector(".Yes").style.transform=`scale(1)`
    document.querySelector("h1").textContent="HEHE Nice"
    document.querySelector("img").src="/declaration/win.jpg"
    document.querySelector(".No").style.display="none"
    document.querySelector(".Yes").style.width=`80`
    document.querySelector(".Yes").style.height=`40`

  }

  function NoHandler(e){
    setA(a=>a+0.2)
    document.querySelector("h1").textContent="You sureeeee!!!!"
    document.querySelector("img").src="/declaration/sad.jpg"
    document.querySelector(".Yes").style.transform=`scale(${a})`
  }

  return (
    <>
    <div className="container">
      <img src="/declaration/logo.jpg" alt="" />
      <h1>TINA mm hna khmmt fik thaniiii ou hbitkkkkkk </h1>
      <h1>Do u Love Me BchBouch ? </h1>
      <div className="buttons">
        <button onClick={()=>YesHandler()} className='Yes'>Yes</button>
        <button onClick={(e)=>NoHandler(e)} className='No'>No</button>
      </div>
    </div>

    </>
  )
}

export default App
