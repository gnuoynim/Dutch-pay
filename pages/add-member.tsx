import BaseLayout from "@/layout/base-layout";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import dynamic from "next/dynamic";

const AddMember = () => {
  const TagInputsComponent = dynamic(
    async () => await import("@/components/tag-inputs-component"),
    {
      ssr: false,
    }
  );
  const groupName = useSelector((state: RootState) => state.groupName);

  return (
    <BaseLayout>
      <Row>
        <h2 className="title">
          더치페이할
          <span className="memberName">{`'${groupName.groupName}'`}</span>의
          멤버들을 작성해주세요.
        </h2>
        <TagInputsComponent />
      </Row>
    </BaseLayout>
  );
};

export default AddMember;
