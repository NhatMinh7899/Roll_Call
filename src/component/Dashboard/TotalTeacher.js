import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import { green } from '@material-ui/core/colors';
  import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
  import PeopleIcon from '@material-ui/icons/PeopleOutlined';
  import { Link } from 'react-router-dom';

  const TotalTeacher = (props) => (
    <Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL TEACHER
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              50
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56
              }}
            >
                <Link to="/app/teacher">
                <PeopleIcon />
                </Link>
              
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
        </Box>
      </CardContent>
    </Card>
  );
  
  export default TotalTeacher;