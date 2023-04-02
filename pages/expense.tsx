import BaseLayout from "@/layout/base-layout";
import AddExpenseComponent from "@/components/add-expense-component";
import SettlementComponent from "@/components/settlement-component";


const Expense = () => {
  return (
    <BaseLayout>
      <AddExpenseComponent />
      <SettlementComponent />
    </BaseLayout>
  );
};
export default Expense;
