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

// const states = [
//   {
//     value: 'male',
//     label: 'Male'
//   },
//   {
//     value: 'female',
//     label: 'Female'
//   },
// ];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({});
  useEffect(() => {
    const {account} = props;
    setValues(account);
    console.log(props);
  }, [])
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
    //console.log(rest)
  };

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}

    >

      <Card>
        <CardHeader
          subheader="Thông tin có thể được chỉnh sửa"
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
                helperText="Địa chỉ Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
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
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;