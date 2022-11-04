import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";

import { LocalizationProvider } from "@mui/lab";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useState } from "react";

function App() {
  //states
  const [dob, setDob] = useState(null);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          backgroundColor: "error.light",
          padding: 2,
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          Resume Uploader
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <Box component="form" sx={{ p: 3 }} noValidate id="resume-form">
            <TextField
              id="name"
              name="name"
              required
              fullWidth
              margin="normal"
              label="Name"
            />
            <TextField
              id="email"
              name="email"
              required
              fullWidth
              margin="normal"
              label="Email"
            />
            <Box mt={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={dob}
                  onChange={(newValue) => {
                    setDob(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={7}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: "info.light",
              padding: 1,
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              List of Candidates
            </Typography>
          </Box>
          <TableContainer component="paper">
            <Table sx={{ minWidth: 650 }} arial-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">DOB</TableCell>
                  <TableCell align="center">DOB</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Sonam
                  </TableCell>
                  <TableCell align="center">Sonam@gmail.com</TableCell>
                  <TableCell align="center">20/10/1995</TableCell>
                  <TableCell align="center">Bihar</TableCell>
                  <TableCell align="center">Female</TableCell>
                  <TableCell align="center">Delhi Rachi</TableCell>
                  <TableCell align="center">
                    <Avatar src="#" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
