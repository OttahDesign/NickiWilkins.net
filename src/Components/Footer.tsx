import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  width: 40%;
  padding: 25px 0px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    flex-direction: row;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const ContactsAndSocials = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;
`;
const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const PagesOuter = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`;
const PagesInner = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const FooterRight = styled.div`
  display: flex;
  width: 40%;
  max-width: 600px;
  padding: 25px 0px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
  flex-shrink: 0;
  text-align: right;
  @media screen and (max-width: 700px) {
    align-items: center;
    width: 100%;
    text-align: left;
  }
`;
const Plink = styled(Link)`
  color: var(--Primary-Dark, #8c1c1c);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%;
  letter-spacing: -0.8px;
  align-self: stretch;
  margin: 0;
`;
const Line = styled.div`
  height: 200px;
  width: 1px;
  background-color: var(--Primary-Dark);
  opacity: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 1px;
  }
`;
const Icons = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Insta = styled(FaInstagram)`
  width: 80%;
  height: 80%;
`;
const Substack = styled(BsSubstack)`
  width: 60%;
  height: 60%;
`;
function Footer() {
  const location = useLocation();
  let containerBackground = "var(--Primary-Light)";
  let textColor = " var(--Primary-Dark)";
  if (
    location.pathname === "/" ||
    location.pathname === "/birthing-wisdom" ||
    location.pathname === "/retreats" ||
    location.pathname === "/transformative-mentoring"
  ) {
    containerBackground = "var(--Accent-Dark)";
    textColor = "var(--Primary-Light)";
  }
  return (
    <Container style={{ backgroundColor: containerBackground }}>
      <FooterLeft>
        <ContactsAndSocials>
          <p style={{ color: textColor }}>
            contact:
            <br />
            <a
              style={{ color: textColor }}
              href="mailto:nwilkinsmentor@gmail.com"
            >
              nwilkinsmentor@gmail.com
            </a>
          </p>
          <Socials>
            <Icons
              href="https://www.instagram.com/_nickiwilkins_/"
              style={{ color: containerBackground, background: textColor }}
            >
              <Insta />
            </Icons>
            <Icons
              href="https://substack.com/@nickiwilkins?utm_source=user-menu
"
              style={{ color: containerBackground, background: textColor }}
            >
              <Substack />
            </Icons>
          </Socials>
        </ContactsAndSocials>
        <PagesOuter>
          <PagesInner>
            <Plink to="/" style={{ color: textColor }}>
              Home
            </Plink>
            <Plink to="/about" style={{ color: textColor }}>
              About
            </Plink>
            <Plink to="/contact" style={{ color: textColor }}>
              Contact
            </Plink>
            <Plink to="http://eepurl.com/i3rdLQ" style={{ color: textColor }}>
              Mailing List
            </Plink>
          </PagesInner>
          <PagesInner>
            <Plink to="/birthing-wisdom" style={{ color: textColor }}>
              Birthing Wisdom
            </Plink>
            <Plink to="/transformative-mentoring" style={{ color: textColor }}>
              Transformative Mentoring
            </Plink>
            <Plink to="/retreats" style={{ color: textColor }}>
              Retreats
            </Plink>
          </PagesInner>
        </PagesOuter>
      </FooterLeft>
      <Line style={{ backgroundColor: textColor }} />
      <FooterRight>
        <p style={{ color: textColor }}>
          I guide women navigating the soulfulness of midlife, menopause, and
          elderhood, revealing heart-based wisdom, gifts, and purpose for a
          compassionate and regenerative world.
        </p>
        <p style={{ fontSize: "12px", color: textColor }}>
          Copyright @ 2024 Nicki Wilkins     All rights reserved
        </p>
      </FooterRight>
    </Container>
  );
}

export default Footer;
