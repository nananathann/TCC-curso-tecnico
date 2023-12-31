import './css/bibliografia.css'
import link from './images/Linkk.png'

import Header from './componentes/header.jsx'
import Sidebar from './componentes/sidebar.jsx'


function Bibliografia () {
return (
    <>

    <Header />

<body>

    <Sidebar />

    <main className='mainBibliografia'>

    <h1 className='h1Bibliografia'> Bibliografia</h1>


    <div className="paragrafo">
        <p>Basicamente esse trabalho será um carrinho de brinquedo movido a sensores onde pesquisamos e vimos que há modelos parecidos na internet mas que a base será a mesma que fica um pouco mais fácil de executar, também vimos vídeos que mostram como funciona a montagem e como ele fica finalizado.</p>
    </div>

    <div className="paragrafo2">
        <p>A diferença será que ele não será movido a controles e sim sensores de aproximação onde o carrinho fica livre para andar uma área especifica. Vimos também alguns vídeos que mostram como funciona o sistema bluetooth pois ainda não está definido mas pretendemos fazer um app que monitora o carro.</p>
    </div>

    <div className="linhaBiblio"></div>
    

    <img src={link} alt="imagem de um simbolizador de links" id='imgLink' />


    <div className="links">
        <ul>
            <li>https://www.youtube.com/watch?v=qfQJ_C8JVwc</li>
            <li>https://youtu.be/GjL_Zg6N19Q</li>
            <li>https://youtu.be/5Gl00AlYIR0</li>
            <li>https://youtube.com/shorts/
                Mmm2BA8QPvg?feature=share</li>
            <li>https://www.makerhero.com/blog/
                como-fazer-um-carrinho-de-controle-
                remoto-simples-com-bluetooth/</li>
            <li>https://youtube.com/shorts/
                AOPQhCRbnFs?feature=share</li>
            <li>https://blog.eletrogate.com/
                robo-seguidor-de-linha-tutorial-completo/</li>
            <li>https://portal.vidadesilicio.com.br/
                robo-seguidor-de-linha/</li>
            <li>https://www.youtube.com/watch?v=82zbSgUhJdE</li>
        </ul>
    </div>
    <div className="linhaBiblio2"></div>


    </main>
</body>
    </>
)

}

export default Bibliografia