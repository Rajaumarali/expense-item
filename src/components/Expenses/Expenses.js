import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2020');

    const dropdownDataHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    };

    const filteredExpense = props.items.filter(expense => {
       return expense.date.getFullYear().toString() === filterYear;
    });

   


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onDropDownData={dropdownDataHandler}/>
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList items={filteredExpense} />
            </Card>
        </div>
    );
}

export default Expenses;