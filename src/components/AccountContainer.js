import React, { useState, useEffect}from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([]);
  const [search, setSearch] = useState("")
//console.log(transaction);
  useEffect(() =>{
    const lookup = () =>{
      fetch(`http://localhost:8001/transactions?q=${search}`)
      .then(resp => resp.json())
      .then(data => setTransaction(data))
    };
    if(search.length === 0 || search.length > 2) lookup();
  },[search])
    
  
  //console.log(data)

  function AddedTransaction (newTransaction){
    const updatedTrasaction = [...transaction, newTransaction];
    setTransaction(updatedTrasaction);
    //console.log(updatedTrasaction)
  }

  return (
    <div>
      <Search search = {setSearch}/>
      <AddTransactionForm transactionForm = {AddedTransaction}/>
      <TransactionsList transaction = {transaction}/>
    </div>
  );
}

export default AccountContainer;
