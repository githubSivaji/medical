import React ,{useEffect,useState} from 'react'

import axios from 'axios'
const App1 = () => {
    const[data,setData]=useState([])
    axios.post("'https://localhost:5000/sivaji").then(
        response => setData(response.data)
    )
  return (
    <div>
         {data}
    </div>
  )
}

export default App1
