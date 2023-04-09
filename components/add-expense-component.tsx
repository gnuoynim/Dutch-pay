import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { setState } from "@/store/reducers/expensesReducer";
import ExpenseTableComponent from "./expense-table-component";

const AddExpenseComponent = () => {
  const groupMember = useSelector((state: RootState) => state.groupMember);
  const expenses = useSelector((state: RootState) => state.expenses);
  const dispatch = useAppDispatch();
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [payer, setPayer] = useState<string>("");
  const [validated, setValidated] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isDescValid, setIsDescValid] = useState(false);
  const [isPayerValid, setIsPayerValid] = useState(false);
  const [isAmoutValid, setIsAmountValid] = useState(false);

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPayer(event.target.value as string);
  };

  const checkFormValidity = () => {
    const dateValid = date.length > 0;
    const descValid = desc.length > 0;
    const payerValid = payer.length >0 ;
    const amountValid = amount > 0;

    setIsDateValid(dateValid);
    setIsDescValid(descValid);
    setIsPayerValid(payerValid);
    setIsAmountValid(amountValid);
    return true || false;

  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event?.currentTarget;
    if (!form.checkValidity() === checkFormValidity()) {
      setValidated(true);
     console.log("44")
    } else {
      console.log("55")
      dispatch(
        setState([
          ...expenses,
          {
            date: date,
            desc: desc,
            amount: amount,
            payer: payer,
            validated: true,
          },
        ])
      );
    }

  };

  const handleClickAdd = () => {};
  return (
    <>
      <div className="addExpenseForm col">
        <Form noValidate onSubmit={handleSubmit}>
          <h2>비용을 추가하기</h2>
          <Form.Group>
            <Form.Control
              type="date"
              name="expenseDate"
              placeholder="결제한 날짜를 선택해 주세요"
              isValid={isDateValid}
              isInvalid={!isDateValid && validated}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Control.Feedback type="invalid" data-valid={isDateValid}>
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
              onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
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
              {groupMember.groupMember.map((i, index) => (
                <option key={index} value={i}>
                  {i}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid" data-valid={isPayerValid}>
              결제자를 선택해주세요
            </Form.Control.Feedback>
          </Form.Group>
          <button type="submit" onClick={handleClickAdd}>
            추가하기
          </button>
        </Form>
      </div>
      <ExpenseTableComponent />
    </>
  );
};
export default AddExpenseComponent;
