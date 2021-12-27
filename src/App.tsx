import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Tell what you need');

    const handleChange = (event: { target: { value: any; }; }) => {
        setValue(event.target.value);
    };

    const handleClick = async (event: { target: {}}) => {
        const response = await axios.post(baseURL,
            {body: value});
        alert(JSON.stringify(response))
    };

    return (
        <div className="App">
            <Container maxWidth="sm">
                <header className="App-header">
                    <h1>Ready to Help</h1>
                </header>

                <TextField
                    id="standard-multiline-flexible"
                    label="Ask Me Anything"
                    fullWidth={true}
                    multiline
                    maxRows={3}
                    value={value}
                    onChange={handleChange}
                />
                <br/>
                <br/>
                <Button id='ask-button'
                        data-testid='ask-button'
                        variant="contained"
                        onClick={handleClick}
                        color="primary">
                    Get Answers
                </Button>
            </Container>
        </div>
    );
}

export default App;
