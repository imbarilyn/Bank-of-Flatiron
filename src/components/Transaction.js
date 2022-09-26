import React from "react";

function Transaction({item}) {
  const {date, description, category, amount} = item;
 //console.log(transaction.date)
  return (
    
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
