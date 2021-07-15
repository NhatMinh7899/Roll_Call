
import { Box, Container } from '@material-ui/core';
import TeacherListResults from '../component/Teacher/TeacherListResults';
import TeacherListToolbar from '../component/Teacher/TeacherListToolbar';
import { getJson } from '../utils/config';
import { useState, useEffect } from 'react';

const TeacherList = () => {
 
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    //console.log(authenable());
    getJson('/teachers')
      .then(res => {

          setUsers(res.data)
          // setIsLoading(false)
            //console.log(Users);
        
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
        <TeacherListToolbar />
        <Box sx={{ pt: 3 }}>
          <TeacherListResults customers={Users} />
        </Box>
      </Container>
    </Box>
  </>
  );
};

export default TeacherList;