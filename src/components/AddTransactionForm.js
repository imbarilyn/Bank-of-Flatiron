import React, {useState} from "react";

  function AddTransactionForm ({transactionForm}){
    
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("")

    function handlerSubmit(e) {
      e.preventDefault();
//structuring our object for post HTTP verb
      const transItem = {
        date: date,
        description: description,
        category: category,
        amount: amount
      }

     post(transItem)
    }
    //const data = transItem

    function post (data){
      fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      transactionForm(data)
    }
    

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit = {handlerSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value = {date} onChange ={(e) =>setDate(e.target.value)}/>
          <input type="text" name="description" placeholder="Description" value = {description} onChange={(e)=>setDescription(e.target.value)} />
          <input type="text" name="category" placeholder="Category" value = {category} onChange={(e) => setCategory(e.target.value)}/> 
          <input type="number" name="amount" placeholder="Amount" step="0.01" value = {amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button type = "submit" className="ui button">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;                          