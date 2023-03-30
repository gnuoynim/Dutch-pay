import BaseLayout from "@/layout/base-layout";
import { Button, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { setGroupMember } from "@/store/reducers/groupMemberReducer";
import Router,{ useRouter } from "next/router";


const AddMember = () => {
  const groupMember = useSelector((state: RootState) => state.groupMember);
  const groupName = useSelector((state: RootState) => state.groupName);
  const dispatch = useAppDispatch();
  const [state, setState] = useState([""]);
  const Router = useRouter();
  const [formSubmit, setFormSubmit] = useState(false);
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormSubmit(true);
    dispatch(setGroupMember(state));
    Router.push("/expense")
  };

  return (
    <BaseLayout>
      <Container>
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <h2>{groupName.groupName} 멤버들 이름은?</h2>
          </Row>
          <Row>
            <TagsInput
              value={state}
              onChange={setState}
              name="group"
              placeHolder="친구이름을 입력하세요"
            />
            {state.length === 0 && <span>그룹명을 만들어주세요</span>}
          </Row>
          <Row>
            <Button type="submit" >저장</Button>
          </Row>
        </Form>
      </Container>
    </BaseLayout>
  );
};
export default AddMember;
