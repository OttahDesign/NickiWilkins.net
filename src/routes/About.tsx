import Navbar from "../Components/Navbar";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import { ScrollRestoration } from "react-router-dom";

const AboutDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Primary-Light);
`;

const Container = styled.div`
  background: rgba(255, 244, 223, 0.01);
  backdrop-filter: blur(10px);
  display: flex;
  padding: 100px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  width: 80%;
  max-width: 800px;
`;

const TitleSocialsAndImage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  @media screen and (max-width: 1420px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 50px;
  }
`;

const TitleAndSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1420px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SocialsIcons = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  @media screen and (max-width: 1420px) {
    flex-direction: row;
    align-items: center;
  }
`;

const NickiPortraitMain = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 300px;
  background: var(--Primary-Dark);
  flex-shrink: 0;
  @media screen and (max-width: 330px) {
    width: 200px;
    height: 200px;
  }
`;

const Line = styled.line`
  width: 100%;
  height: 1px;
  background: var(--Primary-Light);
  flex-shrink: 0;
`;

const Icons = styled.a`
  width: 80px;
  height: 80px;
  background: var(--Primary-Dark);
  border-radius: 50%;
  flex-shrink: 0;
`;

function About() {
  const [active, setActive] = useState(false);
  return (
    <>
      
      <AboutDiv key="About">
        <Navbar key="nav-bar" active={active} setActive={setActive} />
        <Container key="container">
          <TitleSocialsAndImage key="title-image-and-icons">
            <NickiPortraitMain key="nicki-portrait-main" />
            <TitleAndSocials>
              <h2 className="about-heading">About Nicki</h2>
              <SocialsIcons key="socials-icons">
                <Icons href="#">
                  <i className="instagram"></i>
                </Icons>
                <Icons href="#">
                  <i className="substack"></i>
                </Icons>
              </SocialsIcons>
            </TitleAndSocials>
          </TitleSocialsAndImage>
          <Line />
          <h3 className="about-sub-heading">MY HEART, MY LIFE, AND WORK</h3>
          <p className="about-text">
            Hello, I’m Nicki Wilkins. Here are 8 things about me...
            <br />
            <br /> <b>I AM A POEM.</b> And so are you! I see poems everywhere.
            Ones written and ones lived. Short ones. Long ones. Forever growing
            ones.
            <br />
            <br />
            <b>MY INTRODUCTION TO SOUL</b> started when my grandma walked me
            around her garden. Always visiting her compost heap (It was her
            holiest of holies), she taught me how to walk an ordinary
            pilgrimage. To circumnavigate. I’ve been hooked ever since.
            <br />
            <br />
            <b>MY FAVOURITE GIFT</b> was from a person I never met. My friend’s
            mother gave me a bag of books and in it was Down the Wild River
            North by Constance Helmerick telling of her journey by canoe to the
            Arctic Circle with her two teenage daughters. Someday I want to do
            that!
            <br />
            <br />
            <b>THE YEAR I TURNED 50</b>, I posed nude for a life drawing class.
            I thought it would help me accept my body. Once and for all. I wrote
            about it in my short collection of essays called, Inside Art.
            <br />
            <br />
            <b>MENOPAUSE</b> was a long and arduous soul journey, full of creativity,
            reflection, and growth. My inner life started to align with my outer
            one, and I found a deep self-love that still surprises me.
            <br />
            <br />
            <b>AS A CERTIFIED PURPOSE GUIDE</b> via Brody Hartman and Jonathan
            Gustin’s renowned training program, it’s an honour to guide women
            exploring the soulful side of menopause. I’ve been working with Soul
            for decades: as an English teacher and former ordained priest, and
            as a home educator, artist, and writer. Soul is my favourite
            collaborator.
            <br />
            <br />
            <b>IF I HAD TO DECLARE A SPIRITUAL PRACTICE</b> it would be haiku. I
            write while walking, just like the old haiku monks of Japan,
            counting syllables with my fingers.
            <br />
            <br />
            <b>MY VISION</b> is for a world full of wise women who speak their
            truth with love, authenticity, and clarity, offering their gifts to
            the next seven generations. A wise, wild, and whole woman has
            something very important to share. I believe she is our hope for the
            Earth, our home. She knows how transformation works. She’s a
            choice-maker.
          </p>
          <Line />
          <p className="about-text">
            <b>ELSEWHERE:</b>
            <br />
            <br />
            Instagram :: This is where I share my artwork.
            <br />
            <br />
            Substack :: The Soul Pelt Press is where I record the journey into
            my wisewoman years.
            <br />
            <br />
            #wisewildwhole :: Use this hashtag on Instagram to record your
            journey to your wise, wild, and whole self.
          </p>
        </Container>
        <Footer />
      </AboutDiv>
      <ScrollRestoration />
    </>
  );
}

export default About;