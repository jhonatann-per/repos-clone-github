/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

import { PropsHeader } from '../../interfaces/header';

import {
  ButtonHeader,
  Container,
  AllContainers,
  SearchForm,
  ContainerLeft,
  ContainerRight,
  InputSearch,
  SearchContainer,
  SearchIcon
} from './styles';

const Header: React.FC<PropsHeader> = (props: PropsHeader) => {
  const [value, setValue] = useState('');

  const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.setUserSelected(value);
  };

  return (
    <Container>
      <AllContainers>
        <ContainerLeft>
          <AiIcons.AiOutlineGithub
            color="#f5f5f5"
            style={{ fontSize: '36px', cursor: 'pointer' }}
          />
          <ButtonHeader>
            Why GitHub?
            <IoIcons.IoIosArrowDown
              color="#c9d1d939"
              style={{ fontSize: '18px' }}
            />{' '}
          </ButtonHeader>
          <ButtonHeader>Team</ButtonHeader>
          <ButtonHeader>Enterprise</ButtonHeader>
          <ButtonHeader>
            Explore{' '}
            <IoIcons.IoIosArrowDown
              color="#c9d1d939"
              style={{ fontSize: '18px' }}
            />
          </ButtonHeader>
          <ButtonHeader>Marketplace</ButtonHeader>
          <ButtonHeader>
            Pricing{' '}
            <IoIcons.IoIosArrowDown
              color="#c9d1d939"
              style={{ fontSize: '18px' }}
            />
          </ButtonHeader>
        </ContainerLeft>

        <ContainerRight>
          <SearchContainer>
            <SearchForm onSubmit={e => handleForm(e)}>
              <InputSearch
                placeholder="Search a profile..."
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </SearchForm>
            <SearchIcon>/</SearchIcon>
          </SearchContainer>
          <ButtonHeader>Sign in</ButtonHeader>
          <ButtonHeader withBorder isSignUp>
            Sign up
          </ButtonHeader>
        </ContainerRight>
      </AllContainers>
    </Container>
  );
};

export default Header;
