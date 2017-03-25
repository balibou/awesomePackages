import React from 'react'
import { Container, Hero, HeroBody, Title } from 're-bulma'

const NotFound = () => (
  <div className='NotFound'>
    <Hero color='isPrimary'>
      <HeroBody>
        <Container hasTextCentered>
          <Title size='is4'>
            <strong>Page not found</strong>
          </Title>
        </Container>
      </HeroBody>
    </Hero>
  </div>
)

export default NotFound
