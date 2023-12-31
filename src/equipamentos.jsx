import './css/equipamentos.css'

import segue from './images/equipamentos/segue-linha.png'
import servo from './images/equipamentos/Servoo.png'
import ponteH from './images/equipamentos/pontesH.png'
import ultrassonico from './images/equipamentos/ultrassonicoo.png'
import motor from './images/equipamentos/motores.png'
import led from './images/equipamentos/Ledd.png'

import Header from './componentes/header.jsx'
import Sidebar from './componentes/sidebar.jsx'

function Equipamentos () {
return (
    <>
    
    <Header />

    <body>

        <Sidebar />

        <main className='mainEquipamentos'>
            <h1>Equipamentos</h1>

            <div className="elementos">

            <div className="seguidor">
                <img src={segue} alt="imagem de um sensor segue linha" />
                <h2 className='h2modulo'>Módulo 
                    Seguidor de 
                    Linha - 
                    TCRT5000</h2>
                <h3>R$10,00</h3>
            </div>

            <div className="servo">
                <img src={servo} alt="imagem de um servo motor" />
                <h2>Micro 
                    Servo 
                    Motor</h2>
                <h3>R$ 22,00</h3>
            </div>

            <div className="ponte">
                <img src={ponteH} alt="imagem de uma ponte h" />
                <h2>Ponte H 
                    Dupla 
                    L298N</h2>
                <h3>R$ 24,00</h3>
            </div>

            <div className="ultrassonico">
                <img src={ultrassonico} alt="imagem de um sensor ultrassonico" />
                <h2> Módulo 
                    Sensor de 
                    Distância 
                    Ultrassônico</h2>
                <h3>R$ 15,00</h3>
            </div>

            <div className="roda">
                <img src={motor} alt="imagem de um motor" />
                <h2> Kit Motor 
                    DC 3-6V + 
                    Roda 68mm</h2>
                <h3>R$ 18,00</h3>
            </div>

            <div className="led">
                <img src={led} alt="imagem de um led vermelho" />
                <h2>Led Difuso
                    5mm</h2>
                <h3>R$ 0,50</h3>
            </div>

            <div className="linhaszinhas">
            <div className="linhazinhaDeitada"></div>
            <div className="linhazinhaDeitada2"></div>
            </div>

            </div>

        </main>

    </body>
    </>
)

}

export default Equipamentos