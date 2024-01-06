import { useEffect, useState } from 'react'

export default function Home() {
  const [name, setName] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/users/evan')
      const { name } = await res.json()
      setName(name)
    }
    fetchData()
  }, [])

  if (!name) return <p>Loading...</p>

  return <p>Hello {name}</p>
}
