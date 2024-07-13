import Grid from '@mui/material/Grid';
import '../styles/globals.css';
import bg from '../components/assets/back-sld-1.png'; // Replace 'bg.jpg' with your actual image file
import Image from 'next/image';

const Hero = () => {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ position: 'relative' }}>
      <Grid item xs={12}>
        <Image src={bg} alt="Background Image" layout="responsive" width={800} height={500} />
      </Grid>
      <Grid item xs={12}>
        <Grid container style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', width: '100%' }} justifyContent="center">
          <Grid item xs={10} sm={8} md={6} lg={12}>
            <Grid item xs={12}>
              <p id='title'>Scienta Solutions</p>
            </Grid>
            <Grid item xs={12}>
              <p id='description'>Logiciels de gestion et factorisation</p>
            </Grid>
            <Grid item xs={12}>
              <p id='paragraph'>
                La solution intelligente pour votre Business,<br />
                une developpement, une croissance assurée dans la <br />
                Gestion, Factorisation, Comptablilité, Finance...
              </p>
            </Grid>
            <Grid item xs={12}>
              <button className='btn'>Découvrir nos offres !</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Hero;