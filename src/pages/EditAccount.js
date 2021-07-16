import { useState, useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import DetailAccount from "../component/AccountControl/DetailAccount";
import ImageAccount from "../component/AccountControl/ImageAccount";
import { useParams } from "react-router-dom";
import { getJson } from "../utils/config";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';
// const EditAccount1 = {
//     firstName: 'Minh',
//     lastName: 'Bui',
//     phone: '84918957387',
//     state: 'male',
//     email: 'buinhatminh7899gmail.com',
//     mssv: 'N17DCCN091',
//     avatar: '/static/images/products/lalisa.jpg'
// }

const EditAccount = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getJson(`/students/${id}`)
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <ImageAccount account={user} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              {/* <DetailAccount account={user}/> */}
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Card>
                  <CardHeader
                    subheader="Thông tin có thể được chỉnh sửa"
                    title="Thông tin chi tiết"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Họ và Tên"
                          name="firstName"
                          onChange={handleChange}
                          required
                          value={user.name}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Mã QR"
                          name="qrUrl"
                          onChange={handleChange}
                          required
                          value={user.qrUrl}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Địa chỉ Email"
                          name="email"
                          onChange={handleChange}
                          required
                          value={user.email}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    <Button color="primary" variant="contained" type="submit">
                      Save details
                    </Button>
                  </Box>
                </Card>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EditAccount;
