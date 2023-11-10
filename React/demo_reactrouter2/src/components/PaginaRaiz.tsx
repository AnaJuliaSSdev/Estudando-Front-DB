import {Link, Outlet, useNavigation} from 'react-router-dom'; 

export function PaginaRaiz(){
    const navegacao = useNavigation(); 
     return (
        <>
             <header>
                <h1>Usuários</h1>
                <nav>
                <li><Link to='u1'>Aninha</Link></li> | {' '} 
                <li><Link to='u2'>Kid Abelha</Link></li> | {' '}
                </nav>
             </header>
             <main>
                <div>
                    {navegacao.state !== 'idle' && <p>...</p>}
                </div>
                <Outlet/>
             </main>
             <footer>
                <p>Desenvolvido por @artes_ana_ato</p>
             </footer>
        </>
     );
}