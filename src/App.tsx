import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className="text-3xl font-bold underline">test text</p>
        <p>{count}</p>
      </div>
    </>
  )
}

export default App
