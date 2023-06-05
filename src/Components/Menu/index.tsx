import { MenuLink } from '../MenuLink';
import * as Styled from './styles';
import { v4 as uuidv4 } from 'uuid';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '../Button';
import { useRouter } from 'next/navigation';
import { Heading } from '../Heading';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export type menuLink = {
  name: string;
  to: string;
  target?: '_self' | '_blank';
};
export type MenuProps = {
  menuLink?: menuLink[];
};

export const Menu = ({ menuLink = [] }: MenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickMenuIcon = () => {
    setOpenMenu((opened) => !opened);
  };
  const handleClickMenuLink = () => {
    setOpenMenu(false);
  };
  const handleCloseMenuNav = () => {
    setOpenMenu(false);
  };
  const handleLogoClick = () => {
    router.push('/');
  };
  return (
    <Styled.Wrapper isFixed={isFixed}>
      <Heading
        as="h1"
        isButton={true}
        onClick={handleLogoClick}
        color="#e65540"
      >
        Quando?
      </Heading>
      <Styled.ContainerSmallWindow>
        {session ? (
          <>
            <Button
              onClick={() => {
                signOut();
              }}
            >
              Deslogar
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              signIn();
            }}
            borderColor="#e65540"
          >
            Login
          </Button>
        )}

        <Styled.Hamburguer onClick={handleClickMenuIcon}>
          <MenuIcon fontSize="inherit" />
        </Styled.Hamburguer>

        <Styled.MenuNav clicked={openMenu}>
          <Styled.CloseMenuSmallWindow onClick={handleCloseMenuNav}>
            <CloseIcon fontSize="inherit" />
          </Styled.CloseMenuSmallWindow>
          {menuLink &&
            menuLink.map((link) => (
              <MenuLink
                href={link.to}
                key={uuidv4()}
                onClick={handleClickMenuLink}
                target={link.target && link.target}
              >
                {link.name}
              </MenuLink>
            ))}
        </Styled.MenuNav>
      </Styled.ContainerSmallWindow>
    </Styled.Wrapper>
  );
};
