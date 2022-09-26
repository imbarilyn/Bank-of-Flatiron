import React, { useState } from "react";
import Transaction from "./Transaction";

function AddTransactionForm() {
  const [dataForm, setDataForm] = useState([
    {
      date: "",
      description: "",
      category: "",
      amount: 0
    }
  ]
  )

  function handleChange(){}

  function handleSubmit (e) {
    e.preventDefault();
    const data ={
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount:  e.target.amount.value
    }
    post(data); 
    renderItem()   
    }

    function post (data){
      fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      setDataForm(data)
    }

    function renderItem () {
      fetch("http://localhost:8001/transactions")
      .then(resp => resp.json())
      .then(itemAdd => itemAdd.map(item => item))

    }


  

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit} >
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} />
          <input type="text" name="description" placeholder="Description"   onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category"  onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01"  onChange={handleChange}/>
        </div>
        <button type = "submit" className="ui button">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
