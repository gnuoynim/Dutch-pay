import { Form, Row } from "react-bootstrap";
import { InputTags } from "react-bootstrap-tagsinput";
import { useState } from "react";
import { RootState, useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { setGroupMember } from "@/store/reducers/groupMemberReducer";

const TagInputsComponent = () => {
  const [state, setState] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const Router = useRouter();
  const [validated, setValidated] = useState(true);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValidated(true);
  };
  const handleClickEnroll = () => {
    if (state.length === 0) {
      setValidated(false);
      document.getElementById("inputBox")?.focus();
    } else {
      setValidated(true);
      Router.push("/expense");
      dispatch(setGroupMember(state));
    }
  };
  return (
    <>
      <Form
        noValidate
        validated={validated}
        onChange={handleSubmit}
        className="inputForm"
      >
        <Row className={validated === false ? "inputNameTags" : ""}>
          <InputTags
            id="inputBox"
            placeholder="멤버들의 이름을 입력해주세요"
            values={state}
            onTags={(value) => setState(value.values)}
          />
        </Row>
        <Row>
          <ul className="member">
            {state.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        </Row>
        <Row>
          <button
            type="button"
            data-testid="button-clearAll"
            onClick={handleClickEnroll}
          >
            저장
          </button>
        </Row>
      </Form>
    </>
  );
};

export default TagInputsComponent;
