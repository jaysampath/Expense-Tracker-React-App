import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   inputTitle: "",
  //   inputAmount: "",
  //   inputDate: "",
  // });

  const titleChange = (event) => {
    //  setUserInput({
    //    ...value.userInput,
    //    inputTitle: event.target.value,
    //  });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     inputTitle: event.target.value
    //   };
    // });

    setInputTitle(event.target.value);
    // console.log(event.target.value);
  };

  const amountChange = (event) => {
    // setUserInput({
    //   ...value.userInput,
    //   inputAmount: event.target.value,
    //  });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     inputAmount: event.target.value
    //   };
    // });

    setInputAmount(event.target.value);
    //console.log(event.target.value);
  };

  const dateChange = (event) => {
    //  setUserInput({
    //    ...value.userInput,
    //    inputDate: event.target.value,
    //  });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     inputDate: event.target.value
    //   };
    // });

    setInputDate(event.target.value);
    //console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={inputTitle} onChange={titleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={inputAmount}
              onChange={amountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={inputDate}
              onChange={dateChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
