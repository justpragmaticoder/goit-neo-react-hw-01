import { FriendListItem } from '@components/friends';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}>
      {friends.map(friend => (
        <li className={css['friends-item']} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
