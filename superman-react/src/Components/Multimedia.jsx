import '../Styles/Multimedia.css';

import React, { useState } from 'react';
import arrowleft from "../Assets/logos/icon_flèche_1.png";
import arrowRight from "../Assets/logos/icon_flèche_2.png";
import poster1 from "../Assets/images/img12.png";
import IconPlayer from "../Assets/logos/icon_player.png";

const Multimedia = () => {
    const contentList = [
        {
            title: "Action, Adventure",
            subTitle: "Superman Man of Steel",
            score: "7.1",
            text: "Clark Kent, malgré son apparence humaine normale, est l'un des derniers membres d'une race éteinte. Il se retrouve forcé de révéler son identité lorsque la Terre est envahie par une armée de survivants qui menacent détruire la planète.",
        },
        {
            title: "Action, Adventure",
            subTitle: "Superman (1978)",
            score: "7.4",
            text: "Un orphelin extra-terrestre est envoyé de sa planète mourante sur Terre, où il grandit et devient le premier et le plus grand super-héros de sa planète d'adoption.",
        },
        {
            title: "Action, Adventure",
            subTitle: "Batman V Superman",
            score: "6.4",
            text: "Craignant que les actions de Superman ne soient pas contrôlées, Batman affronte l'homme d'acier, tandis que le monde débat du type de héros dont il a vraiment besoin.",
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? contentList.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === contentList.length - 1 ? 0 : prevIndex + 1
        );
    };


    const currentContent = contentList[currentIndex];

    return (
        <div className="multimedia">
            <h1 className='heroContext-title'>MULTIMEDIA</h1>
            <div className="content-container">

                <div className="arrow-left" >
                    <img src={arrowleft} alt="" className="arrow-left" onClick={handlePrevClick} />
                </div>

                <div className="content-box">
                    <img src={poster1} alt="Poster" className="movie-poster" />
                    <div className="content-details">
                        <h3>{currentContent.title}</h3>
                        <h2>{currentContent.subTitle}</h2>
                        <p className='contentList-IMDB'>IMDB: <span className='IMDB-score'>{currentContent.score}</span></p> <br />
                        <p className='contentList-text'>{currentContent.text}</p>
                    </div>
                </div>
                <div className="arrow-right" >
                    <img src={arrowRight} alt="" className="arrow-right" onClick={handleNextClick} />

                </div>
            </div>
        <div className='video'>
            <div className='icon-play'>
                <img src={IconPlayer} alt="" className='icon-play'/>
            </div>

        </div>
        </div>

    );
};
export default Multimedia