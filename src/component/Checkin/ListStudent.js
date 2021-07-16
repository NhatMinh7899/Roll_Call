/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import getStatus from '../../utils/getStatus';
import { getJson } from '../../utils/config';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';

const ListStudent = ({reportId}) => {
  const [contents, setContents] = useState([])



  useEffect(() => {
    const timer = setInterval(() => {
      getJson(`/reports/${reportId}/status`)
      .then(res => {            
        setContents(res.data[0].content.filter(item => item.user !== null));
        //console.log(contents);
      })
      .catch(err => {
          console.log(err)
      });
    
    }, 2000)
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Họ Và Tên
                </TableCell>
                <TableCell>
                  MSSV
                </TableCell>
                <TableCell>
                  Điểm Danh
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contents.map((content) => (
                <TableRow
                  hover
                  key={content.user.id}
                  selected={contents.indexOf(content.user.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={content.user.avtUrl}
                        sx={{ mr: 2 }}
                      >
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {content.user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {content.user.id}
                  </TableCell>
                  <TableCell>
                    {getStatus(content.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

ListStudent.propTypes = {
  contents: PropTypes.array.isRequired
};

export default ListStudent;
