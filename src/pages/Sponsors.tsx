import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SponsorsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Section = styled(motion.section)<{ bgColor?: string }>`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
`;

const Content = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const SponsorGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SponsorCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const SponsorLogo = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SponsorDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const sponsors = [
  {
    id: 1,
    name: "Sponsor One",
    logo: "/path-to-logo1.png", // Replace with actual logo path
    description: "Sponsor One supports our mission to inspire students in STEM.",
  },
  {
    id: 2,
    name: "Sponsor Two",
    logo: "/path-to-logo2.png", // Replace with actual logo path
    description: "Sponsor Two provides resources for our robotics programs.",
  },
  // Add more sponsors as needed
];

const SponsorshipSection = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.xl};
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SponsorshipTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const SponsorshipContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const DonationButton = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  
  img {
    max-width: 200px;
    height: auto;
  }
`;

const Sponsors = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-40px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SponsorsContainer>
      <Section
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Content>
          <Title>Our Sponsors</Title>
          <SponsorGrid>
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} variants={cardVariants}>
                <SponsorLogo src={sponsor.logo} alt={sponsor.name} />
                <SponsorDescription>{sponsor.description}</SponsorDescription>
              </SponsorCard>
            ))}
          </SponsorGrid>

          <SponsorshipSection
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <SponsorshipTitle>Become a Sponsor</SponsorshipTitle>
            <SponsorshipContent>
              <LogoContainer>
                <img src="/bhef-robotics-logo.png" alt="BHEF Robotics Logo" />
              </LogoContainer>
              
              <p>Thank you for supporting the Beverly Hills High School Robotics Team! Your donations will go directly to paying costs such as the registration fee for competitions, parts for the robot, much needed tools, and more.</p>
              
              <p>Donors will be acknowledged on our website at www.team1515.com, monthly newsletter, and those who donate over $1,000 will receive a spot on our team shirts (which will be seen by thousands of people at competitions).</p>
              
              <p>Matching gifts are an essential part of our fundraising efforts, so please be sure to check if your employer offers matching contributions.</p>
              
              <p>If you wish to pay by check, please make the check payable to "BHEF" with a notation to direct your contribution to the Robotics Team and mail it to:</p>
              <p style={{ fontWeight: 'bold' }}>624 North Rexford Drive, Beverly Hills, CA 90210</p>

              <DonationButton 
                href="https://www.bhef.org/apps/form/bhhsrobotics"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </DonationButton>
            </SponsorshipContent>
          </SponsorshipSection>
        </Content>
      </Section>
    </SponsorsContainer>
  );
};

export default Sponsors;