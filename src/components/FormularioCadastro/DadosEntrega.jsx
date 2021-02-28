import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';

function DadosEntrega({aoEnviar}){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            
            aoEnviar({cep, endereco, numero, cidade, estado})
        }}>
            <TextField
                value={cep}
                id="cep"
                label="cep"
                type="number"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                    setCep(event.target.value);
                }}
            />
            <TextField
                value={endereco}
                id="endereco"
                label="endereco"
                type="text"
                variant="outlined"
                margin="normal"      
                fullWidth    
                required   
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}                   
            />
            <TextField
                value={numero}
                id="numero"
                label="numero"
                type="text"
                variant="outlined"
                margin="normal"
                required
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
            />            
            <TextField
                value={cidade}
                id="cidade"
                label="cidade"
                type="text"
                variant="outlined"
                margin="normal"
                required
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
            />
            <TextField
                value={estado}
                id="estado"
                label="estado"
                type="text"
                variant="outlined"
                margin="normal"
                required
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
            />
            {/* <Button
                variant="contained"
                color="secondary">
                    Voltar
            </Button> */}
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth>
                    Finalizar Cadastro
            </Button>
        </form>
    )
}

export { DadosEntrega };