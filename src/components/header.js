import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle, menuLinks }) => (
  <StyledHeader>
    <StyledNav>
      <StyledUl>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `.5rem`,
            }}
          >
            <Link
              style={{
                color: `palevioletred`,
                textDecoration: `none`,
              }}
              activeStyle={{ textDecoration: "underline" }}
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </StyledUl>
    </StyledNav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.5rem;
  flex-wrap: wrap;
`

const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: row;
`

const StyledUl = styled.ul`
  flex: 1;
  width: 100%;
  display: flex;
  padding: 0;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export default Header
