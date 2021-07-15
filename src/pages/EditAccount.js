import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import DetailAccount from '../component/AccountControl/DetailAccount';
import ImageAccount from '../component/AccountControl/ImageAccount';
import { useParams } from 'react-router-dom';
import { getJson } from '../utils/config';

// const EditAccount1 = {
//     firstName: 'Minh',
//     lastName: 'Bui',
//     phone: '84918957387',
//     state: 'male',
//     email: 'buinhatminh7899gmail.com',
//     mssv: 'N17DCCN091',
//     avatar: '/static/images/products/lalisa.jpg'
// }

const EditAccount = () => {
  const [user, setUser] = useState({});
  const {id} = useParams();
  
  
  useEffect(() => {
    getJson(`/students/${id}`)
      .then(res => {            
          setUser(res.data[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
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
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <ImageAccount account={user} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <DetailAccount account={user}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  );
};

export default EditAccount;