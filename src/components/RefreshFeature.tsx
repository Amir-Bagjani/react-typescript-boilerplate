import { useState } from 'react'

const RefreshFeature = () => {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      count is - {count}
    </button>
  )
}

export default RefreshFeature
