import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Pagination } from "@material-ui/core";
import ClassToolBar from "../../component/Class/ClassToolBar";
import ClassCard from "../../component/Class/ClassCard";
import { getJson } from "../../utils/config";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom'
import { Search as SearchIcon } from 'react-feather';



const Class = () => {
  const [classes, setClasses] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    //console.log(authenable());
    getJson(`/teachers/${id}/class`)
      .then((res) => {
        //console.log(res.data);
        setClasses(res.data);
        // setIsLoading(false)

        //console.log(classes)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                color="primary"
                variant="contained"
              >
               Roll-Call
              </Button>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Box sx={{ maxWidth: 500 }}>
                    <TextField
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon fontSize="small" color="action">
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        ),

                      }}
                      placeholder="Search class"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {classes.map((Class) => (
                <Grid item key={Class.id} lg={4} md={6} xs={12}>
                  <Link to={`/teacher/editclass/${Class.id}`}>
                    <ClassCard Class={Class} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Class;
