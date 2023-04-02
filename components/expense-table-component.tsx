import { Table } from "react-bootstrap";
import { useAppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import { setValidity } from "@/store/reducers/validityReducer";
import { useState } from "react";

const ExpenseTableComponent = () => {
  const expenses = useSelector((state: RootState) => state.expenses);
  const validity = useSelector((state: RootState) => state.validity);
  const [confirm, setConfirm] = useState(false);
  const dispatch = useAppDispatch();

  const handleClickConfirm = () => {
    dispatch(setValidity(true));
  };
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
              {item.validity === false ? undefined:(
                <>
                  <td>{item.date}</td>
                  <td>{item.desc}</td>
                  <td>{item.payer}</td>
                  <td>{item.amount}원</td>
                </>
              ) }
            </tr>
          ))}
        </tbody>
      </Table>
      <button type="button" onClick={handleClickConfirm}>
        정산결과 확인
      </button>
    </div>
  );
};

export default ExpenseTableComponent;
