import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import ChartRC from '../component/Dashboard/ChartRC';
import TotalClass from '../component/Dashboard/TotalClass'
import TotalStudent from '../component/Dashboard/TotalStudent'
import TotalTeacher from '../component/Dashboard/TotalTeacher'
//import { getUser, removeUserSession } from '../utils/common'
import { useState, useEffect } from 'react';
import { getUser, authenable, getJson } from '../utils/config';


function Dashboard() {
  const [Total, setTotal] = useState({});
  useEffect(() => {
    //console.log(authenable());
    getJson('/dashboard')
      .then(res => {

          setTotal(res.data[0])
          // setIsLoading(false)
            console.log(Total);        
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  return(
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalClass totalCl={Total.class_count}/>
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalStudent totalST={Total.student_count}/>
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalTeacher totalTC={Total.teacher_count}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={12}
          >
            <ChartRC />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  )
  };

export default Dashboard;