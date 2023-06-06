import { FormEvent, useState } from 'react';
import { Heading } from '../Heading';
import { Input } from '../Input';
import * as Styled from './styles';
import { Roboto } from 'next/font/google';
import { Button } from '../Button';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from 'next-auth/react';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });
export const LoginForm = () => {
  const [loginName, setLoginName] = useState<string>('');

  return (
    <Styled.Wrapper>
      <Styled.Form id="Login-Form">
        <Heading as="h1" fontSize={'22px'} margin="0px 0px 15px 0px">
          Welcome to CodeLeap network!
        </Heading>
        <label htmlFor="Input-Name" className={roboto.className}>
          Please enter your username
        </label>
        <Input
          id={'Input-Name'}
          placeholder="Luis Martins"
          value={loginName}
          onChange={(e) => {
            setLoginName(e.target.value);
          }}
          width={'100%'}
          height={'32px'}
          className={roboto.className}
        ></Input>
        <Styled.ButtonContainer>
          <Button
            reverse={true}
            width={'111px'}
            height={'32px'}
            margin={'15px 0px'}
            disabled={loginName === '' ? true : false}
            onClick={(e: FormEvent) => {
              e.preventDefault();
              if (loginName === '') return;
              signIn('credentials', {
                username: loginName,
                redirect: true,
                callbackUrl: '/',
              });
            }}
          >
            ENTER
          </Button>
        </Styled.ButtonContainer>
        <Styled.Division>
          <Styled.Divisor />
          <Styled.Or>OR</Styled.Or>
          <Styled.Divisor />
        </Styled.Division>
        <Styled.AnotherButtons>
          <Button
            reverse={true}
            margin={'15px 0px '}
            height={'40px'}
            width={'100%'}
            onClick={(e: FormEvent) => {
              e.preventDefault();
              signIn('google');
            }}
          >
            <Styled.Spacing>
              <GoogleIcon fontSize="inherit" />
            </Styled.Spacing>
            Continue with Google
          </Button>
          <Button
            reverse={true}
            margin={'0px'}
            height={'40px'}
            width={'100%'}
            onClick={(e: FormEvent) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            <Styled.Spacing>
              <GitHubIcon fontSize="inherit" />
            </Styled.Spacing>
            Continue with Github
          </Button>
        </Styled.AnotherButtons>
      </Styled.Form>
    </Styled.Wrapper>
  );
};
