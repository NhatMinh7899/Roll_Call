import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon
  } from '@material-ui/core';
  import { Search as SearchIcon } from 'react-feather';
  import {Link} from 'react-router-dom';
  
  const CustomerListToolbar = (props) => (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Link to={'/app/additem'}>
        <Button sx={{ mx: 2 }}
          color="primary"
          variant="contained"
        >
          Add
        </Button>
        </Link>
        <Button
          color="primary"
          variant="contained"
          marginRight = "0.5rem"
        >
          Plan
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
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
  
  export default CustomerListToolbar;
  