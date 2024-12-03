import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  & > a {
    color: #fefefe;
    text-decoration: none;
  }
  a,
  a:visited {
    color: #fefefe;
  }
  h1 {
    margin: 1rem 0;
  }
  span {
    padding: 0 1rem;
  }
  nav {
    ul {
      display: flex;
      list-style-type: none;
    }
    li {
      padding-left: 1.5rem;
      &:first-child {
        padding-left: 0;
      }
    }
    a {
      color: #fefefe;
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;
      &:hover {
        color: lightgrey;
      }
      &.active {
        color: #009900;
        font-style: italic;
        &:hover {
          color: #009900;
        }
      }
    }
  }
`;

const Header = () => {
  // # A <NavLink> is a special kind of <Link> that knows whether or not it is "active". This is useful when building a navbar where you'd like to show which page is currently selected. By default, a class of "active" is added to a <NavLink> component when it is active.
  // So class "active" is automatically added by router. All you have to do is provide the css for it. 
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>React Router Conditional Rendering Demo</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;