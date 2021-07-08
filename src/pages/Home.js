import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PlanetOne from '../images/planet.svg'
import PlanetTwo from '../images/planet-2.svg';
import PlanetThree from '../images/planet-3.svg';
import PlanetFour from '../images/planet-4.svg';
 import Button  from '@material-ui/core/Button';
 import { Link } from 'react-router-dom';

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) /2);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnsLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

h1 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

p {
  margin: 2rem 0;
  font-size: 4rem;
  line-height: 1.1;
}
`;


const Image = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
max-width: 250px;
max-height: 250px;
`;

const StyledButton = styled(Button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
`;


const ColumnRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;


.img1 {
  top: 40px;
  left: 10px;
};

${Image}:nth-child(2) {
  top: 170px;
  right: 80px;
};

${Image}:nth-child(3) {
  top: 350px;
  left: 1px
};

${Image}:nth-child(4) {
  bottom: 40px;
  right: 60px;
};

.btnLogin {
    position: absolute;
    top: 5px;
    right: 10px;
}

`;



const Home = (props) => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
    }

  return (
    <Section>
            <Container>
                <ColumnsLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        Welcome to PTIT-RollCall
                            </motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >
                        Be Hard-Working to Success
          </motion.p>
                    <Link to="/login">
                    <StyledButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 0.95,
                            backgroundColor: '#67F6E7',
                            border: 'none',
                            color: '#000'
                        }}
                        component={motion.button}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    >
                        Get Started
                    </StyledButton>
                    </Link>
                </ColumnsLeft>
                <ColumnRight>                  
                    <Image className='img1'
                        src={PlanetOne}
                        alt='planet'
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={PlanetTwo}
                        alt='planet'
                        whileTap={{ scale: 0.6 }}
                        drag={true}
                        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={PlanetThree}
                        alt='planet'
                        whileTap={{ scale: 0.8 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image
                        src={PlanetFour}
                        alt='planet'
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    
                    {/* <LoginButton>Login</LoginButton> */}
                </ColumnRight>
            </Container>
        </Section>
  );
}
 
export default Home;