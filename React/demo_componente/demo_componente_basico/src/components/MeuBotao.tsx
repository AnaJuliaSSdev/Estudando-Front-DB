export function MeuBotao() {

    const handleClick = () => {
        alert('Clicou o botão!'); 
    }

    return (
        <button id='botao' onClick ={handleClick}> clique aqui</button>
    )
}