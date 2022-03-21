import React from 'react';
import Footer from '../../components/layout/footer/footer';
import Founders from '../../components/layout/founders/founders';
import Header from '../../components/layout/header/header';
import './home.scss';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="pageHeader">
                <button type="button" className="language">English/Dutch</button>
            </div>

            <div className="container">
                <div className="title">
                    <p>Welkom bij</p>
                    <h1>
                        DIGI
                        <b>REAL</b>
                    </h1>
                </div>

                <div className="content">
                    <p className="content">
                        Zet twee onderwijsinstellingen die partner zijn van MindLabs
                        samen in een ruimte, en wat volgt is een prachtig
                        samenwerkingsverband. Een waardoor een netwerk opgezet wordt
                        waar bedrijven uit het zuiden van Nederland kunnen samenwerken
                        op het gebied van VR, AR en Al. En dat onder de noemer
                        DIGIREAL-XL. Hiermee bouwen Fontys ICT, Breda University of
                        Applied Sciences én MindLabs met andere partijen aan een
                        research, development & innovationcentrum. Het thema hierbij:
                        Digital Realities voor sociaaleconomische impact. Kartrekkers
                        van het project zijn Fontys ICT-lector Mark de Graaf en
                        BUas-lector Igor Mayer. Mayer trapt af: &quot;Technologie
                        ontwikkelt zich in een razendsnel tempo en is nu al ontzettend
                        ingewikkeld. Bedrijven realiseren zich maar al te goed dat ze
                        hier iets mee moeten. Maar wat? Dat weten ze nog niet. Daar komt
                        DIGIREAL-XL in beeld.&quot; De Graaf vult aan: &quot;Met
                        DIGIREAL-XL willen we een sterke onderzoeksgroep opzetten die
                        zich richt op Digital Realities. Een waar instanties,
                        organisaties en bedrijven kunnen aankloppen wanneer ze
                        ambitieuze vragen hebben over mixed realities. Zo slaan we een
                        brug tussen bedrijven die goed zijn in een bepaald onderdeel van
                        Digital Realities. Van het maken van games en het digitaliseren
                        tot aan het verwerken van data. Door die specialismen samen te
                        brengen binnen één grote netwerkorganisatie kunnen we innovaties
                        ontwikkelen die nodig zijn om te slagen op digitaal
                        gebied.&quot;
                    </p>
                </div>

            </div>

            <Founders />
            <Footer />
        </div>
    );
}

export default Home;
