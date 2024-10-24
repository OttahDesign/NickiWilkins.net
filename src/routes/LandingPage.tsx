import styled from "styled-components";
import Heroine from "../Components/Landing Page Components/Heroine";
import WiseWildWhole from "../Components/Landing Page Components/Introduction";
import TheCycle from "../Components/Landing Page Components/TheCycle";
import Conclusion from "../Components/Landing Page Components/Conclusion";
import Testimonials from "../Components/Landing Page Components/Testimonials";

const ColourBox = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex: 1 0 0;
  align-self: stretch;
  background: #590000;
  z-index: 200;
  position: relative;
`;
const StickyScrollDiv = styled.div`
  width: 100%;
  z-index: 0;
  position: relative;
`;
const SVG = styled.svg`
  width: 100%;
  position: relative;
  margin-bottom: -6px;
`
interface Props {
  fadeInViewProps: {
    initial: { opacity: number };
    whileInView: { opacity: number };
    transition: { duration: number; ease: string };
    viewport: { once: boolean; margin: string };
  };
  MakeSplitTextAnim: (props: {children:string}) => JSX.Element;
}
function LandingPage({fadeInViewProps, MakeSplitTextAnim}: Props) {
  return (
    <>
      <Heroine fadeInViewProps={fadeInViewProps} MakeSplitTextAnim={MakeSplitTextAnim}/>
      <WiseWildWhole fadeInViewProps={fadeInViewProps}/>
      <StickyScrollDiv>
      <TheCycle fadeInViewProps={fadeInViewProps}/>
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 206">
        <path
          d="M0 206H1440V80C1440 80 1237.49 10.7817 1102.5 2.00005C870.274 -13.1072 752.925 118.349 520.5 130C316.552 140.224 0 80 0 80V206Z"
          fill="#590000"
        />
      </SVG>
      <ColourBox>
        <Testimonials fadeInViewProps={fadeInViewProps}/>
        <Conclusion fadeInViewProps={fadeInViewProps}/>
      </ColourBox>
      </StickyScrollDiv>
    </>
  );
}

export default LandingPage;
