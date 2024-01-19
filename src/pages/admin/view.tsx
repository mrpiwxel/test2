import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { HomeType } from "../Home/hooks/useGetHomes"

export const Admin = () => {
    const {state} = useLocation()
    const [data, setData] = useState<HomeType>()
    useEffect(()=>{
        setData(state)
        console.log(state);  
    }, [state])
    useEffect(()=>{
        console.log(data);
        
    }, [data])
  return (
    <div>Admin <br />
          
          <br />
          {data?.plaqe}
          
          <br />
          {data?.addresss}
          
          <br />
          {data?.age}
          
          <br />
          {data?.inside}
          
          <br />{data?.outside}
    </div>
  )
}
