import { ChangeEvent, useState } from "react";
import { Form } from "react-bootstrap";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { setState } from "@/store/reducers/expensesReducer";

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
  const [isDescValid, setIsDescValid] = useState(false);
  const [isPayerValid, setIsPayerValid] = useState(false);
  const [isAmoutValid, setIsAmountValid] = useState(false);

  const checkFormValidity = () => {
    const descValid = desc.length > 0;
    const payerValid = payer !== null;
    const amountValid = amount > 0;

    setIsDescValid(descValid);
    setIsPayerValid(payerValid);
    setIsAmountValid(amountValid);
    return true || false;
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (checkFormValidity()) {
      setValidated(true);
      dispatch(
        setState([
          ...expenses,
          { date: date, desc: desc, amount: amount, payer: payer },
        ])
      );
    }else{
      
    }
  };
  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPayer(event.target.value as any);
  };
  console.log(expenses);
  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <h1>비용을 추가하기</h1>

        <Form.Group>
          <Form.Control
            type="date"
            name="expenseDate"
            placeholder="결제한 날짜를 선택해 주세요"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            날짜를 선택해주세요
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            required
            name="expenseDescription"
            placeholder="비용에 대해 설명해주세요"
            isValid={isDescValid}
            isInvalid={!isDescValid && validated}
            value={desc}
            onChange={({ target }) => setDesc(target.value)}
          />
          <Form.Control.Feedback type="invalid" data-valid={isDescValid}>
            내용을 입력해주세요
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            required
            name="expenseAmount"
            placeholder="비용은 얼마였나요?"
            isValid={isAmoutValid}
            isInvalid={!isAmoutValid && validated}
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
          <Form.Control.Feedback type="invalid" data-valid={isAmoutValid}>
            금액을 입력해주세요
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Select
            name="expensePayer"
            defaultValue=""
            required
            onChange={handleChangeSelect}
            isValid={isPayerValid}
            isInvalid={!isPayerValid && validated}
          >
            <option disabled value="">
              누가 결제했나요
            </option>
            <option>김민영</option>
            <option>홍길동</option>
            {groupMember.groupMember.map((i, index) => (
              <option key={index} value={i}>
                {i}강아지
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid" data-valid={isPayerValid}>
            결제자를 선택해주세요
          </Form.Control.Feedback>
        </Form.Group>

        <button type="submit">추가하기</button>
      </Form>
    </>
  );
};
export default AddExpenseComponent;
