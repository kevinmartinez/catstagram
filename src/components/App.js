import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
// import Image from './Image'
import AddCat from './AddCat'

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <AddCat />
        {/* <section>
          <header>Scroll through cats</header>
          <Image />
        </section> */}
      </Container>
    )
  }
}

export default App
