import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import {
    Title,
    ProjectDescription,
    Separator,
    SectionTitle,
    SectionSubtitle,
    Paragraph
} from '../../components/kate-style-components/'
import { UnifyHeaderImage } from '../../components/kate-style-components/'
import ContentCarousel from '../content-carousel'

export default class Unify extends React.Component {
    render() {
        return (
            <Grid>
                <UnifyHeaderImage />
                <Title text="Unify" />
                <Separator />
                <ProjectDescription text="Interests-sharing network for everyone" />
                <ProjectDescription text="who wants to make feminist innovation and technology" />
                <SectionTitle text="Project Overview" />
                <Paragraph text="Unify team presents the high-fidelity prototype of the iOS application for FemTechNet users and people who want to share information about women in/and technology. This annotated portfolio shows the process of the application design through research from the ethnography interview, defining problems, research through design, and viable solutions with different types of prototypes." />
                <SectionTitle text="Finding Problems" />
                <Paragraph text="The design research started with ethnographic interviews with stakeholders from FemTechNet. Based on the information from the interviews, our team narrowed down the main problems into two issues: having too many different communication platforms and difficulties of maintaining the long-term involvement of students in the network." />
                <SectionTitle text="Research" />
                <SectionSubtitle text="Hunt Statement" />
                <Paragraph text="We are going to figure out how all the communities of FemTechNet communicate with each other so that we can identify the key factors that enhance or hinder the interaction within communities." />
                <ContentCarousel />
                <SectionSubtitle text="Personas" />
                <Paragraph text="The archetype of this persona is an educator and she represents a group of people who care to educate people." />
                <SectionSubtitle text="Data and Affordance" />
                <SectionTitle text="Solutions" />
                <Paragraph text="Unify team suggests two types of solutions as the team have developed both approaches to have more chances for the ideal solution." />
                <SectionSubtitle text="Creating Connections without Having the Central Hub (Decentralized Network)" />
                <Paragraph text="With this solution, the team has tried to solve one of the main problems that are related to organizational internal tasks. By integrating all the communication platforms, the stakeholder's using, the design tried to resolve the difficulties and complexity of communication." />
                <SectionSubtitle text="Integrating Communication Services to Reduce the Complexity" />
                <Paragraph text="This prototype has a priority on making stronger networks among members by matching users' similar interests and profiles. So that each member and group have their own networks to other members and groups without passing the center hub of the community." />
            </Grid>
        )
    }
}