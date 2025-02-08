import { Box, Button, Card, Center, Stack, Text, Title, useMantineTheme, VisuallyHidden } from '@mantine/core';
import './App.css'
import MobileHeader from './components/MobileHeader';
// import '@mantine/core/styles.css';
// import MobileHero from './components/MobileHero';
import { IconExternalLink } from '@tabler/icons-react';

function App() {
  const theme = useMantineTheme();

  return (
    <>
      <VisuallyHidden>Aladun Dance Company</VisuallyHidden>
      <Box component="header" pb="sm">
        <MobileHeader />
      </Box>
      <Card withBorder>
        <Stack>
          <Card.Section h={160} bg={theme.colors['ald-orange'][7]}>
            <Center style={{ height: "100%" }}>
              <Title c={"white"} order={1}>Aládùn</Title>
            </Center>
          </Card.Section>
          <Text c="white">Click below to join the community!</Text>
          <Button
            size="md"
            bg={theme.colors['ald-green'][7]}
            component="a"
            c="white"
            href="https://squareup.com/gift/94WAGV6W0MAZ3/order"
            rightSection={<IconExternalLink />}
          >
            Class Cards
          </Button>
        </Stack>
      </Card>
    </>
  );

  // return (
  //   <>
  //     <VisuallyHidden>Aladun Dance Company</VisuallyHidden>
  //     <Box component="header" pb="sm">
  //       <MobileHeader />
  //     </Box>
  //     <Box component="main" pb="sm">
  //       <MobileHero />
  //     </Box>
  //     <Group bg="white" p="xs">
  //       {/* <Anchor component="button" c="black" href="https://squareup.com/gift/94WAGV6W0MAZ3/order">Class Cards</Anchor> */}
  //       <Button
  //         bg={theme.colors['ald-green'][7]}
  //         component="a"
  //         c="white"
  //         href="https://squareup.com/gift/94WAGV6W0MAZ3/order"
  //         rightSection={<IconExternalLink />}
  //       >
  //         Class Cards
  //       </Button>
  //     </Group>
  //   </>
  // )
}

export default App

// TODO:
// add reviews
// Jose Ramirez
    // Jules is very talented and dedicated to his craft. He is a great instructor who leads with confidence, patience, and passion. He will help you reach your goals regardless of how big or small they may be. If you simply want to learn some basics for social dancing, or hone in your skills, he can help guide you there. Always professional, awesome positive attitude, and gives 100% to his students. I’m thankful to have him as an instructor!

// Alex Frogge
    // "Amazing, inclusive teacher! My husband and I enjoy taking dance classes together (they're all intro classes as we're not really dancers), and the intro to salsa teacher on 1/24/24 was one of the best teachers we've had."

// It was wonderful to take a salsa on 2 class for the first time! I liked how he demonstrated the beats with the drum and thoroughly explained the differences between salsa on 1 vs 2

// Jules is a musical genius when dancing practically in small spaces.