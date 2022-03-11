import { useNavigate } from "react-router-dom";
import NewMeetupform from "../components/Meetups/NewMeetupform";

function NewMeetup() {
  //const navigate = Navigate();
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-c481f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>New Meetup Form</h1>
      <NewMeetupform onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
