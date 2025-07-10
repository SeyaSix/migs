import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';
import pinpon from './assets/pinpon2.jpg';
import taxi from './assets/TAXI.png';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;



const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
  pointer-events: none;
`;

const Header = styled.header`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  text-align: right;
  color: white;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CompanyName = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #3b82f6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Address = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #cbd5e1;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Phone = styled.p`
  font-size: 0.9rem;
  color: #cbd5e1;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const LoginButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 1000;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const SoftwareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
  max-width: 800px;
  width: 100%;
`;

const SoftwareCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const SoftwareImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: 120px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 0.75rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const SoftwareTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const SoftwareDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.9rem;
`;

function App() {
  const handleLogin = () => {
    alert('Fonctionnalité de connexion à implémenter');
  };

  const handleContact = () => {
    alert('Fonctionnalité de contact à implémenter');
  };

  return (
    <AppContainer>
        <BackgroundPattern />
      
      <Header>
        <Logo src={logo} alt="MIGS Logo" />
        <ContactInfo>
          <CompanyName>Micro Informatique Gestion Services</CompanyName>
          <Address>5 Rue du vivier - 33170 Gradignan</Address>
          <Phone>05.56.89.24.66</Phone>
        </ContactInfo>
      </Header>

      <MainContent>
        <HeroTitle>Solutions Informatiques Innovantes</HeroTitle>
        <HeroSubtitle>
        La société MIGS est située à Gradignan, à 10 Km de Bordeaux en Gironde.
        Elle a pour but le montage, la réparation, le dépannage, la vente de matériel informatique, 
        la création et la diffusion de logiciels et sites Web, la formation et l'assistance aux utilisateurs.
        Editeur de logiciels métier, nous vous proposons Taxi, Pinpon, Allowin,Bacchus...
        Nous sommes partenaires des logiciels SAGE, APISOFT et GESTMAG, des onduleurs POWERWARE, EATON et ECUS, 
        des constructeurs SONY, TOSHIBA, ACER, SAMSUNG, ASUS, MSI, GIGABYTE...
        </HeroSubtitle>
        
        <SoftwareGrid>
          <SoftwareCard>
            <SoftwareImage src={pinpon} alt="Pinpon Software" />
            <SoftwareTitle>Pinpon</SoftwareTitle>
            <SoftwareDescription>
            PINPON est un logiciel professionnel pensé et conçu pour les Ambulanciers.
            </SoftwareDescription>
          </SoftwareCard>
          
          <SoftwareCard>
            <SoftwareImage src={taxi} alt="Taxi Software" />
            <SoftwareTitle>Taxi</SoftwareTitle>
            <SoftwareDescription>
            TAXI 2008 est un logiciel professionnel pensé et conçu pour les taxis.
            </SoftwareDescription>
          </SoftwareCard>
        </SoftwareGrid>
      </MainContent>

      <LoginButton onClick={handleLogin}>
        Se connecter
      </LoginButton>
    </AppContainer>
  );
}

export default App; 