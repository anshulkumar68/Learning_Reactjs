import { useState } from 'react'
import './App.css'
import BoxContainer from './components/BoxContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <span className='text-2xl font-bold flex justify-center items-center my-10'>Pagination</span>
    <BoxContainer />
    </>  )
}

export default App
