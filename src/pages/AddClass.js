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
  Typography
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Container, Grid, TextField, InputLabel } from "@material-ui/core";
import getInitials from "../utils/getInitials";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListStudent from "../component/Class/ListStudent";
import Student from "../data/studentdb";
import { useState, useEffect } from "react";
import { getJson} from '../utils/config'
import {Link } from 'react-router-dom'
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
    value: "2A27",
    label: "2A27",
  },
];

const AddClass = () => {
  const [values, setValues] = useState({
    id: "",
    name: "",
    room: "",
    credit: "",
    datestart: "",
    student: [],
    teacher: {},
    dayOfWeek: "2",
    shift: "0",
    days: 0,
    dateStart: "",
  });
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

  useEffect(() => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
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
  return (
    <form onSubmit={handleSubmit}>
      <>
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
                  name="name"
                  required
                  id="standard-required"
                  label="Required"
                  defaultValue="name"
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
                  value={values.room}
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
                  label="Required"
                  type='number'
                  defaultValue="Credits"
                />
              </Grid>

              <Grid item lg={3}>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="Now"
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
                  name="teacher"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                >
                  {teachers.map((name) => (
                    <option key={name} value={name}>
                      {name.name}
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
                              checked={
                                selectedCustomerIds.length === students.length
                              }
                              color="primary"
                              indeterminate={
                                selectedCustomerIds.length > 0 &&
                                selectedCustomerIds.length < students.length
                              }
                  
                            />
                          </TableCell>
                          <TableCell>Id</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Role</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {students.map((student) => (
                          <TableRow
                            hover
                            key={student.id}
                            selected={
                              selectedCustomerIds.indexOf(student.id) !== -1
                            }
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={
                                  selectedCustomerIds.indexOf(student.id) !==
                                  -1
                                }
                                onChange={(event) =>
                                  handleSelectOne(event, student.id)
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
                                <Avatar src={student.avtUrl} sx={{ mr: 2 }}>
                                  {getInitials(student.name)}
                                </Avatar>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography color="textPrimary" variant="body1">
                                {student.name}
                              </Typography>
                            </TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.role}</TableCell>
                            <TableCell>
                              <Link to={`/app/edititem/${student.id}`}>
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
              <Grid item lg={4}>
                <Button color="primary" variant="contained" type="submit">
                  Lưu
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    </form>
  );
};

export default AddClass;
