import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';



const ClassCard = ({ Class }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}

  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Product"
          src={Class.id}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {Class.name}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <AccessTimeIcon color="action" />
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <EditIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {Class.students.length}
            {' '}
            Student
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ClassCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ClassCard;