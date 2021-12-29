import { makeStyles } from "@material-ui/core";

const logo =  require("./../../../static/img/fondo-login.jpg")

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    height: "100vh",
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  loginForm1: {
    borderRadius: "10px",
    boxShadow:
      "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19)",
    padding: "5%",
    width: '40%',
    backdropFilter: `blur(15px)`
  },
  link:{
    color: '#5c6bc0',
    fontWeight: 'bolder',
    marginLeft: 3,
  }
}));

export { useStyles as default };
