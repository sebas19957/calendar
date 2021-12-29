import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({ 
  title:{
    fontWeight: 'bold',
    color: 'black'
  }, 
  border:{
    width: "50px",
    borderBottom: '#5c6bc0 4px solid',
    borderRadius: "20px",
  }
}))

export default useStyles