import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Containers = styled.div`
  height: 100%;
  width: 1280px;
  display: flex;
  position: relative;
  @media (max-width: 1280px) {
    width: 95%;
    max-width: 100%;
  }
  @media (max-width: 771px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0 20px 0;
  background-color: #8b949e39;
  z-index: -1;
`;

export const ContainerLeft = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -25px;
  @media (max-width: 771px) {
    top: 0;
    width: 100%;
    padding: 0 30px 0 15px;
  }
`;

export const ContainerRight = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -55px;
  @media (max-width: 771px) {
    top: 0;
    width: 100%;
    padding: 0 30px 0 15px;
  }
`;

export const ContainerImageProfile = styled.div`
  @media (max-width: 771px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
  width: 90%;
  border: 1px solid #8b949e;
  @media (max-width: 771px) {
    width: 20%;
    margin: 0 20px 20px 0;
  }
`;

interface PropsTitles {
  size?: string;
  color?: string;
}

export const Title = styled.span`
  font-size: 25px;
  font-weight: 500;
`;

interface PropsSubTitle extends PropsTitles {
  isHover?: boolean;
}

export const SubTitle = styled.span<PropsSubTitle>`
  font-size: ${props => (props.size ? props.size : '20px')};
  font-weight: 200;
  color: ${props => (props.color ? props.color : '#8b949e')};
  ${props =>
    props.isHover ? ':hover { color: #58a6ff; cursor: pointer }' : ''}
`;

export const TitleLink = styled.a<PropsTitles>`
  color: ${props => (props.color ? props.color : '')};
  width: max-content;
  font-size: 25px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const RepositoriesTotal = styled.div`
  width: 28px;
  height: 22px;
  display: flex;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 40%;
  background-color: #8b949e29;
`;

export const ContainerFollow = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 771px) {
    flex-direction: column-reverse;
  }
`;

export const ButtonFollow = styled.button`
  width: 90%;
  border: 1px solid #8b949e39;
  margin: 10px 0 10px 0;
  padding: 6px 16px;
  outline-style: none;
  border-radius: 5px;
  background-color: #8b949e29;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    border: 1px solid #8b949e;
    background-color: #8b949e49;
  }
  @media (max-width: 771px) {
    width: 100%;
  }
`;

export const RepositoryMenuHeader = styled.div`
  width: 100%;
  display: flex;
  margin-top: 75px;
  justify-content: center;
  border-bottom: 1px solid #8b949e39;
  @media (max-width: 771px) {
    display: none;
  }
`;

export const ContainerRepositoryNav = styled.div`
  display: flex;
  @media (max-width: 771px) {
    border-bottom: 2px solid #8b949e99;
  }
`;

export const RepositoryNav = styled.div`
  display: flex;
`;

interface PropsButtonMenu {
  isSelected?: boolean;
}

export const ButtonMenu = styled.button<PropsButtonMenu>`
  padding: 15px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  outline-style: none;
  opacity: ${props => (props.isSelected ? '1' : '0.5')};
  border-bottom: ${props =>
    props.isSelected ? '2px solid #f9826c' : '2px solid #00000000'};
  :hover {
    opacity: 1;
    border-bottom: 2px solid #8b949e99;
    border-bottom: ${props =>
      props.isSelected ? '2px solid #f9826c' : '2px solid #8b949e99'};
  }
`;

export const ContainerFollowDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerSearchRepositories = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1012px) {
    display: block;
  }
`;

export const ContainerButtomMid = styled.div`
  display: flex;
  @media (max-width: 1012px) {
    margin-top: 5px;
  }
`;

export const ButtomMid = styled.button`
  border: 1px solid #8b949e39;
  padding: 6px 16px 6px 16px;
  flex-direction: row;
  border-radius: 5px;
  margin-left: 5px;
  color: #c9d1d9;
  background-color: #8b949e29;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  :hover {
    border: 1px solid #8b949e;
    background-color: #8b949e49;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  background-color: transparent;
  border-style: none;
  color: #c9d1d9;
  border: 1px solid #c9d1d919;
  border-radius: 5px;
  padding: 5px 0 5px 15px;
  margin-right: 10px;
  outline: none;
  :focus {
    border: 1px solid #58a6ff;
    box-shadow: 0 0 0 3px rgba(17, 88, 199, 0.4);
  }
`;

export const BottomRepositoriesInfos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const Ball = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  background-color: ${props => props.color};
  border: 1px solid #8b949e99;
  border-radius: 50%;
`;
