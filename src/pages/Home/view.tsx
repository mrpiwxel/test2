import { useEffect, useState } from "react";
import useGetHomes, { HomeType } from "./hooks/useGetHomes"
import useGetSelectedHome from "./hooks/useGetSelectedHome";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import { Skelton } from "../../components/skelton";
export const Home = () => {
    const { data, refresh, message } = useGetHomes()
    const [homes, setHomes] = useState<HomeType[]>()
    const [selectedHome, setSelctedHome] = useState<number>(0)
    const { homedata } = useGetSelectedHome(selectedHome)
    const nav = useNavigate()
    useEffect(() => {
        setHomes(data)
        console.log(homedata);
        
    }, [data, homedata])
    return (
        <div className={styles["container"]}>
            <button
                disabled={
                    !homedata?.inside && !homedata?.outside
                }
            >
                {homedata?.inside && "inside"}/
                {homedata?.outside && "outside"}
            </button>
            <div className={styles["homes"]} >
                {!refresh &&
                    homes?.map((el, index) =>
                        <div
                            className={styles["home"]}
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
                {message && <div className={styles["message"]}>
                    {message}
                </div>}
                {refresh &&
                    <div className={styles["skeltons"]} >
                        <Skelton width={100} height={100} />
                        <Skelton width={100} height={100} />
                        <Skelton width={70} height={40} />
                        <Skelton width={70} height={40} />
                    </div>
                }
            </div>
            <button disabled={homedata ? false : true}
                onClick={() => {
                    nav("/admin", { state: homedata })
                }}
            >
                مرحله بعذ
            </button>
        </div>
    )
}

