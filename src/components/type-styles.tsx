import styled from "styled-components";
import { device } from "./breakpoints";

const Title = styled.h1`
  font-size: 64px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media ${device.sm} {
    font-size: 40px;
  }
`;

const Heading1 = styled.h2`
  font-size: 48px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media ${device.sm} {
    font-size: 36px;
  }
`;

const Heading2 = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Heading3 = styled.h4`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

const Heading4 = styled.h5`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.02em;
`;

const Heading5 = styled.h6`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

const BodyLarge = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.02em;
`;

const Body = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

const BodySmall = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0em;
`;

export {
  Title,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  BodyLarge,
  Body,
  BodySmall,
};
