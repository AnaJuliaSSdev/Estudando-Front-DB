import React, {useState} from 'react';

export function NomeImput() {
    const[texto, setTexto] = useState('Aninha'); 

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTexto(event.target.value);
    }; 

    return (
        <>
            <input value={texto} onChange={handleChange}></input>
            <p>Seu nome é {texto}</p>
        </>
    );
}