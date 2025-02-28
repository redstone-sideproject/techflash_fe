import { useState, useEffect } from 'react'

function useDebounce(value: string, delay = 200) {
  const [debounceVal, setDebounceVal] = useState<string>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debounceVal
}

export default useDebounce
