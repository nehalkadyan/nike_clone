import React, {useState, useEffect} from 'react'
import axios from "axios";

const Data = () => {
    const [data, setData] = useState([])

    useEffect(() => {

       axios.get("http://localhost:3031/users")
       .then(resp => setData(resp.data))
       .catch(err => console.log(err))
       console.log(data)
    }, [])

  return (
    <div>
      {data.map((item) => {
        return (
            <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.city}</div>
            </div>
        )
      })}
    </div>
  )
}

export default Data
