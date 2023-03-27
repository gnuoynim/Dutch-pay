import { ChangeEvent, useState } from "react";
import { Form } from "react-bootstrap";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { setExpenses } from "@/store/reducers/expensesReducer";

const AddExpenseComponent = () => {
  const dispatch = useAppDispatch();
  const groupMember = useSelector((state: RootState) => state.groupMember);
  const expenses = useSelector((state: RootState) => state.expenses);
  const today = new Date();
  const [date, setDate] = useState(
    [today.getFullYear(), today.getMonth() + 1, today.getDate()].join("-")
  );
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [payer, setPayer] = useState(null);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(date, desc, amount, payer);
    const form = event.currentTarget as any;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch(setExpenses([date, desc, amount, payer]));
    }
    setValidated(true);
  };
  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPayer(event.target.value as any);
  };
  
  console.log(expenses)
  return (
    <>
   
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1>비용을 추가하기</h1>
        
        <Form.Group>
          <Form.Control
            type="date"
            name="expenseDate"
            placeholder="결제한 날짜를 선택해 주세요"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            required
            name="expenseDescription"
            placeholder="비용에 대해 설명해주세요"
            value={desc}
            onChange={({ target }) => setDesc(target.value)}
          />
          <Form.Control.Feedback type="invalid">
            내용을 입력해주세요
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            required
            name="expenseAmount"
            placeholder="비용은 얼마였나요?"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
          <Form.Control.Feedback type="invalid">
            금액을 입력해주세요
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Select
            name="expensePayer"
            defaultValue=""
            required
            onChange={handleChangeSelect}
          >
            <option disabled value="">
              누가 결제했나요
            </option>
            <option>김민영</option>
            <option>ww</option>
            {groupMember.groupMember.map((i, index) => (
              <option key={i} value={i}>
                {i}
                
              </option>
              
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            결제자를 선택해주세요
          </Form.Control.Feedback>
        </Form.Group>
        <button type="submit">추가하기</button>
      </Form>
      
    </>
  );
};
export default AddExpenseComponent;
