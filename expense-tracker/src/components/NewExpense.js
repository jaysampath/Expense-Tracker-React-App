import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing]= useState(false);

    const saveExpenseDataHandler = (inputExpenseData) =>{
       const expenseData = {
           ...inputExpenseData,
           id: Math.random().toString()
       };
      console.log("In NewExpense file: ",expenseData);
      props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
           { !isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCancel={stopEditingHandler} /> }
        </div>

    );
}

export default NewExpense;