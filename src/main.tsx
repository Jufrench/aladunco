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
    ],
    'ald-green': [
      "#eefaee",
      "#dff0df",
      "#bedfbd",
      "#9acd99",
      "#7cbe7a",
      "#69b466",
      "#5eb05b",
      "#4d9a4b",
      "#428941",
      "#357734"
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
