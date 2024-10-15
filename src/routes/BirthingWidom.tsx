import styled from "styled-components";
import { Link } from "react-router-dom";
import DDButton from "../Components/DropDownButton";
import "./projects.css";
import { motion } from "framer-motion";

const Box = styled.div`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 26px;
  background: var(--Primary-Dark);
  box-sizing: border-box;
`;

const BoxInnerNoBorder = styled.div`
  display: flex;
  padding: 5px 20px;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  align-self: stretch;
  box-sizing: border-box;
`;
const BoxInnerRoundedHalf = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 16px;
  border: 1px solid var(--Primary-Light);
`;
const RoundedHalfInnerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const SmallBox = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  padding: 25px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 28px;
  box-sizing: border-box;
  background: var(--Primary-Light);
`;
const Tick = styled.svg`
  width: 20px;
  height: 13.772px;
  stroke-width: 2px;
  stroke: var(--Primary-Light);
  flex-shrink: 0;
`;

interface Props {
  fadeInViewProps: {
    initial: { opacity: number };
    whileInView: { opacity: number };
    transition: { duration: number; ease: string };
    viewport: { once: boolean; margin: string };
  };
  MakeSplitTextAnim: (props: { children: string }) => JSX.Element;
}
function BirthingWisdom({ fadeInViewProps, MakeSplitTextAnim }: Props) {
  const DURATION = fadeInViewProps.transition.duration;
  const EASE = fadeInViewProps.transition.ease;

  return (
    <>
      <div className="page-container" key="Birthing Wisdom Page">
        <div className="title-frame">
          <h1 className="projects-title-h">
            <MakeSplitTextAnim>Birthing Wisdom</MakeSplitTextAnim>
          </h1>
          <motion.p
            className="projects-title-p"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: DURATION, ease: EASE, delay: 2.6 }}
            viewport={{ once: true }}
          >
            A 6-month online soul initiation for women travelling the midlife
            journey of rebirth. January-June 2025
          </motion.p>
        </div>
        <section className="section-frame" key="Foreword">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>Foreword</motion.h3>
            <motion.p {...fadeInViewProps}>
              Birthing Wisdom is a journey of soul initiation for women
              travelling the transition from menopause into elderhood. Whether
              in the early days of your midlife metamorphosis or in the middle
              of your menopausal years, this course provides you with a{" "}
              <b>
                <i>structure</i>
              </b>{" "}
              to{" "}
              <b>
                <i>initiate your Midlife Rebirth</i>
              </b>
              , and offers{" "}
              <b>
                <i>guidance</i>
              </b>{" "}
              as you tread its winding path. During this process, you will have
              the support of a{" "}
              <b>
                <i>community of women </i>
              </b>
              with whom to{" "}
              <b>
                <i>share your journey</i>
              </b>{" "}
              and rebirth. 
            </motion.p>
            <motion.p {...fadeInViewProps}>
              While this course shares themes and practices that are similar to
              my one-to-one sessions, Transformative Mentoring, what makes it
              distinct is that this is a structured program, designed to be
              shared with a community of women as they travel the path of their
              Midlife Rebirth.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              If you’re interested in a{" "}
              <b>
                <i>personalised, one-to-one journey</i>
              </b>{" "}
              of discovery and rebirth,{" "}
              <b>
                <i>built around you</i>
              </b>{" "}
              and your process, then take a look at{" "}
              <b>
                <i>Transformative Mentoring</i>
              </b>{" "}
              here.
            </motion.p>
            <motion.div className="col-to-row" {...fadeInViewProps}>
              <Link to={"/transformative-mentoring"} className="primary-button">
                <p>Transformative Mentoring</p>
              </Link>
            </motion.div>
          </div>
        </section>
        <section className="section-frame-dark" key="Letter">
          <div className="section-text-container">
            <motion.h3 className="white" {...fadeInViewProps}>
              A letter from Nicki, your guide
            </motion.h3>
            <motion.p className="white" {...fadeInViewProps}>
              Hello friend,
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              Menopause is an initiation of the soul. Even though it’s not
              honoured for what it is—one of the most profound transitions in a
              woman’s life—it deserves to be.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              And it’s not just the cellular changes that need to be addressed.
              The soulful ones beg for our attention too. In fact, many of us
              walk this transition alone. We should change that.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              Let’s build a community where the wise woman is visible and
              honoured. Her vitality, cherished. Her heart-based wisdom, valued.
              Her name, spoken with pride. Let’s build a community where she has
              space to rebirth, in her own time.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              I offer this journey for you to creatively explore your soulful
              identity as a Woman of Wisdom. You’re already doing it. Diving
              deep into your inner landscape, looking for clues about your
              authentic self and your soul’s purpose. 
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              Growth and rebirth—they don’t happen in a straight line. It’s
              always a circle. The transition from menopause to your wisdom
              years is no different. This is a journey of circumambulation: a
              “walk around” something holy and sacred. A “circle around” you. A
              pilgrimage. 
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              I hold space for you to keep walking. I want you to find her. That
              wise, wild, whole you! The world awaits your return.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              In service,
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              Nicki
            </motion.p>
          </div>
        </section>
        <section className="section-frame" key="what is Birthing Wisdom?">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              What is <i>Birthing Wisdom</i>?
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              Menopause changes us on both the cellular and soulful level. It’s
              a time where we let go of what is dying to make room for the
              emergence of something new. Birthing Wisdom is a structured course
              designed to guide women on their pilgrimage to self, build a
              relationship with soul, and find purpose. This course is run for a
              group of women, offering a communal space to process this
              journey. 
            </motion.p>
            <motion.p {...fadeInViewProps}>
              This journey has many threads. While each rebirth is unique and
              organic, there are similar themes and desires that surface at this
              life stage transition. Jungians Bruce Baker and Jane Wheelwright
              identified these psychological-spiritual steps for the journey
              into wise elderhood. These steps heavily inform this course. 
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <Box style={{ padding: "20px 50px" }}>
                <ul className="white">
                  <motion.li {...fadeInViewProps}>
                    A review of one's life.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    An acceptance of death and the reality that life has finite
                    limits.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    A letting go of the dominance of ego.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    A turn towards honouring the truest self.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    A desire to connect with the soul.
                  </motion.li>
                  <motion.li {...fadeInViewProps}>
                    A longing to engage with one's purpose and to make an
                    offering of service.
                  </motion.li>
                </ul>
              </Box>
            </motion.div>
          </div>
        </section>
        <line className="line" />
        <section className="section-frame" key="your journey">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              So, what will <i>Your Journey</i> look like?
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              Birthing Wisdom is a course with two-fold intentions. It is an
              inner journey in which a woman births her Wise Woman Elder. It is
              also a collective of women who support each other on this journey
              to rebirth. By marrying these two intentions we find something the
              modern world does not offer. We find a space in which she can
              rebirth in her own time, and share the gifts she finds in the
              process. We find a space where she is valued, and her voice is
              spoken and heard.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              Here’s what the two-fold intentions look like in practice. We will
              meet as a group online for two hours, twice a month. We will use
              these bi-monthly sessions for teaching, learning, meditation,
              connection, and discussion. Once a month you will meet with Nicki
              for a one-on-one mentoring session. The time in between sessions
              is for personal reflection, soul practices, and creative
              expression.
            </motion.p>
            <motion.h4 {...fadeInViewProps}>
              On this journey you'll have access to
            </motion.h4>
            <motion.div {...fadeInViewProps}>
              <Box style={{ padding: "50px" }}>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>12 Live, interactive group sessions </b>
                    </i>
                    with Nicki
                  </motion.p>
                </BoxInnerNoBorder>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>6 Private, 60 minute sessions </b>
                    </i>
                    with Nicki
                  </motion.p>
                </BoxInnerNoBorder>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>12 Practical guides, </b>
                    </i>
                    one for each of the 12 modules, outlining practices and
                    exercises to deepen your soul-work.
                  </motion.p>
                </BoxInnerNoBorder>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>7 Guided soul encounter meditations </b>
                    </i>
                    with Nicki
                  </motion.p>
                </BoxInnerNoBorder>
                <BoxInnerNoBorder>
                  <motion.div {...fadeInViewProps}>
                    <Tick
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.97975L5.79532 14.8862L21 1.11426"
                        stroke="#FFF4DF"
                        stroke-width="2"
                      />
                    </Tick>
                  </motion.div>
                  <motion.p className="white" {...fadeInViewProps}>
                    <i>
                      <b>Additional readings and resouces </b>
                    </i>
                    that support your soul-work
                  </motion.p>
                </BoxInnerNoBorder>
              </Box>
            </motion.div>
          </div>
        </section>
        <line className="line" />
        <section className="section-frame" key="the threads">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              The <i>Threads </i> of Birthing Wisdom
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              There are many paths to Birthing your Wisdom. I weave some common
              threads into this journey to help you dive deep into the centre of
              your truest self.
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <Box style={{ padding: 10 }}>
                <BoxInnerRoundedHalf {...fadeInViewProps}>
                  <RoundedHalfInnerTop>
                    <h4 className="white">Story</h4>
                    <DDButton bg="var(--Primary-Light)" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
                <BoxInnerRoundedHalf {...fadeInViewProps}>
                  <RoundedHalfInnerTop>
                    <h4 className="white">Personal Discovery</h4>
                    <DDButton bg="var(--Primary-Light)" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
                <BoxInnerRoundedHalf {...fadeInViewProps}>
                  <RoundedHalfInnerTop>
                    <h4 className="white">The Wisdom Circle</h4>
                    <DDButton bg="var(--Primary-Light)" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
                <BoxInnerRoundedHalf {...fadeInViewProps}>
                  <RoundedHalfInnerTop>
                    <h4 className="white">Private Mentoring</h4>
                    <DDButton bg="var(--Primary-Light)" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
                <BoxInnerRoundedHalf {...fadeInViewProps}>
                  <RoundedHalfInnerTop>
                    <h4 className="white">Personal Study</h4>
                    <DDButton bg="var(--Primary-Light)" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
              </Box>
            </motion.div>
          </div>
        </section>
        <section className="section-frame-dark" key="the four stages">
          <div className="section-text-container">
            <motion.h3 className="white" {...fadeInViewProps}>
              The <i>Four Stages </i>of Birthing Wisdom
            </motion.h3>
            <motion.p className="white" {...fadeInViewProps}>
              Each journey is completely unique. Even within the community of
              women on your course, you may find that your journey to soul and
              the shape of your return is different from your sisters. But
              Birthing Wisdom will provide you with the same structured guidance
              as you walk the winding path to your own soul encounter. The
              course has four stages: Preparation, Dissolution, Soul Encounter,
              and Return.
            </motion.p>
            <motion.div {...fadeInViewProps}>
              <Box
                style={{ padding: "10px", background: "var(--Primary-Light)" }}
              >
                <BoxInnerRoundedHalf
                  {...fadeInViewProps}
                  style={{ borderColor: "var(--Primary-Dark)" }}
                >
                  <RoundedHalfInnerTop>
                    <h4>Preparation: Cultivating your innate wholeness</h4>
                    <DDButton bg="var(--Primary-Dark" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
                <BoxInnerRoundedHalf
                  {...fadeInViewProps}
                  style={{ borderColor: "var(--Primary-Dark)" }}
                >
                  <RoundedHalfInnerTop>
                    <h4>Dissolution: Softening the influence of Ego</h4>
                    <DDButton bg="var(--Primary-Dark" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
                <BoxInnerRoundedHalf
                  {...fadeInViewProps}
                  style={{ borderColor: "var(--Primary-Dark)" }}
                >
                  <RoundedHalfInnerTop>
                    <h4>Soul Encounter: Receiving gifts from Soul</h4>
                    <DDButton bg="var(--Primary-Dark" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
                <BoxInnerRoundedHalf
                  {...fadeInViewProps}
                  style={{ borderColor: "var(--Primary-Dark)" }}
                >
                  <RoundedHalfInnerTop>
                    <h4>Return: Integration and the embodiment of wisdom</h4>
                    <DDButton bg="var(--Primary-Dark" />
                  </RoundedHalfInnerTop>
                </BoxInnerRoundedHalf>
              </Box>
            </motion.div>
          </div>
        </section>
        <section className="section-frame" key="my role">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              My role as your <i>Transformative Mentor</i>
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              As your mentor, I’m like a midwife, holding space for you to
              rebirth your truest self, the most sacred part of you. I’m here to
              stand guard as you birth your unique wise woman elder.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              I offer a unique perspective from years of working with women in
              various stages of spiritual development. I bring 30+ years
              grounding in the spirituality of transformation, the study of the
              feminine life cycle, and a training ranging from the ordained
              priesthood to a variety of meditative and somatic practices. At
              the core of my work is my desire to reunite the division of the
              body and soul. I’m currently a Mentor for The Purpose Guide
              Institute, a poet, and an artist. 
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>I believe in your body’s intelligence.</b> That you have a deep
              intuitive sense about what’s right for you on this journey. My
              training in Focusing, an experience-based practice of
              self-reflection and meditation, helps locate that felt sense
              within.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>I am committed to listening, deeply, to your soul,</b> looking
              for your lost threads, I’m committed to working with you to help
              weave your purpose-filled life. To rediscover your innate
              wholeness.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>I’ve walked this midlife journey.</b> I know the themes and the
              patterns. I know its sacred path.
            </motion.p>
          </div>
        </section>
        <line className="line" />
        <section className="section-frame" key="the details">
          <div className="section-text-container">
            <motion.h3 {...fadeInViewProps}>
              The <i>Details</i>
            </motion.h3>
            <motion.p {...fadeInViewProps}>
              <b>When the course meets:</b>
              <br />
              Course begins on <b>4 January 2025</b> and meets{" "}
              <b>every other Saturday until 24 May 2025.</b>
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>There are 12 Group Sessions:</b>
              <br />4 Jan, 18 Jan, 1 Feb, 15th Feb, 1 March, 15 March, 29 March,
              12 April, 26 April, 10 May, 17 May, 24 May. All private sessions
              with Nicki will be arranged.
            </motion.p>
            <motion.p {...fadeInViewProps}>
              <b>The cost of Birthing Wisdom:</b>
              The 6-month online program is <b>£900</b>. This is a one-time
              Special Launch price.
            </motion.p>
          </div>
        </section>
        <section className="section-frame-dark" key="faqs">
          <div className="section-text-container">
            <motion.h3 className="white" {...fadeInViewProps}>
              Frequently asked <i>Questions</i>
            </motion.h3>
            <motion.p className="white" {...fadeInViewProps}>
              <b>
                <i>What do I need to participate?</i>
              </b>
              <br />
              The only equipment you’ll need is a computer or mobile device with
              an internet connection, a journal, and art supplies of your
              choice. You will receive the Zoom link to join our call ahead of
              time.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              <b>
                <i>How much time commitment does the course require?</i>
              </b>
              <br />5 hours per week. Participation of all participants in the
              practices is required to hold a sacred container for all. Please
              note that this journey involves an 8-hour Soul Quest out in
              nature.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              <b>
                <i>How can I best prepare for this course?</i>
              </b>
              <br />
              Some effective ways to prepare for this journey are to spend time
              in nature, support and nourish your body, deepen your personal
              relationships, engage in quiet contemplative practices, read
              mythology, and be creative.
              <br />
              <br />
              This program is for those who maintain a level of stability in
              their lives, are committed to fostering wellness, and are open to
              discovering wholeness.
            </motion.p>
            <motion.p className="white" {...fadeInViewProps}>
              <b>
                <i>
                  Note: this program is not recommended for those with ongoing
                  addiction, severe untreated trauma, or untreated mental
                  illness.{" "}
                </i>
              </b>
              If uncertain about your readiness, I recommend working with a
              coach or therapist for a time before embarking on this journey.
            </motion.p>
          </div>
        </section>
        <section className="section-frame-dark" style={{ padding: 0 }}>
          <line className="line-white" />
        </section>
        <section
          className="section-frame-dark"
          key="other ways to work with me"
        >
          <div className="section-text-container">
            <motion.h3 className="white" {...fadeInViewProps}>
              <i>Other ways</i> to work with me and this journey
            </motion.h3>
            <div className="col-to-row">
              <motion.div {...fadeInViewProps}>
                <SmallBox>
                  <motion.h4 {...fadeInViewProps}>
                    Individual sessions
                  </motion.h4>
                  <ul>
                    <motion.li {...fadeInViewProps}>
                      12 individual sessions with me, at your pace.
                    </motion.li>
                    <motion.li {...fadeInViewProps}>
                      These individual sessions will follow the structure of
                      Birthing Wisdom.
                    </motion.li>
                    <motion.li {...fadeInViewProps}>
                      In person or online. £1800 (This is a one-time special
                      launch price. Offer ends soon.)
                    </motion.li>
                  </ul>
                  <motion.div {...fadeInViewProps}>
                    <Link
                      to={"/transformative-mentoring"}
                      className="primary-button"
                    >
                      <p>Book now</p>
                    </Link>
                  </motion.div>
                </SmallBox>
              </motion.div>
              <motion.div {...fadeInViewProps}>
                <SmallBox>
                  <motion.h4 {...fadeInViewProps}>
                    Private Group sessions
                  </motion.h4>
                  <motion.p {...fadeInViewProps}>
                    Do you know a small group of women who would be interested
                    in this course? <i>(6-8 women)</i>
                    <br />
                    <br />
                    Would you like to deepen your bond as you travel this
                    journey together?
                    <br />
                    <br />
                    Contact me if you would like to book a private course, just
                    for your and your sisters.
                  </motion.p>
                  <motion.div {...fadeInViewProps}>
                    <Link
                      to={"/transformative-mentoring"}
                      className="primary-button"
                    >
                      <p>Book now</p>
                    </Link>
                  </motion.div>
                </SmallBox>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BirthingWisdom;
