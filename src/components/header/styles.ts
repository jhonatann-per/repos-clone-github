import styled from 'styled-components';

const Containers = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled(Containers)`
  width: 100vw;
  display: flex;
  padding: 16px;
  background-color: #161b22;
  justify-content: center;
`;

export const AllContainers = styled(Containers)`
  width: 1280px;
  max-width: 1280px;
  justify-content: space-between;
`;

export const ContainerLeft = styled(Containers)``;
export const ContainerRight = styled(Containers)``;

interface PropsButtonHeader {
  withBorder?: boolean;
  isSignUp?: boolean;
}

export const ButtonHeader = styled.button<PropsButtonHeader>`
  font-size: 16px;
  margin-left: 15px;
  color: #f5f5f5;
  background-color: transparent;
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  outline-style: none;
  padding: ${props => (props.withBorder ? '6px' : '0')};
  border-radius: ${props => (props.withBorder ? '5px' : '0')};
  border: ${props => (props.withBorder ? '1px solid #c9d1d959' : '0')};
  ${props => (props.isSignUp ? '' : '@media(max-width: 1011px){display:none}')}
  transition: 0.5s;
  :hover {
    opacity: 0.6;
  }
`;

export const SearchContainer = styled(Containers)`
  position: relative;
`;

export const SearchIcon = styled.span`
  font-size: 10px;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  padding: 3px 8px 3px 8px;
  background-color: #0d1117;
  border: 1px solid #c9d1d939;
`;

export const SearchForm = styled.form``;

export const InputSearch = styled.input`
  font-size: 14px;
  width: 250px;
  font-family: inherit;
  background-color: #0d1117;
  border-style: none;
  color: #c9d1d9;
  border: 1px solid #c9d1d919;
  border-radius: 5px;
  padding: 9px 0 9px 15px;
  outline: none;
  ::placeholder {
    color: #c9d1d9;
  }
  :focus {
    border-bottom: 2px solid #c9d1d939;
    border-radius: 5px 5px 0 0;
    z-index: 1;
  }
`;
