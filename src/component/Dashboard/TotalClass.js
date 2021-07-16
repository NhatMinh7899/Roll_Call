import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import { Link } from 'react-router-dom';
  import MoneyIcon from '@material-ui/icons/Money';
  import { red } from '@material-ui/core/colors';
  
  const TotalClass = (props) => (
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
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
              CLASSES
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {props.totalcl}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56
              }}
            >
              <Link to="/app/class">
              <MoneyIcon />
              </Link>
              
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
        </Box>
      </CardContent>
    </Card>
  );
  
  export default TotalClass;