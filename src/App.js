import GlobalStyle, { theme } from './GlobalStyle';
import Home from './components/pages/Home';
import FeaturesPage from './components/pages/FeaturesPage';
import ServicesPage from './components/pages/ServicesPage';
import PricesPage from './components/pages/PricesPage';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <FeaturesPage />
      <ServicesPage />
      <PricesPage />
    </ThemeProvider>
  );
}

export default App;
