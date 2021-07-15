import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const role = [
  {
    value: 'student',
    label: 'Student'
  },
  {
    value: 'teacher',
    label: 'Teacher'
  },
];

const AddNewAccount = () => {
  const [values, setValues] = useState({});
  //console.log(values);
  //console.log(account);
  const handleChange = (event) => {
    setValues({
       ...values,
      [event.target.name]: event.target.value
    });
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values)
  };

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          title="Thông tin chi tiết" 
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Họ và Tên"
                //label="Họ Tên"
                name="firstName"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Mã Sinh Viên"
                name="id"
                onChange={handleChange}
                required
                value={values.id}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Địa chỉ Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Chức vị"
                name="role"
                select
                SelectProps={{ native: true }}
                onChange={handleChange}
                value={values.role}
                variant="outlined"
              >
                   {role.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Mã QR"
                name="qrUrl"
                onChange={handleChange}
                required
                value={values.qrUrl}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Mã Avatar"
                name="avtUrl"
                onChange={handleChange}
                required
                value={values.avtUrl}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type='submit'
          >
            Lưu
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AddNewAccount;