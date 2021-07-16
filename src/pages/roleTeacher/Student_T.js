import React, { useState, useEffect } from "react";
import { getJson } from "../../utils/config";
import { Box, Container } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import getInitials from "../../utils/getInitials";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import StudentListResults from "../../component/Student/StudentListResults";
import UserListResults from "./UserListResults";
import { Link as RouterLink } from "react-router-dom";

const Student_T = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    getJson("/students")
      .then((res) => {
        console.log("ok");
        setUsers(res.data);
        // setIsLoading(false)
        console.log(users);
      })
      .catch((err) => {
        console.log("not ok");
        console.log(err);
      });
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Card>
            <PerfectScrollbar>
              <Box sx={{ minWidth: 1050 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {users.map((customer) => (
                      <TableRow
                        hover
                        key={customer.id}
                        // selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                      >
                        <TableCell>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <Avatar src={customer.avtUrl} sx={{ mr: 2 }}>
                              {getInitials(customer.name)}
                            </Avatar>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography color="textPrimary" variant="body1">
                            {customer.name}
                          </Typography>
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.role}</TableCell>
                        <TableCell>
                          <RouterLink to={`/app/edititem/${customer.id}`}>
                            <EditIcon sx={{ mr: 2 }} />
                          </RouterLink>
                          <DeleteIcon />
                        </TableCell>
                      </TableRow>
                    ))} */}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Student_T;
