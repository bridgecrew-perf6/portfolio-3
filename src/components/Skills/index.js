import React from "react"
import { SkillsWrapper, SkillsGroup } from "./SkillsElements"
import { Section, Container } from "../../templates/PageElements"

const Skills = () => {
  return (
    <>
      <Section>
        <Container>
          <SkillsWrapper>
            <SkillsGroup>
              <h1>Frontend frameworks / libraries</h1>
              <p>React / Gatsby.js / JQuery</p>
            </SkillsGroup>
            <SkillsGroup>
              <h1>Backend</h1>
              <p>Express.js(Node.js) / Magento 2</p>
            </SkillsGroup>
            <SkillsGroup>
              <h1>Database</h1>
              <p>MySQL / NoSQL(MongoDB)</p>
            </SkillsGroup>
            <SkillsGroup>
              <h1>Programming</h1>
              <p>Javascript / PHP / Python / Java / C++</p>
            </SkillsGroup>
            <SkillsGroup>
              <h1>Other</h1>
              <p>Redux / Graphql / Postman API</p>
            </SkillsGroup>
          </SkillsWrapper>
        </Container>
      </Section>
    </>
  )
}

export default Skills
