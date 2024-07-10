import styled from "styled-components";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const ParalaxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: calc(100svh - 60px);
  overflow-y: scroll;
`;
const SplotchTopLeft = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 1000px) {
    width: 300px;
    top: -95px;
  }
`;
const SplotchMiddleRight = styled.svg`
  position: absolute;
  right: 0;
  bottom: -75%;
  width: 560px;
  @media (max-width: 1000px) {
    width: 400px;
    bottom: -55%;
  }
  @media (max-width: 780px) {
    right: -100px;
  }
  @media (max-width: 680px) {
    right: -200px;
  }
`;
const Venus = styled.svg`
  margin: 0;
  max-height: calc(100svh - 80px);
`;
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: calc(100svh - 60px);
`;
const HeroTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  z-index: 1;
  margin-left: 80px;
  width: 600px;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;
const ExploreDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: 20%;
`;

const ExploreText = styled.p`
  font-family: Cinzel;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 114%; /* 15.96px */
  letter-spacing: 0.14px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const Section2 = styled.div`
  min-height: calc(100svh - 60px);
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
`;
const SplotchBottom = styled.svg`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const SecondTextDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 500px;
  margin-left: 80px;
  margin-bottom: 150px;
  margin-right: 470px;
`;

const Triskelion = styled.svg`
  margin-bottom: 300px;
  margin-left: 100px;
  @media (max-width: 1400px) {
    margin-left: 20px;
  }
`;

const Orb1 = styled.svg`
  position: absolute;
  top: -150px;
  z-index: -5;
`;

const Orb2 = styled.svg`
  position: absolute;
  bottom: 50px;
  right: 10px;
  z-index: -3;
`;

const Section3 = styled.div`
  width: 100%;
  min-height: calc(100svh - 60px);
  background-color: #8c1c1c;
  position: relative;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  overflow: hidden;
`;

const StickyScrollDiv = styled.div`
  min-height: 500vh;
  width: 100%;
`;

const ThirdTextDiv = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
`;

const Spiral = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(40deg);
`;
const SpiralTextAxis = styled.div`
  position: absolute;
  height: 760px;
  width: 760px;
  border-radius: 100%;
`;

const Section4 = styled.div`
  min-height: calc(100svh - 60px);
`;

const Footer = styled.div`
  min-height: 200px;
`;
function LandingPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: targetRef,
  });
  const scrollValues = [0.29, 0.82];
  const rotate = useTransform(scrollYProgress, scrollValues, [
    "20deg",
    "-340deg",
  ]);
  const rotate1 = useTransform(scrollYProgress, scrollValues, [
    "-110deg",
    "250deg",
  ]);
  const fontSize1 = useTransform(
    scrollYProgress,
    [0.29, 0.32, 0.79, 0.82],
    ["36px", "15px", "15px", "36px"]
  );
  const rotate2 = useTransform(scrollYProgress, scrollValues, [
    "-155deg",
    "205deg",
  ]);
  const fontSize2 = useTransform(
    scrollYProgress,
    [0.31, 0.33, 0.355, 0.37],
    ["15px", "36px", "36px", "15px"]
  );
  const rotate3 = useTransform(scrollYProgress, scrollValues, [
    "-200deg",
    "160deg",
  ]);
  const fontSize3 = useTransform(
    scrollYProgress,
    [0.38, 0.4, 0.425, 0.445],
    ["15px", "36px", "36px", "15px"]
  );
  const rotate4 = useTransform(scrollYProgress, scrollValues, [
    "-245deg",
    "115deg",
  ]);
  const fontSize4 = useTransform(
    scrollYProgress,
    [0.44, 0.47, 0.495, 0.51],
    ["15px", "36px", "36px", "15px"]
  );
  const rotate5 = useTransform(scrollYProgress, scrollValues, [
    "-290deg",
    "70deg",
  ]);
  const fontSize5 = useTransform(
    scrollYProgress,
    [0.5, 0.53, 0.56, 0.58],
    ["15px", "36px", "36px", "15px"]
  );
  const rotate6 = useTransform(scrollYProgress, scrollValues, [
    "-335deg",
    "25deg",
  ]);
  const fontSize6 = useTransform(
    scrollYProgress,
    [0.58, 0.6, 0.625, 0.645],
    ["15px", "36px", "36px", "15px"]
  );
  const rotate7 = useTransform(scrollYProgress, scrollValues, [
    "-20deg",
    "340deg",
  ]);
  const fontSize7 = useTransform(
    scrollYProgress,
    [0.645, 0.665, 0.69, 0.715],
    ["15px", "36px", "36px", "15px"]
  );
  const rotate8 = useTransform(scrollYProgress, scrollValues, [
    "-65deg",
    "295deg",
  ]);
  const fontSize8 = useTransform(
    scrollYProgress,
    [0.715, 0.735, 0.755, 0.78],
    ["15px", "36px", "36px", "15px"]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  return (
    <ParalaxWrapper ref={targetRef}>
      <SplotchTopLeft
        width="438"
        height="593"
        viewBox="0 0 438 593"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 592.499C0 592.499 110.329 527.201 146.132 447.04C179.211 372.977 106.178 310.679 146.132 239.959C187.568 166.613 269.902 185.411 334.068 130.039C379.678 90.6798 437.376 0 437.376 0H0V592.499Z"
          fill="#8C1C1C"
        />
      </SplotchTopLeft>
      <SplotchMiddleRight
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 558 1325"
        fill="none"
      >
        <path
          d="M558 0.49999C558 0.49999 552.265 -14 509.632 191C467 396 453.029 415.933 380.176 467.082C318.745 510.212 333.507 580.291 273.712 625.582C189.626 689.273 41.0419 575.633 6.30272 674.163C-24.248 760.813 62.7077 811.019 128.761 875.846C202.119 947.84 310.95 913.576 360.683 1002.94C396.993 1068.18 345.701 1126.16 380.176 1192.36C411.857 1253.19 446.447 1283.95 509.632 1312.58C544.5 1324.5 558 1324.5 558 1324.5V0.49999Z"
          fill="#8C1C1C"
        />
      </SplotchMiddleRight>
      <HeroContainer id="Hero">
        <HeroTextDiv>
          <h1 className="hero-title">begin again</h1>
          <h4>Finding purpose in the second half of life</h4>
          <ButtonDiv>
            <button className="primary-button">
              <p>let's work together</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="15"
                viewBox="0 0 37 15"
                fill="none"
              >
                <path
                  className="arrow"
                  d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
                  fill="#590000"
                />
              </svg>
            </button>
            <button className="secondary-button">
              <p>see what i do</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="15"
                viewBox="0 0 37 15"
                fill="none"
              >
                <path
                  className="arrow"
                  d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
                  fill="#590000"
                />
              </svg>
            </button>
          </ButtonDiv>
        </HeroTextDiv>
        <Venus
          viewBox="0 0 589 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="399" cy="190" r="190" fill="#FAD07D" />
          <circle cx="266" cy="680" r="140" fill="#FAD07D" />
          <ellipse cx="302" cy="475" rx="222" ry="219" fill="#FAD07D" />
          <g filter="url(#filter0_f_102_1726)">
            <path
              d="M108.938 394.252C84.4342 415.771 34.0895 496.781 66.6131 533.911C99.1367 571.041 168.194 581.589 169.085 602.263C169.976 622.938 156.164 659.071 181.114 673.57C200.717 684.962 279.576 681.164 313.436 662.599C340.539 647.739 355.315 601.841 346.405 577.37C337.494 552.898 306.753 517.034 319.673 495.515C332.593 473.997 352.642 408.176 338.831 402.691C325.02 397.206 261.309 391.721 249.28 397.206C237.251 402.691 192.252 422.943 187.351 418.302C182.45 413.661 197.153 372.312 185.124 360.076C175.5 350.287 132.106 377.375 108.938 394.252Z"
              fill="#8C1C1C"
              fill-opacity="0.15"
            />
          </g>
          <path
            d="M327.413 309.575C322.297 313.439 337.132 319.717 341.224 312.956C345.317 306.194 339.255 295.346 334.063 295.568C322.809 296.051 316.67 304.745 315.136 313.439C313.908 320.394 327.072 326.64 332.017 328.894C333.892 329.216 338.462 329.667 341.736 328.894C345.828 327.928 350.432 322.132 350.944 320.2C351.455 318.269 355.036 303.296 358.617 297.983C362.198 292.671 383.682 286.392 383.682 291.705C383.682 297.017 370.894 301.364 367.313 304.745C363.732 308.126 362.198 318.751 358.617 325.03C355.036 331.309 349.409 332.275 347.363 333.724C345.317 335.173 341.224 344.349 340.201 348.696C339.178 353.043 331.505 374.777 328.947 364.152C326.39 353.526 325.367 355.458 323.32 349.662C321.274 343.867 292.628 307.16 284.955 297.983C277.281 288.807 253.75 295.085 250.17 295.568C246.589 296.051 222.546 301.364 220.5 305.711C218.454 310.058 225.616 307.16 230.731 307.16C234.823 307.16 251.875 319.073 259.889 325.03C275.406 336.944 301.017 370.817 305.928 385.886C312.066 404.722 312.066 417.28 318.716 423.075C325.367 428.871 328.436 425.49 335.597 417.763C342.759 410.035 365.267 396.028 371.917 391.199C378.567 386.369 429.721 328.411 447.625 325.03C465.529 321.649 427.675 349.662 424.606 354.009C421.537 358.356 351.455 413.416 361.686 410.518C371.917 407.62 411.817 385.403 422.56 382.988C433.302 380.573 447.114 381.056 452.229 381.056C457.345 381.056 460.414 385.886 463.483 391.199C464.659 393.234 465.87 396.994 465.529 398.443C465.529 398.443 468.599 384.92 470.645 381.056C472.691 377.192 476.579 372.749 483.945 356.907C493.153 337.105 493.664 312.956 494.176 301.364C494.687 289.773 492.13 286.392 484.968 273.834C477.806 261.277 443.022 255.481 415.398 251.617C387.775 247.753 390.333 259.345 349.409 251.617M241.985 401.824C231.754 402.307 225.104 392.648 228.173 383.954C231.243 375.26 236.358 374.294 245.054 375.26C253.75 376.226 257.331 382.505 259.889 396.028C262.447 409.552 250.17 427.905 234.823 423.075C222.546 419.212 211.804 410.035 210.781 408.103C191.342 391.199 200.038 330.826 234.823 344.832C276.987 361.81 287.001 388.301 282.908 417.763C279.398 443.035 242.496 453.986 230.731 450.122C218.965 446.258 187.25 420.66 178.554 410.518C169.857 400.375 171.392 384.437 171.392 369.464C171.392 354.492 191.854 328.894 201.573 322.132C211.292 315.371 207.2 317.786 223.569 316.82C239.939 315.854 269.097 345.028 282.908 369.464C296.729 393.916 300.301 393.614 300.301 416.314C300.301 434.176 290.07 447.707 279.328 452.054C271.616 455.175 247.1 462.197 241.985 462.68C237.893 463.066 223.569 462.68 215.896 457.85C206.688 447.224 180.088 417.763 172.927 417.763C165.765 417.763 156.557 416.314 152.976 424.524C149.396 432.735 135.584 458.333 137.119 467.993C138.653 477.652 142.234 503.733 151.953 516.774C161.673 529.814 168.834 536.093 168.834 538.991C168.834 541.889 168.323 548.167 169.857 553.48C171.392 558.793 173.95 564.589 178.042 567.487C182.134 570.384 187.25 570.867 189.807 567.487C192.365 564.106 197.992 560.242 202.596 557.344C207.2 554.446 224.592 552.514 236.869 551.548C249.147 550.582 318.205 554.929 340.713 572.799C363.221 590.67 377.032 595.5 383.682 597.431C390.333 599.363 397.564 594.515 408.237 591.153C418.83 587.815 420.767 579.701 429.21 572.799C438.881 564.894 452.489 556.713 454.787 553.48C480.876 516.774 482.922 493.108 480.876 453.986C479.385 425.49 461.437 411.484 450.695 403.273C436.371 399.57 395.448 405.495 387.263 410.518C379.079 415.541 349.409 433.701 340.201 438.048C321.786 449.156 306.439 461.907 300.301 478.135C292.628 498.42 303.882 526.433 325.367 539.957C346.851 553.48 398.006 557.827 410.283 553.48C422.56 549.133 475.249 493.591 461.949 466.544C448.649 439.497 399.029 434.667 383.682 441.429C368.336 448.19 346.34 467.027 347.363 492.625C348.386 518.223 380.613 521.12 394.425 521.603C408.237 522.086 427.164 506.631 422.56 487.795C417.956 468.958 397.494 463.163 390.333 467.993M193.9 452.054C185.715 442.878 172.927 424.041 165.765 431.769C158.603 439.497 148.884 457.367 150.93 468.959C152.976 480.55 153.999 500.352 174.973 521.603C195.946 542.855 224.081 534.161 228.173 516.774C232.266 499.386 209.246 462.68 199.527 462.68C189.807 462.68 181.111 461.124 174.973 472.527C168.834 483.931 172.927 496.392 178.554 502.767C188.784 514.359 200.038 509.529 205.665 500.352C211.292 491.176 201.573 478.135 193.9 482.965M165.765 393.131C158.603 415.831 159.626 421.143 150.93 398.443C142.234 375.743 162.184 333.241 177.019 325.03C191.854 316.82 185.715 313.439 191.854 305.711C196.764 299.529 215.044 296.373 223.569 295.568C237.211 292.349 266.539 283.494 274.724 273.834C284.955 261.76 302.347 263.209 310.532 250.168C318.716 237.128 291.054 225.259 282.397 218.292C270.024 208.333 256.86 197.669 250.17 178.204C244.353 161.281 239.939 105.274 288.024 79.6761C336.109 54.0781 431.768 64.2207 458.879 92.7165C485.991 121.212 505.941 175.789 501.337 209.115C496.734 242.441 497.99 267.541 484.968 259.345C472.691 251.617 425.629 239.06 404.656 241.475C383.682 243.89 348.898 238.094 323.32 218.292C297.743 198.489 284.443 149.708 299.278 125.559C314.113 101.41 349.921 81.608 404.656 100.444C445.579 114.527 463.592 152.805 447.625 182.068C430.233 213.945 399.54 216.637 367.313 206.217C346.851 199.601 337.132 177.238 341.736 147.776C346.34 118.315 383.491 115.464 406.702 132.321C420.002 141.981 421.025 156.953 411.817 168.062C405.575 175.592 374.475 184.966 368.848 164.198M180.088 605.642C180.088 619.166 178.554 620.614 171.392 634.138C165.654 644.972 169.857 656.355 173.438 663.6C177.019 670.844 205.665 684.851 215.385 690.647C225.104 696.442 239.427 724.938 232.777 731.7C226.127 738.462 232.777 749.087 235.335 751.019C237.893 752.951 247.1 752.951 251.704 761.162C256.308 769.373 250.681 770.338 261.935 774.202C273.189 778.066 294.162 775.651 301.836 767.441C309.509 759.23 305.416 759.23 318.205 751.019C330.993 742.809 346.851 712.381 338.667 700.306C330.482 688.232 331.505 675.191 336.109 667.464C340.713 659.736 377.032 638.968 379.59 619.166C382.148 599.363 383.171 616.751 340.713 586.323C298.255 555.895 231.243 562.174 207.2 567.487C183.157 572.799 187.993 611.046 185.204 621.58C183.669 627.376 181.009 628.922 178.554 633.172C175.484 638.485 174.973 641.866 174.973 648.627C174.973 655.389 182.646 665.049 189.807 665.049C196.969 665.049 205.154 661.185 207.2 653.94C209.246 646.695 209.758 640.9 204.131 635.587C199.897 631.589 194.411 630.757 189.807 634.138C185.204 637.519 183.669 643.315 186.738 648.627C188.831 652.25 199.527 652.008 196.969 645.246"
            stroke="#590000"
            stroke-width="3"
          />
          <defs>
            <filter
              id="filter0_f_102_1726"
              x="0.799999"
              y="302.8"
              width="403.4"
              height="432.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="27.6"
                result="effect1_foregroundBlur_102_1726"
              />
            </filter>
          </defs>
        </Venus>
        <ExploreDiv>
          <ExploreText>scroll to explore</ExploreText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="15"
            viewBox="0 0 37 15"
            fill="none"
            style={{ transform: "rotate(90deg)" }}
          >
            <path
              d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
              fill="#8C1C1C"
            />
          </svg>
        </ExploreDiv>
      </HeroContainer>
      <Section2 id="Second">
        <Triskelion
          width="397"
          height="420"
          viewBox="0 0 397 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M207.928 264.873C210.118 232.071 210.107 207.452 194.829 174.338C226.11 195.705 239.957 201.245 277.345 207.349C247.251 224.567 230.436 238.501 207.928 264.873Z"
            fill="#8C1C1C"
          />
          <path
            d="M207.928 264.873C210.118 232.071 210.107 207.452 194.829 174.338M207.928 264.873C230.436 238.501 247.251 224.567 277.345 207.349M207.928 264.873C161.053 369.879 276.252 455.243 355.736 396.897C446.957 329.936 352.712 191.481 263.351 255.384C192.837 305.809 263.392 418.712 334.875 366.24C385.553 329.04 335.141 250.298 286.063 286.324C251.922 311.385 284.281 356.587 312.555 335.833C327.942 324.538 313.11 307.515 304.042 314.171M194.829 174.338C226.11 195.705 239.957 201.245 277.345 207.349M194.829 174.338C109.145 63.2013 -11.5551 157.354 5.30933 237.11C30.5526 356.49 197.629 324.146 171.509 215.259C152.087 134.292 37.3115 150.982 41.5562 226.1C45.3789 293.752 144.291 287.626 136.937 230.787C130.439 180.556 78.4499 199.018 78.6598 221.85C78.8888 246.764 107.307 241.865 101.752 228.705M277.345 207.349C402.566 193.416 410.538 42.3613 316.172 9.74189C212.771 -26.0006 147.345 119.714 249.861 164.316C324.477 196.779 387.321 79.8283 303.238 44.683C249.084 22.0474 205.219 103.5 258.844 127.348C276.949 135.399 293.104 129.287 301.565 117.33C310.027 105.373 306.085 84.7852 291.764 79.3752C276.997 73.7967 264.518 90.3453 276.226 97.3482"
            stroke="#8C1C1C"
            stroke-width="7"
          />
        </Triskelion>
        <SecondTextDiv>
          <h2>
            WISE
            <br />
            WILD
            <br />
            WHOLE
          </h2>
          <p>
            I offer transformational mentoring to women, guiding them through
            the various stages of the midlife metamorphosis.
            <br />
            This is when a woman rebirths her wholeness. It’s a soul initiation,
            a sacred pilgrimage to self.
            <br />
            She longs for an authentic and intuitive relationship with her body
            and her soul.
            <br />
            She learns to practice self-acceptance, self-love, self-loyalty.
            <br />
            She asks: Who am I now? What are my gifts? What’s my offering to the
            world?
            <br />A woman who travels this long, arduous spiritual journey will
            be strong in soulfulness, grounded in heart-based wisdom, and speak
            her truth.
          </p>
          <button className="primary-button">
            <p>meet nicki</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="15"
              viewBox="0 0 37 15"
              fill="none"
            >
              <path
                className="arrow"
                d="M35.8781 8.20711C36.2686 7.81658 36.2686 7.18342 35.8781 6.79289L29.5142 0.428932C29.1236 0.0384078 28.4905 0.0384078 28.0999 0.428932C27.7094 0.819457 27.7094 1.45262 28.0999 1.84315L33.7568 7.5L28.0999 13.1569C27.7094 13.5474 27.7094 14.1805 28.0999 14.5711C28.4905 14.9616 29.1236 14.9616 29.5142 14.5711L35.8781 8.20711ZM0 8.5H35.171V6.5H0V8.5Z"
                fill="#590000"
              />
            </svg>
          </button>
          <Orb1
            xmlns="http://www.w3.org/2000/svg"
            width="217"
            height="217"
            viewBox="0 0 217 217"
            fill="none"
          >
            <circle cx="108.5" cy="108.5" r="108.5" fill="#FAD07D" />
          </Orb1>
          <Orb2
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
          >
            <circle cx="60" cy="60" r="60" fill="#FAD07D" />
          </Orb2>
        </SecondTextDiv>
        <SplotchBottom
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 206"
        >
          <path
            d="M0 206H1440V80C1440 80 1237.49 10.7817 1102.5 2.00005C870.274 -13.1072 752.925 118.349 520.5 130C316.552 140.224 0 80 0 80V206Z"
            fill="#8C1C1C"
          />
        </SplotchBottom>
      </Section2>
      <StickyScrollDiv>
        <Section3 id="Third">
          <ThirdTextDiv id="ThirdTextDiv">
            <h3>the circle of rebirth</h3>
          </ThirdTextDiv>
          <motion.div
            className="spiral-div"
            style={{
              rotate,
            }}
          >
            <Spiral
              className="spiral"
              id="Spiral"
              xmlns="http://www.w3.org/2000/svg"
              width="684"
              height="675"
              viewBox="0 0 684 675"
              fill="none"
            >
              <path
                d="M173.139 25.417C268.878 -6.52406 489.854 -30.6608 607.845 128.321C755.335 327.048 671.773 650.105 444.374 670.5C244.372 688.437 -20.4701 617.35 3.73096 372.835C27.9321 128.321 173.142 70.584 316.062 64.5C480.5 57.5 682.5 222.5 616 437.5C563.546 607.089 362.584 676.726 229.303 617.349C37.5212 531.911 58.9826 447.889 89.5764 325.632C120.17 203.374 174.189 112.012 355.332 128.321C479.5 139.5 579.502 289.11 565 389.828C541 556.514 362.638 614.989 265.377 569.202C168.116 523.414 114.234 430.423 136.152 348.289C169.987 221.5 279.546 168.186 382.273 208.095C461.951 239.049 519.309 310.303 501.908 396.437C486.664 471.895 405.104 531.5 355.332 531.5C305.56 531.5 256.324 511.155 229.303 462.522C194.701 400.241 211.952 331.296 283.642 287.397C325.955 261.486 378.163 270.592 407.387 297.781C430.218 319.023 451.965 353.954 444.374 389.828C434.185 437.976 388.665 469.444 355.332 468.5C321.998 467.556 274.053 436.56 274.053 403.989C274.053 358.202 312.866 325.632 344.373 336.96C344.373 336.96 385.322 350.2 390.035 372.835C394.5 394.274 386.033 415.315 366.291 423.343C346.81 431.265 318.352 425.5 316.062 403.989C314.596 390.214 319.178 374.381 332.501 372.835C343.419 371.568 353.031 378.723 355.332 389.828"
                stroke="#8C1C1C"
                stroke-width="3"
              />
            </Spiral>
            <SpiralTextAxis className="axis-1">
              <motion.p style={{ rotate: rotate1, fontSize: fontSize1 }}>
                1. The Call in the middle of the night
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-2">
              <motion.p style={{ rotate: rotate2, fontSize: fontSize2 }}>
                2. Preparation: the gathering of allies, the road of trials. A
                sorting of this from that
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-3">
              <motion.p style={{ rotate: rotate3, fontSize: fontSize3 }}>
                3. Awakening to feelings of loss and death
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-4">
              <motion.p style={{ rotate: rotate4, fontSize: fontSize4 }}>4. The descent</motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-5">
              <motion.p style={{ rotate: rotate5, fontSize: fontSize5 }}>5. Soul Quest</motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-6">
              <motion.p style={{ rotate: rotate6, fontSize: fontSize6 }}>6. The return</motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-7">
              <motion.p style={{ rotate: rotate7, fontSize: fontSize7 }}>
                7. Integration of the experience and the gift you received
              </motion.p>
            </SpiralTextAxis>
            <SpiralTextAxis className="axis-8">
              <motion.p style={{ rotate: rotate8, fontSize: fontSize8 }}>8. Ceremony</motion.p>
            </SpiralTextAxis>
          </motion.div>
        </Section3>
      </StickyScrollDiv>
      <Section4></Section4>
      <Footer></Footer>
    </ParalaxWrapper>
  );
}

export default LandingPage;
