// import * as React from "react";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, watch }
  // } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };
  // disable space key
  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      // Check for space key (key code 32)
      event.preventDefault(); // Cancel the event
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(./images/login.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <img src="./images/logo.png" alt="Logo" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Exercise Tracker App
            </Typography>

            <Typography component="h1" variant="h5">
              SIGN UP
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                id="user"
                pattern="[a-z]{4,8}"
                label="User Name"
                name="username"
                autoFocus
                {...register("username", {
                  required: true,
                  // pattern: /^[A-Za-z]+$/,
                  pattern: /^[A-Za-z]+( [A-Za-z]+)*$/,
                })}
                error={!!errors.username}
                // helperText={errors.username && "Username is required"}
                helperText={
                  errors.username
                    ? errors.username.type === "required"
                      ? "Username is required"
                      : "Username does not include spaces or numbers."
                    : ""
                }
              />
              <TextField
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                error={!!errors.email}
                helperText={errors.email && "Invalid email"}
                onKeyDown={handleKeyDown} // Add the onKeyDown event handler
              />
              <TextField
                margin="normal"
                value={passwords}
                onChange={(e) => setPasswords(e.target.value)}
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                })}
                error={!!errors.password}
                helperText={errors.password && "Password is required"}
                onKeyDown={handleKeyDown} // Add the onKeyDown event handler
              />
              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="conpassword"
                label="Confirm Password"
                type="password"
                id="conpassword"
                autoComplete="current-password"
                {...register("conpassword", {
                  required: true,
                  validate: (value) =>
                    value === password.current || "Passwords do not match",
                })}
                error={!!errors.conpassword}
                helperText={errors.conpassword && errors.conpassword.message}
                onKeyDown={handleKeyDown} // Add the onKeyDown event handler
              /> */}
              {/* new */}
              <TextField
                margin="normal"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoFocus
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9]{10}$/, // Assuming you want a 10-digit phone number
                })}
                error={!!errors.phone}
                helperText={
                  errors.phone
                    ? errors.phone.type === "required"
                      ? "Phone number is required"
                      : "Please enter a valid 10-digit phone number"
                    : ""
                }
              />
              <TextField
                margin="normal"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoFocus
                {...register("address", {
                  required: true,
                })}
                error={!!errors.address}
                helperText={errors.address && "Address is required"}
              />

              {/* end */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#000000" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/" variant="body2">
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// import React from "react";
// import Layout from "../../components/Layout/Layout";
// const Register = () => {
//   return (
//     <Layout title="Register - Ecommerce App">
//       <div className="register">
//         <h1>Register Page</h1>
//       </div>
//     </Layout>
//   );
// };

// export default Register;

// import React from "react";
// // import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// import Layout from "../../components/Layout/Layout";
// const Register = () => {
//   return (
//     <Layout title="Register - Ecommerce App">
//       <div className="register">
//         <h1>Register Page</h1>
//       </div>
//     </Layout>
//   );
// };

// export default Register;
