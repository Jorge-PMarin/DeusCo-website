import GlobalStyle, { theme } from './GlobalStyle';
import Home from './components/pages/Home';
import FeaturesPage from './components/pages/FeaturesPage';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <FeaturesPage/>
    </ThemeProvider>
  );
}

export default App;
