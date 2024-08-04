import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import styled from 'styled-components';

const AppContainer = styled.div` max-width: 1200px; margin: 0 auto;`;

function App() {

  return (
    <AppContainer>
      <NavBar />
 
      <table>
        <tr>
          <td align="left" style={{backgroundColor: "white"}}>
            <h2>Incident Management</h2>
            <h3>What is the purpose of Incident Mangement</h3>
            <p>To minimise the impacts of incidents on the business by restoring normal service operation as quickly as possible.</p>
            <h3>Defininition of an Incident</h3>
            <p>An <b>Incident is an event which is not part of the standard operation of a service</b> and which causes or may cause disruption to or a reduction in the quality of services and customer productivity. </p>
            <p>It can also refer to an event that has not yet impacted the service but has the potential to do so. Incidents may arise from various factors, including hardware or software failures, network outages, cyber-attacks, or human errors. </p>
          </td>
          <td className="b" align="left" rowSpan={2} style={{backgroundColor: "Gold"}}>
            <h3>Customer Lens</h3>
            <p>I want my issues to be quickly resolved and not recur</p>
            <h3>What Does Good Look Like</h3>
            <ol>
              <li>Every outage is automatically detected by observability, and raised as an incident to the right team with an accurate and concise explanation of what has gone wrong as soon as it is detected. We dont wait for a cusomer to ring and tell us our service is down and we could even link the incident to the knowledge article that explains what to do.</li>
              <li>The team that is assigned the incident is prepared and ready to respond as quickly as possible, with the right tools, access to audit/error logs, and the right system access permissions to assess and identify the technical cause of the incident and the steps to recover the service. </li>
              <li>To minimise recovery time, every potential outage should be predicted that it could occur beforehand and documented as a potential known error and published in a Knowledge Article in Knowledge Management with instructions on "how to confirm this is what has gone wrong" and "the specific steps to recover the service as quickly as possible". The knowledge database should be easy to search and find the article you are looking for. </li>
              <li>Every subsequent incident occurance after the initial event, including from another impacted service, can be related to the initial incident record so that the blast radius of the event can be recognised and reported on. </li>
              <li>The team working on the incident have a simple but effective way to communicate the expected outage duration to the customers impacted by the incident. The team are aware of how an outage can impact the customers that depend on this service. </li>
              <li>If this is an instance of a critical outage (P1/P2), or a repeated outage then the incident is classified as a Problem, is linked to an existing Problem record or registered in Problem Management so we can work on making sure the incident never occurs again. </li>
              <li> </li>
            </ol>
          </td>
        </tr>
        <tr>
          <td align="left" style={{backgroundColor: "lightGray"}}>
            <h3>Process</h3>
            <p>1. Incident is detected (observability) or reported to the service desk and the event raised in Incident Mangement system.</p>
            <p>2. Level 1 Support assess the severity and impact of the event to assign the priority (P1, P2, P3, P4) </p>
            <p>3. The incident occurrence is defined in detail and triaged to ensure it is assigned to the right team.</p>
            <p>4. If there is no obvious quick resolution the ticket is assigned to Level 2 support.</p>
            <p>5. The support team investigates the technical cause of the incident, and searches for Knowledge Articles that may fit the events for instruction on how to recover the service.</p>
          </td>
        </tr>
      </table>
      <h3>Best Practice for a Quick Respolution</h3>
            <p>Firstly ensure the incident is clearly described, be specific. Getting the incident to the right support team early is critical to achieve a fast resolution.</p>
            <p>Configure your support teams and deadlines to meet your Availability Objective</p>
            <p>If you set your SLA to be 99.99% uptime for example, then that gives you 52 minutes of downtime per year. So you have to ensure each incident is promoted through the levels in the right timeframes. If a ticket sits in level 1 support team for over 52 minutes, then you have used up all your available time in one go.</p>
            <p>Each level of support needs to know what is expected of them when an incident occurs.</p>
            <p>Each level of support needs to know the clock is ticking and complete their work in the allotted timeframe, or promote the ticket to the next level if they cant resolve it.</p>
            <p>Each level of support needs to know how to recognise what they can do to recover, and what they cant, and assess what to do next.</p>
            <p>Early incident resolution can be improved by ensuring every Known Error is documented in a Knowledge Article and that article must be linked to the Service Offering and easily found in a search for keywords.</p>
            <p>Every Knowledge Article must describe how to recognise the specific problem, so you can recognise that this is the answer, and provide the steps to quickly recover from that problem.</p>                
    </AppContainer>
  )
}

export default App
