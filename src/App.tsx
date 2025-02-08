import { Anchor, Box, Container } from '@mantine/core';
import './App.css'
import MobileHeader from './components/MobileHeader';
// import '@mantine/core/styles.css';
import MobileHero from './components/MobileHero';

function App() {
  return (
    <>
      <Box component="header" pb="sm">
        <MobileHeader />
      </Box>
      <Box component="main" pb="sm">
        <MobileHero />
      </Box>
      <Container bg="white" fluid>
        <Anchor c="black" href="https://squareup.com/gift/94WAGV6W0MAZ3/order">Class Cards</Anchor>
      </Container>
    </>
  )
}

export default App
