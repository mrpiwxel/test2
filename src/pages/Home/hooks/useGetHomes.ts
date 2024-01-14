import axios from 'axios'
import { useEffect, useState } from 'react'
export interface HomeType {
    id: number
    plaqe: number
    addresss: string
    age: number
    inside: boolean,
    outside: boolean,
}
const useGetHomes = () => {
    const [data, setData] = useState<any>()

    useEffect(() => {
        async function getHomes() {
            try {
                await axios.get("https://65a414c7a54d8e805ed46a69.mockapi.io/homes").then((res) => {
                    setData(res.data)
                })
            } catch (err) {
                console.log(err, "home.tsx");

            }
        }
        getHomes()
    }, [])
    return { data }
}

export default useGetHomes