import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #1C3879;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
`
const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #EAE3D2;
  font-weight: 600;
  &:hover{
    border-bottom: 2px solid #EAE3D2;
  }
`

export default function Menu () {
  return (
    <Nav>
      <LinkStyled to="/">
        Home
      </LinkStyled>
      <LinkStyled to="/create">
        Add Book
      </LinkStyled>
    </Nav>
  )
}
