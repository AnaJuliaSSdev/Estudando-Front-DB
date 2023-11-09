import { useRef } from 'react';

export function UncontrolledForm() {
    const nomeInputRef = useRef<HTMLInputElement>(null); 
    const jediInputRef = useRef<HTMLInputElement>(null);
    const jediInputDefault = true;
    const nomeInputDefault = 'Ana'; 

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault(); 
        console.log(`nome=${nomeInputRef.current?.value}, jedi=${jediInputRef.current?.checked}`);
    };

    return (
        <>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="">
                    <p>Nome</p>
                    <input type="text" name="nome" ref={nomeInputRef} defaultValue={nomeInputDefault} placeholder='Digite seu nome aqui...'/>
                </label>
                <label htmlFor="">
                    <p>Jedi</p>
                    <input type="checkbox" name="jedi" ref={jediInputRef} defaultChecked={jediInputDefault}/>
                </label>
                <br></br>
                <button type="submit">Enviar</button>
            </fieldset>
        </form>
        </>
    );
}