import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import CalculateInterface from "@/interface/calculate-interface";
 

export const calculateMinimun = (expenses, groupMember, amountPerPerson) => {
  const minTransactions = [] as any;

  if (amountPerPerson === 0) {
    return minTransactions;
  }

  const membersToPay = {} as any;
  groupMember.groupMember.forEach((member : number) => {
    membersToPay[member] = amountPerPerson;
  });

  expenses.forEach(({ payer, amount } ) => {
    membersToPay[payer] -= amount;
  });

  const sotredMembersToPay = Object.keys(membersToPay)
    .map((member) => ({ member: member, amount: membersToPay[member] }))
    .sort((a, b) => a.amount - b.amount);

  let left = 0;
  let right = sotredMembersToPay.length - 1;

  while (left < right) {
    while (left < right && sotredMembersToPay[left].amount === 0) {
      left++;
    }
    while (left < right && sotredMembersToPay[right].amount === 0) {
      right--;
    }
    const toRecive = sotredMembersToPay[left];
    const toSend = sotredMembersToPay[right];
    const amountToRecevie = Math.abs(toRecive.amount);
    const amountToSend = Math.abs(toSend.amount);

    if (amountToSend > amountToRecevie) {
      minTransactions.push({
        receiver: toRecive.member,
        payer: toSend.member,
        amount: amountToRecevie,
      });
      toRecive.amount = 0;
      toSend.amount -= amountToRecevie;
      left++;
    } else {
      minTransactions.push({
        receiver: toRecive.member,
        sender: toSend.member,
        amount: amountToSend,
      });
      toSend.amount = 0;
      toRecive.amount += amountToSend;
      right--;
    }
  }

  return minTransactions;
};

const SettlementComponent = () => {
  const expenses = useSelector((state: RootState) => state.expenses);
  const groupMember = useSelector((state: RootState) => state.groupMember);
  const members = ["a", "b", "c", "d"];
  const totalExpenseAmount = expenses.reduce((prevAmount, curExpense) => prevAmount + curExpense.amount, 0);
  const groupMembersCount = groupMember.groupMember.length;
  const splitAmount = totalExpenseAmount / groupMembersCount;
  const minimumTransaction = calculateMinimun(expenses, groupMember, splitAmount);
  return (
    <div>
      <h6>정산은 어떻게?</h6>
      {totalExpenseAmount > 0 && groupMembersCount > 0 && (
        <>
          <div>
            <span>
              {groupMembersCount}명이서, 총{totalExpenseAmount}원 지출
            </span><br/>
            <span>한사람당 {splitAmount}</span>
          </div>
          <ul>
            {minimumTransaction.map(({receiver , sender, amount } : CalculateInterface , index: number)   => (
              <li key={index}>
                <span>
                  {sender}가{receiver}에게 {amount}원 보내기
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SettlementComponent;
