import propTypes from 'prop-types';
import Container from 'components/Container';
import {
  HeaderWrapper,
  LogoWrapper,
  Title,
  NavigationList,
  Item,
  CustomLink,
} from './Header.styled';

function Header({ title }) {
  return (
    <HeaderWrapper>
      <Container>
        <LogoWrapper>
          <Title>{title}</Title>
        </LogoWrapper>
        <NavigationList>
          <Item>
            <CustomLink to="/">Home</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/movies">Movies</CustomLink>
          </Item>
        </NavigationList>
      </Container>
    </HeaderWrapper>
  );
}

Header.prototype = {
  title: propTypes.string.isRequired,
};

export default Header;
