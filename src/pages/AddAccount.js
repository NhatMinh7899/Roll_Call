import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import DetailAccount from '../component/AccountControl/DetailAccount';
import ImageAccount from '../component/AccountControl/ImageAccount';
import AddNewAccount from '../component/AccountControl/AddNewAccount';


const NewAccount = {
    firstName: '',
    lastName: '',
    phone: '',
    state: '',
    mssv: '',
    avatar: '',
    email: ''
}

const addAccount = () => {
  return (
    <>
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
          {/* <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <ImageAccount account={NewAccount} />
          </Grid> */}
          <Grid
            item
            lg={10}
            md={6}
            xs={12}
          >
           <AddNewAccount />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  );
};

export default addAccount;