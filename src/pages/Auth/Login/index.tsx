import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import Title from "../../../components/Title";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const classes = useStyles();
  const [createAccount, setCreateAccount] = useState(true);

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className={classes.loginContainer}>
      {!createAccount ? (
        <form className={classes.loginForm1}>
          <Grid container>
            <Grid item xs={12}>
              <Box mb={3}>
                <Title text="Iniciar sesión" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Usuario"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Contraseña"
                  variant="outlined"
                  type="password"
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={1}>
                <Button variant="contained" color="primary">
                  <Typography>Entrar</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                No tienes cuenta?
                <a href="#" className={classes.link}>
                  Crear cuenta
                </a>
              </Typography>
            </Grid>
          </Grid>
        </form>
      ) : (
        <form className={classes.loginForm1}>
          <Grid container>
            <Grid item xs={12}>
              <Box mb={3}>
                <Title text="Crear cuenta" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Nombre Completo *"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Correo *"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Contraseña"
                  variant="outlined"
                  type={values.showPassword ? "text" : "password"}
                  size="small"
                  value={values.password}
                  onChange={handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Contraseña"
                  variant="outlined"
                  type="password"
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <Button variant="contained" color="primary">
                  <Typography>Crear cuenta</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Ya tienes cuenta?
                <a href="#" className={classes.link}>
                  Iniciar Sesión
                </a>
              </Typography>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default Login;
