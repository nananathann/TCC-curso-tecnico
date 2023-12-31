import { Link } from 'react-router-dom'

import './Sidebar.css'

import robokids from '../images/robokids.png'

import home from '../images/sidebar-icons/home.png'
import sobre from '../images/sidebar-icons/sobre.png'
import objetivos from '../images/sidebar-icons/objetivos.png'
import equipamentos from '../images/sidebar-icons/equipamentos.png'
import projeto from '../images/sidebar-icons/projeto.png'
import bibliografia from '../images/sidebar-icons/bibliografia.png'

function Sidebar() {
    return(
        <>

        <div className="mobile">
        <input type="checkbox" id="check" />
    <label for="check">

        <div class="menu">
            <span class="hamburguer"></span>
        </div>

    </label>

    <div class="barra">

      

      <div className="itens">

    <div className="inicio">
      <img src={ home } alt="" />  <Link id="inici" to="/">Inicio</Link>
    </div>
    <div className="sobre">
      <img src={ sobre } alt="" />  <Link id="sobr" to="/sobre">Sobre</Link>
    </div>
    <div className="objetivos">
      <img src={ objetivos } alt="" />  <Link id="objetiv" to="/objetivos">Objetivos</Link>
    </div>
    <div className="equipamentos">
      <img src={ equipamentos } alt="" />  <Link id="equipament" to="/equipamentos">Equipamentos</Link>
    </div>
    <div className="projeto">
      <img src={ projeto } alt="" />  <Link id="projet" to="/projeto">Projeto</Link>
    </div>
    <div className="bibliografia">
      <img src={ bibliografia } alt="" />  <Link id="bibliografias" to="/bibliografia">Bibliografia</Link>
    </div>

     </div>

    </div>
    </div>


    <div className="desktop">

    <img src={robokids} alt="logo da robokids"  id='Dimg'/>

      <div className="Ditens">

    <div className="Dinicio">
      <Link id="Dinici" to="/">Inicio</Link>
    </div>
    <div className="Dsobre">
        <Link id="Dsobr" to="/sobre">Sobre</Link>
    </div>
    <div className="Dobjetivos">
        <Link id="Dobjetiv" to="/objetivos">Objetivos</Link>
    </div>
    <div className="Dequipamentos">
        <Link id="Dequipament" to="/equipamentos">Equipamentos</Link>
    </div>
    <div className="Dprojeto">
       <Link id="Dprojet" to="/projeto">Projeto</Link>
    </div>
    <div className="Dbibliografia">
        <Link id="Dbibliografias" to="/bibliografia">Bibliografia</Link>
    </div>

     </div>

    </div>

    

    </>
    )
}

export default Sidebar