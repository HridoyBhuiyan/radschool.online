import React, {Fragment} from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    makeStyles,
    createStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(3),
        },
        image: {
            width: '100%',
            maxWidth: '400px',
            marginBottom: theme.spacing(2),
        },
    })
);

const Error404 = () => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <div className={"h-100 d-flex align-items-center justify-content-center"}>
        <Container maxWidth="md" className={classes.root}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                bgcolor={theme.palette.primary.main}
                color="white"
                p={3}
            >
                <Typography variant="h1" component="h2">
                    404
                </Typography>
                <Typography variant="h4" component="h3" gutterBottom>
                    Page Not Found
                </Typography>
            </Box>
            <img
                src="/images/404.png"
                alt=""
                className={classes.image}
            />
            <Typography variant="subtitle1">
                It looks like you've stumbled upon a page that doesn't exist.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                fullWidth
            >
                Go Home
            </Button>
        </Container>
        </div>
    );
};

export default Error404;
