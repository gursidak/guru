import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Directions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '8px 8px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        boxShadow: "3px 3px 4px #999"
    },
    input: {
        marginLeft: theme.spacing(4),
        flex: 1,
    },
    iconButton: {
        padding: 15,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    wrapper: {
        marginTop: "10%"
    }

}));

const roundlist = [
    {
        value: 0,
        label: 'Select Round',
    },
    {
        value: 1,
        label: 'R1',
    },
    {
        value: 2,
        label: 'R2',
    },
    {
        value: 3,
        label: 'R3',
    },
];

export default function CustomizedInputBase() {
    const classes = useStyles();

    const [value, setValue] = React.useState();
    const [round, setRound] = React.useState(0);
    const [error, setError] = React.useState("");
    const [link, setLink] = React.useState("");
    const [submitted, setSubmitted] = React.useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (round == 0) {
            setError("Please Select the Round From given options")
        }
        else {
            setError("")

            if (round == 1 && value == "2000") {

                setLink("https://forms.gle/ibjfqvnMhF4YDKSY6");
            }
            else if (round == 2 && value == "3000") {
                setLink("https://forms.gle/t2YA8dvoa2akzCS98");

            }
            else if (round == 3 && value == "4000") {
                setLink("https://forms.gle/vPpn2wZDfGsKRPxJ9");

            }
            else {
                setLink("#");
            }
            setSubmitted(1);
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log("e value is : ", e.target.value);
    }

    const handleRoundChange = (e) => {

        setRound(e.target.value)
    }

    useEffect(() => {
        console.log(value);
    }, [value])

    return (
        <Grid container justify="center" className={classes.wrapper}>
            <Grid item xs={10} lg={7} md={6}  >
                <form className={classes.root} onSubmit={handleSubmit} >
                    {/* <IconButton disabled className={classes.iconButton} aria-label="menu" >
                        <VpnKeyIcon />
                    </IconButton> */}

                    <TextField
                        style={{ border: "none", minWidth: "30px" }}
                        id="outlined-select-currency-native"
                        select
                        // label="Round"
                        value={round}
                        onChange={handleRoundChange}
                        SelectProps={{
                            native: true,
                        }}
                        required

                    >
                        {roundlist.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <Divider className={classes.divider} style={{marginLeft:"10px"}} orientation="vertical" />

                    <InputBase
                        className={classes.input}
                        type="text"
                        name="password"
                        placeholder="Enter Your Password Here"
                        // inputProps={{ 'aria-label': "Enter Your Password Here" }}
                        onChange={handleChange}
                        required
                        defaultValue={value}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="submit" >
                        <DirectionsIcon />
                    </IconButton>

                </form>
                <small style={{ color: "red", marginTop: "15px" }}>{error}</small>

            </Grid>

            <Grid item xs={7} style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
                {
                    submitted == 1 ?

                        link !== "#" ?
                            <form action={link} target="_blank">
                                <Button type="submit" variant="contained" color="primary" > GO TO NEXT ROUND
                            </Button>
                            </form>
                            : <Alert variant="outlined" severity="error">
                                Wrong Password — check it out!
                    </Alert>

                        : ""
                }
            </Grid>
        </Grid>
    );
}
