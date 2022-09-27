import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [error, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setErrors((prev) => {
      return { ...prev, [prop]: "" };
    });
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const checkInputErrors = () => {
    let status = true;
    if (values.email.trim() === "" || !emailRegex.test(values.email.trim())) {
      setErrors((prev) => {
        return { ...prev, email: "Enter a valid email" };
      });
      status = false;
    }

    if (values.password.trim() === "") {
      setErrors((prev) => {
        return { ...prev, password: "Enter a valid password" };
      });
      status = false;
    }

    if (values.password.trim().length < 6) {
      setErrors((prev) => {
        return { ...prev, password: "Password must have minimum 6 characters" };
      });
      status = false;
    }
    return status;
  };

  const handleLogin = () => {
    checkInputErrors();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <img
          src="https://www.imocha.io/Content/images/remote-hiring/remote-hiring.png"
          alt="remote-hire"
        />
      </div>
      <div
        style={{
          border: "2px solid #e8e8e8",
          borderRadius: "10px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // border: "2px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <span
              style={{
                fontSize: "35px",
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              Login into{" "}
            </span>
            <span
              style={{ fontSize: "35px", fontWeight: "bold", color: "#4d93fb" }}
            >
              Remote Hire
            </span>
          </div>
          <p
            style={{ fontSize: "18px", fontWeight: 500, marginBottom: "10px" }}
          >
            A platform to help you find your dream remote job
          </p>
        </div>
        <div
          style={{
            // border: "2px solid black",
            minHeight: "50%",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextField
            error={error.email.length !== 0}
            helperText={error.email}
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "50ch" }}
            value={values.email}
            onChange={handleChange("email")}
          />
          <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              error={error.password.length !== 0}
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {error.password.length !== 0 && (
              <FormHelperText style={{ color: "#d32f2f" }}>
                {error.password}
              </FormHelperText>
            )}
          </FormControl>
          <Button
            onClick={handleLogin}
            variant="contained"
            id="registerButton"
            disableElevation
            style={{ width: "100%", marginTop: "10px" }}
          >
            Login
          </Button>
          <p style={{ margin: "20px" }}>
            Don't have an account?{" "}
            <Link id="signupLink" to="/register">
              Sign in{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;