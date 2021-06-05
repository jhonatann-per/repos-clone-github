import React, { useEffect, useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Header from '../../components/header';
import { TypeUserInfos, TypesUserRepos } from '../../interfaces/fetch';
import {
  Container,
  Containers,
  ContainerLeft,
  ContainerRight,
  ContainerSearchRepositories,
  ContainerButtomMid,
  ContainerRepositoryNav,
  Title,
  SubTitle,
  TitleLink,
  InputSearch,
  ImageProfile,
  ContainerImageProfile,
  ContainerFollow,
  ButtonFollow,
  RepositoryMenuHeader,
  RepositoryNav,
  ButtonMenu,
  ContainerFollowDetails,
  BottomRepositoriesInfos,
  Ball,
  HorizontalLine,
  ButtomMid,
  RepositoriesTotal
} from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const LanguageMap = require('language-map');

const Repositorys: React.FC = () => {
  const [userSelected, setUserSelected] = useState('jhonatann-per');
  const [userInfos, setUserInfos] = useState<TypeUserInfos>();
  const [userRepos, setUserRepos] = useState<TypesUserRepos[]>([]);
  const [isFpllowing, setIsFpllowing] = useState(false);
  const [totalRepositoriesCount, setTotalRepositoriesCount] = useState(7);

  useEffect(() => {
    const fetchUserInfos = async (): Promise<void> => {
      const query = await fetch(`https://api.github.com/users/${userSelected}`);
      const result = await query.json();
      setUserInfos(result);
    };
    fetchUserInfos();
  }, [userSelected]);

  useEffect(() => {
    const fetchUserRepos = async (): Promise<void> => {
      const query = await fetch(
        `https://api.github.com/users/${userSelected}/repos`
      );
      const result = await query.json();
      setUserRepos(result);
      setTotalRepositoriesCount(result.length);
    };
    fetchUserRepos();
  }, [userSelected]);

  const GenerateRepositories = (): JSX.Element[] => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const result = array.map(index => {
      return (
        <div
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <TitleLink color="#58a6ff" href="">
            repository_{index}
          </TitleLink>
          <SubTitle size="15px" style={{ maxWidth: '50%' }}>
            Example of description {index}.
          </SubTitle>
          <BottomRepositoriesInfos>
            <Ball color="#00000000" />
            <SubTitle size="12px">Language</SubTitle>
            <SubTitle size="13px" style={{ marginLeft: '10px' }}>
              update
            </SubTitle>
          </BottomRepositoriesInfos>
          <HorizontalLine />
        </div>
      );
    });
    return result;
  };

  const followersTotal = (): string => {
    if (!isFpllowing) {
      return String(userInfos?.followers ? userInfos?.followers : 0);
    }
    const math = Math.round(
      userInfos?.followers ? userInfos?.followers + 1 : 1
    );
    return String(math);
  };

  return (
    <Container>
      <Header setUserSelected={setUserSelected} userSelected={userSelected} />
      <RepositoryMenuHeader />
      <Containers>
        <ContainerLeft>
          <ContainerImageProfile>
            {userInfos?.avatar_url ? (
              <ImageProfile src={userInfos?.avatar_url} />
            ) : (
              <ImageProfile src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
            )}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Title>{userInfos?.name ? userInfos?.name : 'User Name'}</Title>
              <SubTitle>
                {userInfos?.login ? userInfos?.login : 'User Login'}
              </SubTitle>
            </div>
          </ContainerImageProfile>
          <ContainerFollow>
            <ButtonFollow onClick={() => setIsFpllowing(!isFpllowing)}>
              <SubTitle size="15px" color="#c9d1d9">
                {isFpllowing ? 'Following' : 'Follow'}
              </SubTitle>
            </ButtonFollow>
            <ContainerFollowDetails>
              <SubTitle size="15px" isHover>
                <BsIcons.BsPeopleFill /> <strong>{followersTotal()}</strong>{' '}
                followers
              </SubTitle>
              <SubTitle style={{ margin: '0 5px 0 5px' }}>
                <strong>·</strong>
              </SubTitle>
              <SubTitle size="15px" isHover>
                <strong>
                  {userInfos?.following ? userInfos?.following : '0'}
                </strong>{' '}
                following
              </SubTitle>
            </ContainerFollowDetails>
          </ContainerFollow>
        </ContainerLeft>
        <ContainerRight>
          <ContainerRepositoryNav>
            <RepositoryNav>
              <ButtonMenu>
                <BsIcons.BsBook
                  color="#fff"
                  style={{ fontSize: '18px', marginRight: '10px' }}
                />
                <SubTitle size="15px" color="#f5f5f5">
                  Overview
                </SubTitle>
              </ButtonMenu>
              <ButtonMenu
                isSelected
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <RiIcons.RiGitRepositoryLine
                  color="#fff"
                  style={{ fontSize: '18px', marginRight: '10px' }}
                />
                <SubTitle size="15px" color="#f5f5f5">
                  Repositories
                </SubTitle>
                <RepositoriesTotal>
                  <SubTitle size="13px" color="#8b949e">
                    {totalRepositoriesCount}
                  </SubTitle>
                </RepositoriesTotal>
              </ButtonMenu>
              <ButtonMenu>
                <AiIcons.AiOutlineProject
                  color="#fff"
                  style={{ fontSize: '18px', marginRight: '10px' }}
                />
                <SubTitle size="15px" color="#f5f5f5">
                  Projects
                </SubTitle>
              </ButtonMenu>
              <ButtonMenu>
                <BiIcons.BiCube
                  color="#fff"
                  style={{ fontSize: '18px', marginRight: '10px' }}
                />
                <SubTitle size="15px" color="#f5f5f5">
                  Packages
                </SubTitle>
              </ButtonMenu>
            </RepositoryNav>
          </ContainerRepositoryNav>
          <ContainerSearchRepositories>
            <InputSearch placeholder="Find a repository..." />
            <ContainerButtomMid>
              <ButtomMid>
                Type{' '}
                <IoIcons.IoMdArrowDropdown
                  color="#fff"
                  style={{ fontSize: '18px', margin: '2px 0 0 5px' }}
                />
              </ButtomMid>
              <ButtomMid>
                Language{' '}
                <IoIcons.IoMdArrowDropdown
                  color="#fff"
                  style={{ fontSize: '18px', margin: '2px 0 0 5px' }}
                />
              </ButtomMid>
              <ButtomMid>
                Sort{' '}
                <IoIcons.IoMdArrowDropdown
                  color="#fff"
                  style={{ fontSize: '18px', margin: '2px 0 0 5px' }}
                />
              </ButtomMid>
            </ContainerButtomMid>
          </ContainerSearchRepositories>
          <div
            style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <HorizontalLine />
          </div>

          {userRepos.length > 0 && !userInfos?.message
            ? userRepos.map(item => {
                return (
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <TitleLink color="#58a6ff" href={item.clone_url}>
                      {item.name}
                    </TitleLink>
                    <SubTitle size="15px" style={{ maxWidth: '50%' }}>
                      {item.description}
                    </SubTitle>
                    <BottomRepositoriesInfos>
                      <Ball
                        color={
                          item.language && LanguageMap[item.language].color
                            ? LanguageMap[item.language].color
                            : '#000'
                        }
                      />
                      <SubTitle size="12px">
                        {item.language
                          ? item.language
                          : 'Language of undefined.'}
                      </SubTitle>
                      <SubTitle size="13px" style={{ marginLeft: '10px' }}>
                        Updated At
                      </SubTitle>
                    </BottomRepositoriesInfos>
                    <HorizontalLine />
                  </div>
                );
              })
            : GenerateRepositories()}
        </ContainerRight>
      </Containers>
    </Container>
  );
};

export default Repositorys;
