import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const headerItems = ["Type", "Amount", "Currency"];
  return (
    <table className={css.table}>
      <thead>
        <tr>
          {headerItems.map((item, idx) => (
            <th key={idx}>{item}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;