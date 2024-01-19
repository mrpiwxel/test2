import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
export interface HomeType {
    id: number
    plaqe: number
    addresss: string
    age: number
    inside: boolean,
    outside: boolean,
}
// snl52017 @zbock.com
// 123qwe!@#QWE
const useGetHomes = () => {
    const[refresh,setRefresh]=useState<boolean|undefined>()
    const [data, setData] = useState<HomeType[]>()
    const [message, setMessage] = useState<string>()
    useEffect(()=>{
        setRefresh(true)
    },[])
    useEffect(() => {
        async function getHomes() {
            try {
                await axios.get("https://65aaa21d081bd82e1d977017.mockapi.io/homes").then((res: AxiosResponse<HomeType[]>) => {
                    if(res.data.length>0){
                        setData(res.data)
                        setRefresh(false)
                        setMessage("")
                    }else{
                        setRefresh(false)
                        setMessage(" هیچ خانه ا ی وجود ندارد")   
                    }
                })
            } catch (err) {
                setMessage("مشکلی پیش آمده است !!!")
                setRefresh(false)
                console.log(err, "home.tsx");

            }
        }
        getHomes()
    }, [])
    return { data, refresh, message }
}

export default useGetHomes