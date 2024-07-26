import { Profile } from "@components/profile";
import { FriendList } from "@components/friends";
import { TransactionHistory } from "@components/transactions";

import userData from "./data/userData.json";
import friends from "./data/friendsData.json";
import transactions from "./data/transactionsData.json";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};