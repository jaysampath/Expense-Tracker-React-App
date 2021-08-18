import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
  const expenseDate = props.item.date;
  let expenseTitle = props.item.title;
  const expenseAmount = props.item.amount;

  return (
   <li> <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2> {expenseTitle} </h2>
        <div className="expense-item__price"> $ {expenseAmount} </div>
      </div>
    </Card>
    </li> 
  );
}

export default ExpenseItem;
