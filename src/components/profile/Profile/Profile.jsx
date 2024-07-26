import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const userStats = Object.entries(stats);

  return (
    <div className={css.profile}>
      <div className={css["profile-top"]}>
        <div className={css["avatar-circle"]}>
          <img className={css["avatar-img"]} src={image} alt={name} />
        </div>
        <>
          <p className={css["profile-name"]}>{name}</p>
          <p className={css["profile-tag"]}>@{tag}</p>
          <p className={css["profile-location"]}>{location}</p>
        </>
      </div>
      <ul className={css["profile-stats"]}>
        {userStats.map((userStat, idx) => {
          const [title, value] = userStat;
          return (
            <li key={idx}>
              <span className={css.title}>{title}</span>
              <span className={css.quantity}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;