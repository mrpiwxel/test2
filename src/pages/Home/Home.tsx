import { useEffect, useState } from "react";
import useGetHomes, { HomeType } from "./hooks/useGetHomes"
import useGetSelectedHome from "./hooks/useGetSelectedHome";

export const Home = () => {
    const { data } = useGetHomes()
    const [homes, setHomes] = useState<HomeType[]>()
    const [selectedHome, setSelctedHome] = useState<number>(0)
    const { homedata } = useGetSelectedHome(selectedHome)
    useEffect(() => {
        setHomes(data)
        if(data){
            setSelctedHome(data[0].id)
        }
    }, [data])
    return (
        <div>
                <button
                disabled={
                    !homedata?.inside && !homedata?.outside
                }
                >
                {homedata?.inside && "inside" }/
                {homedata?.outside && "outside"}
            </button>
            {homes &&
                homes.map((el, index) =>
                    <div
                        key={el.id}
                        onClick={() => {
                            setSelctedHome(el.id)
                        }}
                    >
                        {index} <br />
                        {el.plaqe} <br />
                        {el.addresss} <br />
                        {el.age} <br />
                    </div>)
            }
            {!homes &&
                <>not found</>
            }

        </div>
    )
}

