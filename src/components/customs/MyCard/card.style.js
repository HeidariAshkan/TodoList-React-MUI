import { makeStyles } from '@material-ui/styles';
export const UseStyles = makeStyles((theme) => ({
    card: {
        background: "#171a2b !important",
        margin:"20px auto",
        height:"100%",
        width:"50%",
    },
    cardHeader: {
        background: "#171a2b !important",
        color: 'white' , 
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
    }
}))