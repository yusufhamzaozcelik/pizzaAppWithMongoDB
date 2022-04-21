import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"

const Navbar=()=>{
    const quantity= useSelector((state)=>state.cart.quantity);
    return (
        <div className={styles.container}>
           
           <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/telephone.png" alt="" width ="32" height="32"/>
            </div>
                <div className={styles.texts}>
                <div className={styles.text}>Order Now!</div>
                <div className={styles.text}>05344551008</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>HomePage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/logo.png" alt="" width="100%" height="100%"/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
                </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
                    <div className={styles.counter}>{quantity}</div>                
                </div>
            </div>
           
        </div>
    )
}
export default Navbar