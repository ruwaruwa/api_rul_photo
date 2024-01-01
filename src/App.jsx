import { Route, Router, Routes } from "react-router-dom"
import Asignm from "./pages/Asignm"
import Apis from "./components/Apis"
import { useEffect, useState } from "react"
import axios from "axios"
import GETphoto from "./components/GETphoto"


function App() {
const[Dates,setDate]=useState([])
const getData=()=>{
  axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    setDate(response.data)
  }).catch(error=>{
    console.log(error)
  })
}
// getData()
useEffect(()=>{
  getData();
},[])

  return (
    <>
  {/* <table className='ml-[200px] mt-5 text-3xl border-separate overflow-hidden'>
  <thead >
      <tr className='px-8 bg-red-400 py-8 text-white'>
                    <th className='px-10 border-2 border-purple-500'>Name</th>
                    <th className='px-10 border-2 border-purple-500'>Username</th>
                    <th className='px-10 border-2 border-purple-500'>Email</th>
                </tr>
   </thead>
   
{
    Dates.map((item,index)=>{
      return <Apis key={index}
       name={item.name}
      username={item.username}
      email={item.email}
      />
    })
   }

  </table> */}
    {/* <Apis /> */}
{/* <div>
  <button onClick={getData}>getDate</button>
</div> */}

      {/* <Routes>
    <
      </Routes> */}
      <GETphoto/>
    </>
  )
}

export default App
