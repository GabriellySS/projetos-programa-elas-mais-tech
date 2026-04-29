import React from "react";
import { Counter } from "./components/Counter/Counter";
import { Box, Button, CssBaseline } from "@mui/material";

class App extends React.Component {
    constructor() {
        super();
        this.state = { showCounter: false };
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100vw",
                        height: "100vh",
                        textAlign: "center",
                    }}
                >
                    <h1>Ciclo de Vida no React</h1>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                            this.setState({
                                showCounter: !this.state.showCounter,
                            });
                        }}
                    >
                        {this.state.showCounter
                            ? "Remover contador"
                            : "Mostrar contador"}
                    </Button>

                    {this.state.showCounter ? <Counter /> : null}
                </Box>
            </React.Fragment>
        );
    }
}

export default App;
