import styles from '../styles/card.module.css';
import Image from 'next/image';
import biscrm from "./assets/crm.png"
import biserp from "./assets/EERP.png"
import biscompta from "./assets/comta.png"
import declaration from "./assets/declaration.png"
import bisnegoce from "./assets/negoce.png"
import pls from "./assets/plus.svg"
import '../styles/globals.css';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Grid className={styles.container}>
      <h1 className={styles.title}>Produits</h1>
      <p className={styles.subtitle}>
        Simplifiez la gestion de votre entreprise avec notre solution innovante.
      </p>
      <Grid className={styles.cards}>
        <Grid className={styles.cardC}>
    <Image className='Cardlogo' src={biscrm} alt="" />
          <p className={styles.subtitleCard}>
            bis négoce optimise la chaîne de gestion efficace des stocks et des processus logistiques.
          </p>
          <button className="btncard">Découvrez Plus <Image className={styles.pls}  src={pls} alt=""/></button>
        </Grid>
        <br />
        <Grid className={styles.cardD}>
        <Image className='Cardlogo' src={biscrm} alt="" />
          <p className={styles.subtitleCard}>
            bis.crm optimise la gestion des interactions clients pour améliorer le service.
          </p>
          <button className="btncard">Découvrez Plus</button>
        </Grid>
        <Grid className={styles.card}>
        <Image className='Cardlogo' src={biscompta} alt="" />
          <p className={styles.subtitleCard}>
            bis compta automatise les processus financiers pour améliorer la précision et lefficacité.
          </p>
          <button className="btncard">Découvrez Plus</button>
        </Grid>
        <Grid className={styles.card}>
        <Image className='Cardlogo' src={bisnegoce} alt="" />
          <p className={styles.subtitleCard}>
            bis.erp intègre et optimise les processus opérationnels pour une gestion plus efficace.
          </p>
          <button className="btncard">Découvrez Plus</button>
        </Grid>
        <Grid className={styles.card}>
        <Image className='Cardlogo' src={bisnegoce} alt="" />
          <p className={styles.subtitleCard}>
            bis.dec améliorer lefficacité opérationnelle avec un engagement fort envers la durabilité et linnovation.
          </p>
          <button className="btncard">Découvrez Plus</button>
        </Grid>
      </Grid>
    </Grid>
  );
}

