import styles from "./hero.module.css"
import Image from "next/image";
import SocialIcons from './SocialIcons';
import ScrollDown from './ScrollDown';

const Hero = () => {
  return (
    
      <div className={styles.home} id="home">
          <div className={styles.intro}>
            <Image src="/images/me.jpg" width={100} height={100} objectFit={'cover'} alt="me"/>
            <h1 className="hero_name">Sami ul Haq</h1>
            <span className="hero_details">I'm a Front-End Developer</span>
            <SocialIcons />
            <a href="#contact" className='btn'>Hire ME</a>
            <ScrollDown />
          </div>
      </div>
    
  )
}

export default Hero;