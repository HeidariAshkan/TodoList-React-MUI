import { makeStyles } from '@material-ui/styles'
export const useStyles = makeStyles((theme) => ({
    form:{
        background:"#171a2b !important",
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
    },

    div:{
        border: "2px solid #5a0ef9",
        display: "flex",
        borderRadius:".25rem",

    },
    todoText:{
        width: "350px",
        "& label":{
            color: "white !important",
        },
        "& div":{
            color: "white !important",
        }
    },
    btnAdd:{
        backgroundImage: "linear-gradient(to right, #5a0ef9, #8e0ef9)",
        borderColor: "#5a0ef9 !important",
        color: "white !important",
        borderRadius: ".1rem !important",
    }

}))