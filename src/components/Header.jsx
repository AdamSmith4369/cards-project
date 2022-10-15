import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reactLogo from "../assets/react.svg";
const Header = () => {
  return (
    <Container className="text-center mt-4">
      <Image fluid src={reactLogo} width="250px"></Image>
    </Container>
  );
};

export default Header;
