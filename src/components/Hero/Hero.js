import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Div } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal Portoflio
      </SectionTitle>
      <SectionText>
        My purpose is to build clean architecture webapps that can perform at
        any scale and act as a tool to change the world.
      </SectionText>
      <Div>
        <Button>Learn More</Button>
      </Div>
    </LeftSection>
  </Section>
);

export default Hero;
