import styled from 'styled-components';

import { breakpoints } from '../styles/breakpoints';

export const PrefectureContainer = styled.div`
  margin-top: 20px;
`;

export const ListTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  &:after {
    content: "";
    clear: both;
    display: block;
  }
`;

export const ListItem = styled.li`
  display: block;
  float: left;
  height: 25px;
  list-style-type: none;
  background: #0cc;
  text-align: left;
  width: 100%;

  @media ${breakpoints.mobileS} {
    width: 25%;
  }
  

`;
