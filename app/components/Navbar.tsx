import Image from 'next/image';
import logo from './assets/logo.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/globals.css'; 

const Navbar = () => {
  return (
    <nav className='navcontainer'>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ padding: '8px', backgroundColor: '#2C4D5F', fontFamily: 'Bahnschrift, sans-serif' }}>
        <Grid item xs={12} sm={4} md={3}>
          <Image className='logo' src={logo} alt="Logo" width={100} height={50} />
        </Grid>
        <Grid item xs={0} sm={8} md={9} container justifyContent="flex-end">
          <Grid item>
            <ul className="navlinks">
              <li className='navitem'><Typography variant="body1">Acceuil</Typography></li>
              <li className='navitem'><Typography variant="body1">Nos services</Typography></li>
              <li className='navitem'><Typography variant="body1">Produits</Typography></li>
              <li className='navitem'><Typography variant="body1">Solutions</Typography></li>
              <li className='navitem'><Typography variant="body1">Contact</Typography></li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;