import { Container } from "react-bootstrap";


const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default BaseLayout;
