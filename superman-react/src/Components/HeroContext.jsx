import '../Styles/HeroContext.css';

import arrowDown from '../Assets/logos/flèche_down_header.png';
import React from 'react';
import img1 from '../Assets/images/img2.png';
import img2 from '../Assets/images/img3.png';
import img3 from '../Assets/images/img4.png';
import img4 from '../Assets/images/img5.png';
import img5 from '../Assets/images/img6.png';
import img6 from '../Assets/images/img7.png';
import img7 from '../Assets/images/img8.png';
import img8 from '../Assets/images/img9.png';
import img9 from '../Assets/images/img10.png';




const HeroContext = () => {
    return (
        <div className="heroContext">
            <img className="flèche_down" src={arrowDown} alt="flèche_down_header" />
            <div className='IntheMovie'>
                <h1 className='heroContext-title'>SUPERMAN AU CINÉMA</h1>
                <p className='heroContext-texte'>Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine.
                    Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son costume et devient Superman, l’homme d’acier aux yeux du monde.
                </p>
                <div className='personnage-superman'>
                    <img src={img1} alt='img1' />
                    <img src={img2} alt='img2' className='hero2' style={{ width: "304px", height: "494px" }} />
                    <img src={img3} alt='img3' style={{ width: "304px", height: "494px" }} />
                </div>
            </div>
            <div className='nemesis'>
                <h1 className='heroContext-title'>NÉMÉSIS</h1>
                <p className='heroContext-texte'>Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor, fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman. Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires.
                </p>
                <div className='personnage-superman'>
                    <img src={img4} alt='img4' />
                    <img src={img5} alt='img5' className='hero2' style={{ width: "304px", height: "494px" }} />
                    <img src={img6} alt='img6' style={{ width: "304px", height: "494px" }} />
                </div>
            </div>
            <div className='allies'>
                <h1 className='heroContext-title'>ALLIES</h1>
                <p className='heroContext-texte'>Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur  le soutien indéféctible de sa mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”
                </p>
                <div className='personnage-superman'>
                    <img src={img7} alt='img1' />
                    <img src={img8} alt='img2' className='hero2' style={{ width: "304px", height: "494px" }} />
                    <img src={img9} alt='img3' style={{ width: "304px", height: "494px" }} />
                </div>
            </div>
           

        </div>
    )
}

export default HeroContext