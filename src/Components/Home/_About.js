import React from 'react'
import styled from 'styled-components'
import aboutImg from '../../assets/about.jpg'
import RoundedLink from './_RoundedLink'

const About = () => {
  return (
    <Section>
      <h2>About</h2>
      <AboutImage src={aboutImg} />
      <RoundedLink to='/about'>
        More About Mark
      </RoundedLink>
    </Section>
  )
}

export default About

const Section = styled.section`
  padding: 30px;
`

const AboutImage = styled.img`
  display: block;
  width: 900px;
  margin: 0 auto;
`
