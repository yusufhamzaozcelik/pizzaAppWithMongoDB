import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pizza Çeşitlerimiz </h1>
      <p className={styles.desc}>
        Şehrin en iyi pizzalarını satmaktan gurur duyuyoruz. Kaliteli ve uygun fiyata tadabileceğiniz en iyi pizzalar burada!!!!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza)=>(
           <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
         
        
      </div>
      </div>
    );
};

export default PizzaList;