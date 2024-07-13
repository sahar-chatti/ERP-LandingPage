
import '../styles/globals.css';
import img1 from '../components/assets/icon1.png';
import img2 from '../components/assets/icon2.png';
import img3 from '../components/assets/icon3.png';
import pls from "./assets/plus.svg"
import Image from 'next/image';


const Services = () => {
    return (
        <Grid>
            <Grid>
                <h1  id='titre2'>Quel logiciel de gestion <span style={{ color: "#a1e1f0" }}>bis</span> vous choisir ?</h1>
                <h2 id='p'>Chaque entreprise est unique, avec ses propres méthodes de gestion, objectifs, marchés et défis. Nous comprenons cette Gridersité et créons des logiciels de factorisation sur mesure, adaptés aux besoins spécifiques de chaque entreprise.</h2>
                <p id='services'>Services</p>
                <h1 id='titre2-1'>Ce que nous faisons</h1>
                <Grid className='card-container'>

                <Grid className='card'>
                        <Image className='icon' src={img1} alt="Icon 1" />
                        <p id='card-description'>Digital canal</p>
                        <ul>
                            <li>Site web </li>
                            <li>Application mobile</li>
                            <li>Application Web/module </li>
                        </ul>
                        <button className='btncard'>Découvrir plus </button>
                    </Grid>
                    
                    <Grid className='card'>
                        <Image className='icon' src={img2} alt="Icon 2" />
                        <p id='card-description'>Environement 3D</p>
                        <button className='btncard'>Découvrir plus <Image id='pls' src={pls} alt="" /></button>
                    </Grid>
                 
                    <Grid className='card'>
                        <Image className='icon' src={img3} alt="Icon 3" />
                        <p id='card-description'>Smart Systems</p>

                        <button className='btncard'>Découvrir plus </button>
                    </Grid>
                </Grid>
                <h1 className='av-title'>Les avantages des logiciels de gestion bis</h1>
                <Grid className='avantage'>
                <ul>
                    <li><h3> lorem lorem lorem</h3></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam culpa, ut modi dicta placeat. Quidem, mollitia incidunt. Veritatis unde fugit nulla laboriosam officia itaque possimus ipsum. Cumque, minima expedita.i</p></li>
                    </ul>
                    <ul>
                    <li><h3> lorem lorem lorem</h3></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam culpa, ut modi dicta placeat. Quidem, mollitia incidunt. Veritatis unde fugit nulla laboriosam officia itaque possimus ipsum. Cumque, minima expedita.i</p></li>
                    </ul>
                    <ul>
                    <li><h3> lorem lorem lorem</h3></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam culpa, ut modi dicta placeat. Quidem, mollitia incidunt. Veritatis unde fugit nulla laboriosam officia itaque possimus ipsum. Cumque, minima expedita.i</p></li>
                    </ul>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default Services;
