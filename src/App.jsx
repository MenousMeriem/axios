import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'

function App() {
  const [carte , setCarte] = useState([])
  const [form, setForm] = useState({
    username:"",
    password: ""
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
       
        const response = await axios.delete("http://localhost:5000/Container/AfficherContainer",config)
        setCarte(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()

    return () => {
      //Si tu quitte le composana
    }

  }, [])
  

  setInterval(() => {
    refresh()
  }, 1000*60*10)

  return (
    <div>
      {carte.length && carte.map(ct => (<Card key={ct._id} data={ct} />)) }
      <form onSubmit={submit}>
        <input type="text" name='username' value={form.username}  />
      </form>
    </div>
  )
}

export default App
