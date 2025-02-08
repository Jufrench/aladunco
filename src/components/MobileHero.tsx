import { Center, Title, useMantineTheme } from "@mantine/core";

// import aladunImgUrl from '../aladun_text_black.png';

export default function MobileHero() {
  const theme = useMantineTheme();
  // console.log('aladunImgUrl:', aladunImgUrl)

  return (
    <header>
      <Center h={200} style={{ background: theme.colors['ald-orange'][7] }}>
        <Title order={1} c="white">Aládùn</Title>
      </Center>
    </header>
  )
}