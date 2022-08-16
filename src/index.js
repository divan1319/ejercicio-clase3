
import ReactDOM from 'react-dom/client';
import './index.css';
import {Perfil} from './Components/Perfil';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Perfil
    backImage="https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
    profileImage="https://scontent.fsal2-1.fna.fbcdn.net/v/t1.6435-9/134067674_2838846843101163_8530616486265140009_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yMbAeCg2ZQoAX_lyr9-&_nc_ht=scontent.fsal2-1.fna&oh=00_AT_9K3aKJsmj7Jpo3dTzIZKY8QyV23z9t1dAJg-b8Jyyow&oe=63217A77"
    name="Daniel Iván López García"
    career="Ingenieria en Ciencias de la Computacion - UDB"
    skills="Programador Backend, manejo de: MySQL, SQL Server, PHP, HTML, CSS y JS."
    date="15 August 2022"
    />
  
);
