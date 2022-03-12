import { useState, useEffect } from 'react'

// Call API data
export function useFetch(url: string) {
  const [data, setData] = useState({}) // State datas
  const [isLoading, setLoading] = useState<boolean>(true) // State status loading
  const [error, setError] = useState<boolean>(false) // State error return API

  useEffect(() => {
    // if no url return nothing
    if (!url) return

    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {        
        setError(true)
        throw new Error('Erreur lors de la requete API: ' + err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { isLoading, data, error }
}
