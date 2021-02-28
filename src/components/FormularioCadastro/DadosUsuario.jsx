import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro.js';
import useErros from '../../hooks/useErros.js';

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    //const [erros, setErros] = useState({senha:{valido:true, texto:""}});
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({
                    email,
                    senha
                });
            }
            
        }}>
            <TextField
                value={email}
                id="email"
                name="email"
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            <TextField
                value={senha}
                id="senha"
                label="senha"
                name="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary">
                    Próximo
            </Button>
        </form>
    )
}

export { DadosUsuario };