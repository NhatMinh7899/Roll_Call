import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './component/GlobalStyles';
import theme from './theme';
import routes from './routes';
import {GetUser} from './utils/config';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
     
        {routing}
    </ThemeProvider>
    // <GetUser></GetUser>
  )
};

export default App;

