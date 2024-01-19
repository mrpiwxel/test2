import { useEffect, useState } from 'react'
import { HomeType } from './useGetHomes'
import axios from 'axios'

const useGetSelectedHome = (id: number) => {
    const [homedata, setData] = useState<HomeType>()
    function getHome() {
        try {
            axios.get(`https://65aaa21d081bd82e1d977017.mockapi.io/homes/${id}`).then((res) => {
                console.log(res.data);
                setData(res.data)
            })

        } catch (err) {
            console.log(err);
        }


    }
    useEffect(() => {
        if (id) {
            getHome()
        }
    }, [id])
    return { homedata }

}

export default useGetSelectedHome