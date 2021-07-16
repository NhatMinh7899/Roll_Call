import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link as RouterLink } from 'react-router-dom';

const UserListResults = (props) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [users, setUsers] = useState()
    useEffect(() => {
        setUsers(props.customers)
    }, [])
    console.log(props.customers);
  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Id
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Role
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.avtUrl}
                        sx={{ mr: 2 }}
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
                  <TableCell>
                    <RouterLink to={`/app/edititem/${customer.id}`}>
                    <EditIcon sx={{ mr: 2}}/>
                    </RouterLink>                  
                   <DeleteIcon />
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

UserListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default UserListResults;
