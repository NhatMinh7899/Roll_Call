import {Card, Box, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Typography, Avatar } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import getInitials from '../../utils/getInitials';
import { useState } from 'react';


const ListStudent = ({student, ...rest}) => {
    const [limit, setLimit] = useState(10);
    return (
        <Card>
        <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox/>
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  MSSV
                </TableCell>
                <TableCell>
                  Grade
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student.slice(0, limit).map((customer) => (
                <TableRow
                
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.img}
                        sx={{ }}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                    </Box>
                  </TableCell>
                  <TableCell>
                  <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {customer.role}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      </Card>
    )
};

export default ListStudent;