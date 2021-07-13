import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import DetailAccount from '../component/AccountControl/DetailAccount';
import ImageAccount from '../component/AccountControl/ImageAccount';


const NewAccount = {
    firstName: '',
    lastName: '',
    phone: '',
    state: '',
    mssv: '',
    avatar: '',
    email: ''
}

const addAccount = () => (
  <>
    <Helmet>
      <title>Account | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <ImageAccount account={NewAccount} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <DetailAccount account={NewAccount}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default addAccount;