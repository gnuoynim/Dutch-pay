import BaseLayout from "@/layout/base-layout";
import AddExpenseComponent from "@/components/add-expense-component";
import ExpenseTableComponent from "@/components/expense-table-component";

const Expense = () =>{
return(
    <BaseLayout>
        <AddExpenseComponent/>
        <ExpenseTableComponent/>
    </BaseLayout>
)
}
export default Expense;
