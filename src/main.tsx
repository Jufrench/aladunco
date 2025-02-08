import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colors: {
    'ald-orange': [
      "#fff5e1",
      "#ffe9ce",
      "#f9d1a0",
      "#f5b86e",
      "#f1a344",
      "#ef9528",
      "#ee8e18",
      "#d47b09",
      "#bd6c01",
      "#a55c00"
    ]
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
