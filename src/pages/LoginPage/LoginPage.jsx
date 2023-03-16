import { HeroImage } from 'components/HeroImage/HeroImage';
import { Container, Button } from './LoginPage.styled';
import { UserAuth } from 'context/AuthContext';

const LoginPage = () => {
  const { logIn } = UserAuth();

  return (
    <Container>
      <HeroImage />
      <Button type="button" onClick={logIn}>
        Log in with Google
      </Button>
    </Container>
  );
};

export default LoginPage;
