import Image from 'next/image';
import bg2 from '../components/assets/partie-5.png'

const Solutions=()=> {
  return (
    <div className="container ">
    <Image src={bg2} alt="Background Image" layout="responsive" width={800} height={500} />
    <div className='solution'>
    <p id='title2'>Nos Solutions</p>
    <ul> 
    <li> lorem lorem lorem </li>
    <li> lorem lorem lorem </li>
    <li> lorem lorem lorem </li>
    <li> lorem lorem lorem </li>
    <li> lorem lorem lorem </li>
</ul>
      <button className='btn-'>Découvrer nos offress !</button>
    </div>
    <div className='newsletter'>
      <h2>Newsletter</h2>
      <input id='news' type="text" value="Adress email"/> <button className='btn-news'>Sinscrire</button>
    </div>
    </div>

  )
}

export default Solutions