import GlobalStyle, { theme } from './GlobalStyle';
import Home from './components/pages/Home';
import FeaturesPage from './components/pages/FeaturesPage';
import ServicesPage from './components/pages/ServicesPage';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <FeaturesPage/>
      <ServicesPage/>
    </ThemeProvider>
  );
}

export default App;
