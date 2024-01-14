import { useEffect, useState } from 'react'
import { HomeType } from './useGetHomes'
import axios from 'axios'

const useGetSelectedHome = (id: number) => {
    const [homedata, setData] = useState<HomeType>()
    function getHome() {
        try {
            axios.get(`https://65a414c7a54d8e805ed46a69.mockapi.io/homes/${id}`).then((res) => {

                console.log(res);
                setData(res.data)
            })

        } catch (err) {
            console.log(err);
        }


    }
    useEffect(() => {
        if (id !== 0) {
            getHome()
        } else {
            console.log("not call gethome");

        }
    }, [id])
    return { homedata }

}

export default useGetSelectedHome