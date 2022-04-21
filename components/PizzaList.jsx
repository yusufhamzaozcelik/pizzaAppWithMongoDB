import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hiç Bizimkinden Tattınız mı?</h1>
      <p className={styles.desc}>
        Bu pizzalar al beğenmezsen gel beni silk.En son pizzayı yaparken am teri kullandık.   Bu pizzalar al beğenmezsen gel beni silk.En son pizzayı yaparken am teri kullandık.   Bu pizzalar al beğenmezsen gel beni silk.En son pizzayı yaparken am teri kullandık.
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