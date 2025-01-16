import classes from "./Principles.module.css";
import Avatar1 from "./assets/home_principles_food_icon.svg";
import Avatar2 from "./assets/home_principles_exercise_icon.svg";
import Avatar3 from "./assets/home_principles_stress_icon.svg";
import Avatar4 from "./assets/home_principles_rest_icon.svg";

function Principles({ title, children }) {
  return (
    <div className={classes.contentBody}>
      <section>
        <div className={classes.iconContainer}>
          <img className={classes.icon} src={Avatar1} />
        </div>
      </section>
      <section>
        <div className={classes.iconContainer}>
          <img className={classes.icon} src={Avatar2} />
        </div>
      </section>
      <section>
        <div className={classes.iconContainer}>
          <img className={classes.icon} src={Avatar3} />
        </div>
      </section>
      <section>
        <div className={classes.iconContainer}>
          <img className={classes.icon} src={Avatar4} />
        </div>
      </section>
    </div>
  );
}

export default Principles;
