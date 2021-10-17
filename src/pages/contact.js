import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

// Assets
import linkedin from '../images/LinkedIn/logo.svg'
import github from '../images/GitHub/logo.svg'
import stackoverflow from '../images/StackOverflow/logo.svg'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Content>
      <Card>
        <header>
          <span role="img" aria-label="Technologist">
            🧑‍💻
          </span>
        </header>

        <ContactBody>
          <p>Feel free to reach out by email or through LinkedIn.</p>
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
  flex: 1;
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
  margin-top: 64px;
`

const IconContainer = styled.span`
  margin: 0.5em;
`

export default ContactPage
