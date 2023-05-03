// styling
import styles from "./Card.module.css";

const Card = ({ details }) => {
  return (
    <div>
      <div key={details.id} className={styles.container}>
        {details.map((item, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.carImg} src={item.url} alt="cat-pics" />
            <p className={styles.name}>{item.name}</p>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.age}>{item.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
