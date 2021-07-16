
import { Box, Container } from '@material-ui/core';
import StudentListResults from '../component/Student/StudentListResults';
import StudentListToolbar from '../component/Student/StudentListToolbar';
import Student from '../data/studentdb';
import { getJson } from '../utils/config';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function StudentList() { 
  const [temp, setTemp] = useState(0)
  const [Users, setUsers] = useState([]);
  
  // useEffect(()=>{
  //   setIterval(()=>{
  //     setTemp((prevTemp)=>prevTemp+1)
  //   }, 2000)
  // }, [])


  
  useEffect(() => {
    //console.log(authenable());
    getJson('/students')
      .then(res => {

          setUsers(res.data)
          // setIsLoading(false)
            console.log(Users);
        
      })
      .catch(err => {
        console.log(err)
      })
  }, [temp])
  
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
        <StudentListToolbar />
        <Box sx={{ pt: 3 }}>         
          <StudentListResults student={Users} />
        </Box>
      </Container>
    </Box>
  </>
)};


export default StudentList;