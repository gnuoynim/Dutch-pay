import { Table } from "react-bootstrap";
import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const ExpenseTableComponent = () => {
  const expenses = useSelector((state: RootState) => state.expenses);

  return (
    <div className="expenseTable col">
      <Table borderless hover responsive>
        <thead>
          <tr>
            <th>날짜</th>
            <th>내용</th>
            <th>결제내용</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.desc}</td>
              <td>{item.payer}</td>
              <td>{item.amount}원</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseTableComponent;
