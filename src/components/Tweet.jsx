import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweetData }) {
  console.log(tweetData);
  return (
    <div className="tweet">
      <ProfileImage image={tweetData.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweetData.user.name} handle={tweetData.user.handle} />
          <Timestamp timestamp={tweetData.timestamp} />
        </div>

        <Message message={tweetData.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
