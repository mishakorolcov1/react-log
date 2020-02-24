import styled from "styled-components";
import { Link } from "react-router-dom";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const Panel = styled.div`
  background-color: #2a2e35;
  padding: 10px 30px 30px 30px;
  border-radius: 6px;
  box-shadow: 4px 0 10px -3px #010101;
  color: #fff;
  width: 50vw;
`;



export const Button = styled.button`
  background: #f96a1f;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  border-radius: 6px;
  font-weight: 800;
`;

export const Nav = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  justify-content: center;  
  width: 15rem;
  box-shadow: 4px 0 10px -3px #010101;
  background-color: #2a2e35;
  align-items: center;

  
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  text-decoration: none;
  margin: 0 20px;
`;
