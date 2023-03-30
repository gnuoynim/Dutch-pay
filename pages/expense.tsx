import BaseLayout from "@/layout/base-layout";
import AddExpenseComponent from "@/components/add-expense-component";
import ExpenseTableComponent from "@/components/expense-table-component";
import SettlementComponent from "@/components/settlement-component";
import { Container } from "react-bootstrap";

const Expense = () => {
  return (
    <BaseLayout>
      <AddExpenseComponent />
      <SettlementComponent />
    </BaseLayout>
  );
};
export default Expense;
