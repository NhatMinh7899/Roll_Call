import { Box, Container, Grid, TextField, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Button,
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
import getInitials from "../utils/getInitials";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListStudent from "../component/Class/ListStudent";
import Student from "../data/studentdb";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getJson } from "../utils/config";
import {Link} from 'react-router-dom'
//add mutiple item
// const handleChangeMultiple = (event) => {
//   const { options } = event.target;
//   const value = [];
//   for (let i = 0, l = options.length; i < l; i += 1) {
//     if (options[i].selected) {
//       value.push(options[i].value);
//     }
//   }
//   setPersonName(value);
// };

const states = [
  {
    value: "2A08",
    label: "2A08",
  },
  {
    value: "2A16",
    label: "2A16",
  },
  {
    value: "2B25",
    label: "2B25",
  },
];

const EditClass = () => {
  const [values, setValues] = useState({});
  const [teachers, setTeachers] = useState([]);
  const [teacher, setTeacher] = useState({});
  const [studentsInClass, setStudentsInClass] = useState([]);
  const [student, setStudents] = useState([]);
  const { classId } = useParams();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

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

  //console.log(classId);

  useEffect(() => {
    getJson(`/classes/${classId}`)
      .then((res) => {
        setTeacher(res.data[0].teacher);
        setStudentsInClass(res.data[0].student);
        setValues(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });

    getJson(`/teachers/`)
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getJson(`/students/`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeTeacher = (event) => {
    setTeacher({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  //console.log(teacher.name);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            backgroundColor: "background.default",
            minHeight: "100%",
            py: 3,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={6}>
              <Grid item lg={3}>
                <TextField
                  name="className"
                  required
                  id="standard-required"
                  label="ClassName"
                  defaultValue="CLassName"
                  value={values.name ? values.name : ""}
                />
              </Grid>

              <Grid item lg={3}>
                <TextField
                  fullWidth
                  label="Select Room"
                  name="room"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.room ? values.room : ""}
                  variant="outlined"
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item lg={3}>
                <TextField
                  name="credit"
                  required
                  id="standard-required"
                  label="Credit"
                  defaultValue="Credits"
                  value={values.credit ? values.credit : ""}
                />
              </Grid>

              <Grid item lg={3}>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  value={values.dateStart}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item lg={8}>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Choose Teacher
                </InputLabel>
                <TextField
                  fullWidth
                  name="room"
                  onChange={handleChangeTeacher}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={teacher.name ? teacher.name : {}}
                  variant="outlined"
                >
                  {teachers.map((item) => (
                    <option key={item.name} value={item}>
                      {item.name}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item lg={12}>
                <PerfectScrollbar>
                  <Box>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell padding="checkbox">
                            <Checkbox
                              // checked={
                              //   selectedCustomerIds.length === student.length
                              // }
                              // color="primary"
                              // indeterminate={
                              //   selectedCustomerIds.length > 0 &&
                              //   selectedCustomerIds.length < student.length
                              // }
                  
                            />
                          </TableCell>
                          <TableCell>Id</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Role</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {student.map((customer) => (
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
                                  selectedCustomerIds.indexOf(customer.id) !==
                                  -1
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
                              <Button>
                                <DeleteIcon />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </PerfectScrollbar>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </form>
    </>
  );
};

export default EditClass;
