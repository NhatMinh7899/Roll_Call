import {
    Box,
    Container,
    Grid,
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Divider,
    CardMedia
  } from '@material-ui/core';
  import { Search as SearchIcon } from 'react-feather';
  
  const QR = ({qrUrl}) => (
    <Card>
      <CardHeader title="Quét Mã QR Để Điểm Danh:" />
      <Divider />
      <CardContent>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 2
            }}
        >
            <img src={qrUrl} />
        </Box>
      </CardContent>
    </Card>
  );
  
  export default QR;
  