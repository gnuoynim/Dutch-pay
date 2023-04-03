import { Button, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { setGroupName } from "@/store/reducers/groupNameReducer";
import { useRouter } from 'next/navigation';

const OverlayFormComponent = () => {
  const router = useRouter();
  const groupName = useSelector((state: RootState) => state.groupName);
  const dispatch = useAppDispatch();
  const [validated, setValidated] = useState(false);
  const [group, setGroup] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as any;
    if (form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      dispatch(setGroupName(group));
      router.push("/add-member");
    }
    setValidated(true);
  };

  const handleClickGroup = () => {
    dispatch(setGroupName(group));
  };

  return (
    <div className="overlayForm">
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Row>
          <h2>더치페이할 그룹명은?</h2>
        </Row>
        <Row>
          <Form.Group controlId="validationGroupName">
            <Form.Control
              type="text"
              required
              placeholder="ex) 제주도여행"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              그룹이름을 입력해주세요
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Button type="submit" onClick={handleClickGroup}>
            저장
          </Button>
        </Row>
      </Form>
    </div>
  );
};
export default OverlayFormComponent;
