import React from "react";
import { ButtonGroup, Button } from "@mui/material";

export class Counter extends React.Component {
    constructor() {
        super();
        this.state = { contador: 0 };
        console.log("Construindo a classe Counter!");
    }

    UNSAFE_componentWillMount() {
        console.log("O nosso componente contador será montado!");
    }

    componentDidMount() {
        console.log("O componente foi montado!");
    }

    // Método chamado sempre que uma prop ou estado for atualizado
    shouldComponentUpdate() {
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log("O componente será atualizado.");
    }

    componentDidUpdate() {
        console.log("O componente foi atualizado!");
    }

    componentWillUnmount() {
        console.log("O componente será desmontado.");
    }

    render() {
        console.log("Renderizando o componente counter...");
        return (
            <div>
                <h2>{this.state.contador}</h2>
                <ButtonGroup variant="contained" size="small">
                    <Button
                        onClick={() =>
                            this.setState({ contador: this.state.contador - 1 })
                        }
                    >
                        Diminuir
                    </Button>
                    <Button
                        onClick={() =>
                            this.setState({ contador: this.state.contador + 1 })
                        }
                    >
                        Aumentar
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}
