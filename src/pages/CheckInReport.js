import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ListStudent from '../component/Checkin/ListStudent';
import ReportInfo from '../component/Checkin/ReportInfo';
import { useParams } from 'react-router-dom';
import { getJson } from '../utils/config';

const CheckInReport= () => {
  const [contents, setContents] = useState([]);
  const [info, setInfo] = useState({});
  const [classInfo, setClassInfo] = useState({});
  const {id} = useParams();
  
  
  useEffect(() => {
    getJson(`/reports/${id}/status`)
    .then(res => {            
        setContents(res.data[0].subject);
        setInfo(res.data[0]);
        console.log(info);
    })
    .catch(err => {
      console.log(err)
    })

    getJson(`/classes/${contents}/`)
    .then(res => { 
        setClassInfo(
          {
            teacher_name: res.data[0].teacher.name,
            teacher_id: res.data[0].teacher.id,
            class_name: res.data[0].name,
            student_count: res.data[0].students.length,
          }
        );
        console.log(info)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
          <ReportInfo info={info} classInfo={classInfo}/>
        <Box sx={{ pt: 3 }}>
          <ListStudent reportId={id} />
        </Box>
      </Container>
    </Box>
  </>
  )
}
export default CheckInReport;
