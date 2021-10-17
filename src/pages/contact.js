import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

// Assets
import linkedin from '../images/LinkedIn-Logos/LI-In-Bug.png'
import github from '../images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png'
import stackoverflow from '../images/Stacks-Icons/LogoGlyph.svg'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Content>
      <Card>
        <header>
          <span role="img" aria-label="Hand wave">
            👋
          </span>
        </header>

        <ContactBody>
          <p>I can best be reached via email or Linkedin.</p>
        </ContactBody>

        <footer>
          <IconContainer>
            <a href="https://github.com/danlin604">
              <img src={github} alt="GitHub" height="32" width="32" />
            </a>
          </IconContainer>
          <IconContainer>
            <a href="https://stackoverflow.com/users/6713596/dan?tab=profile">
              <img
                src={stackoverflow}
                alt="Stack Overflow"
                height="32"
                width="32"
              />
            </a>
          </IconContainer>
          <IconContainer>
            <a href="https://www.linkedin.com/in/dan-yhl">
              <img src={linkedin} alt="Linkedin" height="32" width="32" />
            </a>
          </IconContainer>
        </footer>
      </Card>
    </Content>
  </Layout>
)

const Content = styled.section`
  margin: 16px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.article`
  padding: 16px;
  width: 320px;
  height: 450px;

  border: 1px solid #dadce0;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 450px) {
    width: 80%;
  }

  header {
    margin: 0;
    font-size: 64px;
  }
`

const ContactBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: row;
  margin: 1em;
  margin-top: 64px;
`

const IconContainer = styled.span`
  margin: 0.5em;
`

export default ContactPage
