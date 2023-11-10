import {Link, Outlet} from 'react-router-dom'; 

export function PaginaUsuarios () {
    return (
        <>
            <h2>Usuarios</h2>
            <ul>
                <li><Link to='u1'>Aninha</Link></li>
                <li><Link to='u2'>Kid Abelha</Link></li>
            </ul>
            <Outlet/>
        </>
    );
}