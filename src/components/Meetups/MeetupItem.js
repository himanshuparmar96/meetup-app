import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";
//import classes from "./MeetupList.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To favourite</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
