import styles from "./skelton.module.scss"
interface Skelton_Props{
    width:number
    height:number
}
export const Skelton = ({width,height}:Skelton_Props) => {
  return (
      <div className={styles["skelton"]} style={{width:`${width}px`,height:`${height}px`}} ></div>
  )
}
