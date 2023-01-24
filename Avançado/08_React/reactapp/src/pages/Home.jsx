import { useState } from 'react'
import '../style/global.css'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div class='bg-slate-700 text-center text-white h-32 justify-center'>
        <h1 class='text-red-400 text-xl font-sans'>Calculadora</h1>
        <p>{count}</p>
        <button class='bg-green-700 w-10' onClick={() => setCount((count) => count + 1)}>+</button>
        <button class='bg-red-700 w-10' onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  )
}
