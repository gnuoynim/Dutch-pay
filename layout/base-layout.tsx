import { Container } from "react-bootstrap";
import styled from "styled-components";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mobile">
      <Container>{children}</Container>
    </div>
  );
};

export default BaseLayout;
