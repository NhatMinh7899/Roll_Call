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

import { postJson } from '../../utils/config';

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
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    role: "",
    avtUrl: "",
    
  });

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    email: "",
    password: ""
  });
  //console.log(values);
  //console.log(account);

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "Cần nhập họ tên."
    if ('id' in fieldValues)
        temp.id = fieldValues.id ? "" : "Cần nhập id"
    if ('email' in fieldValues)
        temp.email = fieldValues.email ? "" : "Email không hợp lệ."
    if ('password' in fieldValues)
        temp.password = fieldValues.password ? "" : "Cần nhập password."
   
    setErrors({
        ...temp
    })

    // if (fieldValues == values)
    //     return Object.values(temp).every(x => x == "")
}

  const handleChange = (event) => {
    setValues({
       ...values,
      [event.target.name]: event.target.value
    });
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
     validate();
      console.log(values)
      postJson('/users', values)
        .then(res => {
            console.log("Thêm thành công");
        }).catch((err) => {
          console.log(err);
          console.log("Thêm thất bại");
        })
      
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
                //helperText="Họ và Tên"
                label="Họ Tên"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
                error={errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Mã Sinh Viên"
                name="id"
                onChange={handleChange}
                required
                value={values.id}
                variant="outlined"
                error={errors.id}
                helperText={errors.id}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Địa chỉ Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
                error={errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Chức vị"
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
                label="Mật Khẩu"
                name="password"
                type="password"
                onChange={handleChange}
                required
                value={values.password}
                variant="outlined"
                error={errors.password}
                helperText={errors.password}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Avatar"
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