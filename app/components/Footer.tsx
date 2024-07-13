import Image from 'next/image';
import logofooter from '../components/assets/logo-023.png' 
import '../styles/globals.css'; 
import fb from '../components/assets/fb.svg'
import insta from '../components/assets/insta.svg'
import tiktok from '../components/assets/tiktok.svg'
import linkedin from '../components/assets/linkedin.svg'
import { Grid } from '@mui/material';


const Footer=() =>{
  return (
    <Grid className="footer">
        <Image className='logofooter' src={logofooter} alt="Icon 1" />
 <Grid className='lists'>
   <ul className='list-contact'>contact:
      <li>000 216 000 000</li>
      <li>000 216 000 000</li>
      <li>000 216 000 000</li>
    </ul>
    
   <ul className='social-media'>
    <li><Image id='sc-med-icon'  src={fb} alt="" /></li>
    <li><Image id='sc-med-icon' src={insta} alt="" /></li>
    <li><Image id='sc-med-icon' src={tiktok} alt="" /></li>
    <li><Image id='sc-med-icon' src={linkedin} alt="" /></li>
   </ul>

    <ul className='adresse-list'>adresses:
      <li>lorem lorem lorem</li>
      <li>lorem lorem lorem</li>
      <li>lorem lorem lorem</li>
    </ul>
    </Grid>
    </Grid>
  )
}

export default Footer