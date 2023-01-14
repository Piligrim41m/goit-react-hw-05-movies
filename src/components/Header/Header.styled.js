import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  mainGradient,
  mainHoverEfect,
  mainTextColor,
  secondTextColor,
} from 'utilities/variables/css';

export const HeaderWrapper = styled.header`
  background-image: ${mainGradient};
  padding: 10px 0 10px 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${secondTextColor};

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1440px) {
    font-size: 45px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

export const CustomLink = styled(NavLink)`
  font-size: 15px;
  font-weight: 700;
  color: ${mainTextColor};
  transition: color ${mainHoverEfect};

  &.active {
    text-decoration: underline;
  }

  :hover {
    color: ${secondTextColor};
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
