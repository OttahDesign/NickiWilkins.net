import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LinkText = styled(Link)`
  text-decoration: none;
  z-index: 1;
`;
const InfoSection = styled.div`
  display: flex;
  width: 100%;
  padding: 100px 0px 0px 0px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
const OuterFrame = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;
const InnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;
const CardFrame = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 90%;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid var(--Primary-Dark);
  box-sizing: border-box;
  text-align: center;
`;

const SplotchBottom = styled.svg`
  width: 100%;
  z-index: 0;
  margin-bottom: -2px;
`;
function Intro() {
  const DURATION = 0.7;
  const EASE = "easeInOut";
  const MARGIN = "-100px";

  return (
    <InfoSection id="Second">
      <OuterFrame>
        <motion.h3
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          Hi, I'm Nicki
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
           I’m a Transformative Mentor and certified Purpose Guide, a mother, a
          poet and most importantly, an elder. I offer wisdom and guidance to
          women as they move through menopause and transition into a new stage
          of life.
        </motion.p>
        <InnerFrame>
          <motion.h4
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE }}
            viewport={{ once: true, margin: MARGIN }}
          >
            My Journey
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE }}
            viewport={{ once: true, margin: MARGIN }}
          >
            10 years ago I began the journey I call the{" "}
            <i className="libre">Midlife Rebirth</i>. It was a profound
            transformation, helping me recover lost parts of myself: my
            intuition, creativity, power, and purpose.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE }}
            viewport={{ once: true, margin: MARGIN }}
          >
            Once I reached the end of my journey, I found an unexpected clarity.
            Having already spent 30+ years holding sacred space for women to
            rediscover their own innate wholeness, I knew I needed to offer my
            wisdom to a new generation of women.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE }}
            viewport={{ once: true, margin: MARGIN }}
          >
            <LinkText to={"about"} className="primary-button">
              <p>About Nicki</p>
            </LinkText>
          </motion.div>
        </InnerFrame>
      </OuterFrame>
      <OuterFrame>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          What is the <i>Midlife Rebirth</i>?
        </motion.h3>
        <InnerFrame>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE }}
            viewport={{ once: true, margin: MARGIN }}
          >
            The Midlife Rebirth is an antidote to the suppression of voice that
            so many women feel once they begin menopause. This stage in life was
            once a moment for celebration. A marker for the initiation of a new
            elder. A valued, empowered contributor to her community. The Earth
            is in a time of global crisis and we need Her voice again. The
            Midlife Rebirth aims to give that validation and empowerment to a
            new generation of Wise, Wild, Whole Women.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE }}
            viewport={{ once: true, margin: MARGIN }}
          >
            Menopause, by its nature, is a cellular change in a woman's body.
            But it’s so much more than this. It’s a transformation of a woman's
            soul. Through my practice, the Midlife Rebirth, I offer guidance
            through this transition of soul, an opportunity for rebirth.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE }}
            viewport={{ once: true, margin: MARGIN }}
          >
            During your Midlife Rebirth we will use myth, nature, and art to
            uncover your unique purpose. Then, by pairing your purpose discovery
            with the psychology, biology, and spirituality of menopause and
            elderhood, I will guide you to find a more Wise, Wild and Whole way
            of being. 
          </motion.p>
        </InnerFrame>
      </OuterFrame>
      <OuterFrame>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          Your Journey
        </motion.h3>
        <InnerFrame>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE }}
            viewport={{ once: true, margin: MARGIN }}
          >
            Each woman’s journey is unique. Her journey begins and ends in her
            own time based on her strengths, needs, and her life story. To
            address this, I offer a variety of ways to guide you on your{" "}
            <i className="libre">Midlife Rebirth</i>.
          </motion.p>
        </InnerFrame>
      </OuterFrame>
      <CardFrame>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          <Card>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
              className="libre italic center"
            >
              Transformative Mentoring
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
            >
              I offer one-to-one bespoke mentoring sessions for women who want
              motion. a more intimate, personal approach.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
            >
              <LinkText
                to={"/transformative-mentoring"}
                className="primary-button"
              >
                <p>Transformative Mentoring</p>
              </LinkText>
            </motion.div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          <Card>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
              className="libre italic center"
            >
              Birthing Wisdom
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
            >
              For women who are wanting to be part of a community as they move
              through this time of transition, I offer Birthing Wisdom, a
              6-month online program that includes group sessions as well as
              private mentoring sessions with me.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
            >
              <LinkText to={"/birthing-wisdom"} className="primary-button">
                <p>Birthing Wisdom</p>
              </LinkText>
            </motion.div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          viewport={{ once: true, margin: MARGIN }}
        >
          <Card>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
              className="libre italic center"
            >
              Retreats
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
            >
              For women looking for a shorter intensive, I run regular week-long
              Retreats.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: DURATION, ease: EASE }}
              viewport={{ once: true, margin: MARGIN }}
            >
              <LinkText to={"/retreats"} className="primary-button">
                <p>Retreats</p>
              </LinkText>
            </motion.div>
          </Card>
        </motion.div>
      </CardFrame>
      <SplotchBottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 206">
        <path
          d="M0 206H1440V80C1440 80 1237.49 10.7817 1102.5 2.00005C870.274 -13.1072 752.925 118.349 520.5 130C316.552 140.224 0 80 0 80V206Z"
          fill="#8C1C1C"
        />
      </SplotchBottom>
    </InfoSection>
  );
}

export default Intro;