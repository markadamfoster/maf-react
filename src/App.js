import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import ScrollToTop from './Components/helpers/ScrollToTop'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer'

const App = () => (
  <Router>
    <ScrollToTop>
      <Wrapper>
        <Nav />
        <Footer />
      </Wrapper>
    </ScrollToTop>
  </Router>
)

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
