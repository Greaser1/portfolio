import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id="projects">
   <SectionDivider style = {{marginLeft:"6.7rem"}}/>
   <SectionTitle style = {{marginLeft:"6.7rem"}} main>Projects</SectionTitle>
   <GridContainer>
    {
      projects.map(({id,image,icon,title,description,tags,source,visit})=>(
        <BlogCard  className={'content'} key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br/>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target="_blank">Open Website</ExternalLinks>
            <ExternalLinks href={source} target="_blank">Source Code</ExternalLinks>
          </UtilityList>
          <div className="card">
            <img className="picon" src={icon} height="250px"></img>
            <h1>{title}</h1>
         </div>
          </BlogCard>
      ))
    } 
   </GridContainer>

 </Section>
);

export default Projects;