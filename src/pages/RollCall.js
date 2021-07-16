import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import getInitials from "../utils/getInitials";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getJson } from "../utils/config";

const RollCallClass = () => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [teacher, setTeacher] = useState({});
  const [studentsInClass, setStudentsInClass] = useState([]);
  const [nameCLass, setNameClass] = useState();
  const { classId } = useParams();
  const [values, setValues] = useState();
  console.log(classId);

  useEffect(() => {
    getJson(`/classes/${classId}`)
      .then((res) => {
        // console.log(res.data[0].students);
        // console.log(res.data[0]);
        setTeacher(res.data[0].teacher);
        setStudentsInClass(res.data[0].students);
        setValues(res.data[0]);
        setNameClass(res.data[0].name)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = studentsInClass.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };
 console.log(values);
  //   console.log(selectedCustomerIds);

  const handleDelete = () => {};

  //console.log(student);
  return (
    <>
      <Grid container spacing={3} sx={{ mt: 4, ml: 3 }}>
        <Grid item lg={4}>
          <Typography>Tên lớp: {nameCLass}</Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography>Giảng viên: {teacher.name}</Typography>
        </Grid>
        <Grid item lg={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            component={Link}
            color="primary"
            variant="contained"
            to={`/app/checkin/${classId}`}
          >
            Điểm Danh
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={6} sx={{ mt: 1 }}>
        {/* <Box
        sx={{
          // display: 'flex',
          // justifyContent: 'flex-end'
          mr: 8
        }} */}

        {/* </Box> */}

        <Grid item md={12}>
          <Card>
            <PerfectScrollbar>
              <Box>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedCustomerIds.length == studentsInClass.length
                          }
                          color="primary"
                          indeterminate={
                            selectedCustomerIds.length > 0 &&
                            selectedCustomerIds.length < studentsInClass.length
                          }
                          onChange={handleSelectAll}
                        />
                      </TableCell>
                      <TableCell>Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentsInClass.map((customer) => (
                      <TableRow
                        hover
                        key={customer.id}
                        selected={
                          selectedCustomerIds.indexOf(customer.id) !== -1
                        }
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={
                              selectedCustomerIds.indexOf(customer.id) !== -1
                            }
                            onChange={(event) =>
                              handleSelectOne(event, customer.id)
                            }
                            value="true"
                          />
                        </TableCell>
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
                          <Link to={`/app/edititem/${customer.id}`}>
                            <EditIcon sx={{ mr: 2 }} />
                          </Link>
                          <Button onClick={handleDelete}>
                            <DeleteIcon sx={{ mb: 2 }} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
            {/* <TablePagination
              component="div"
              count={student.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 25]}
            /> */}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

RollCallClass.propTypes = {
  student: PropTypes.array.isRequired,
};

export default RollCallClass;
