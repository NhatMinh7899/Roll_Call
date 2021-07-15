import moment from 'moment';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

// const user = {
//   avatar: '/static/images/products/lalisa.jpg',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith'
// };

const AccountProfile = ({account}) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={account.avtUrl}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {account.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${moment().format('hh:mm A')}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    {/* <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions> */}
  </Card>
);

export default AccountProfile;