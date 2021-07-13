import { Helmet } from "react-helmet";
import { Box, Container, Grid, TextField, Select, InputLabel } from "@material-ui/core";
import ListStudent from "../component/Class/ListStudent";
import Student from "../data/studentdb";
import { useState } from "react";

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

const classes = {
    name: 'Code Huong Dich Vu',
    state: '2A08',
    credit: '252',
    teacher: 'Mr Tru',
    students: []
}

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

const EditClass = ({classe, ...rest}) => {
  const [values, setValues] = useState(classes);

  const handleChange = (event) => {
    setValues({
      ...rest,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>EditClass</title>
      </Helmet>
      <form {...rest}>
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
                value={values.name}
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
                value={values.state}
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
                value={values.credit}
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
                name="room"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                
                variant="outlined"
              >
                {Student.map((name) => (
                  <option key={name} value={name}>
                    {name.name}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item lg={12}>
              <ListStudent student={Student} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      </form>
    </>
  );
};

export default EditClass;
