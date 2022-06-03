import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) =>({
    text:{
        fontSize:"1.25rem",
    },
    todo:{
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:"5px",
        padding: 6,
        margin:"5px 0"
    },
    icon:{
        width: "30px",
        height: "30px",
        color: "#333333",
    }
}))