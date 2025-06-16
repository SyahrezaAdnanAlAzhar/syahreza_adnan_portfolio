import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';

const navLinks = [
  { title: 'About Me', to: '#about' },
  { title: 'Education', to: '#education' },
  { title: 'Skills', to: '#skills' },
  { title: 'Projects', to: '#projects' },
  { title: 'Experiences', to: '#experiences' },
  { title: 'Achievements', to: '#achievements' },
];

const NavWrapper = styled.nav`
  background-color: #272822; 
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const Logo = styled.a`
  font-family: "Audiowide", sans-serif; 
  font-size: 1.5rem;
  font-weight: bold;
  color: #66D9EF; 
  cursor: pointer;
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #F8F8F2; 
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #A6E22E;
  }
`;

const Navbar = () => {
  return (
    <Headroom>
      <NavWrapper>
        <Logo href="#">Syahreza Adnan</Logo>
        <NavLinksContainer>
          {navLinks.map((link) => (
            <NavLink key={link.title} href={link.to}>
              {link.title}
            </NavLink>
          ))}
        </NavLinksContainer>
      </NavWrapper>
    </Headroom>
  );
};

export default Navbar;