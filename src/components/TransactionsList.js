import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transaction}) {
  //console.log(listItem)
  const transactionLists = transaction.map(item => {
    return <Transaction  key ={item.id} item ={item}/>
  })
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionLists}
      </tbody>
    </table>
  );
}

export default TransactionsList;
