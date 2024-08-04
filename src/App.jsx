import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <table>
        <tr>
	        <td style="background-color: White; width: 40%; vertical-align: top;">
            <h1>Incident Management</h1>
            <h3>What is the purpose of Incident Mangement</h3>
            <p>To minimise the impacts of incidents on the business. Quick identification and resolution of production outages have a direct impact on the Net Promoter Score (NPS)</p>
            <h3>Customer Lens</h3>
            <p>I want my issues to be quickly resolved and not recur</p>
          </td>
          <td rowspan=2 style="background-color: Gold; width: 60%;  vertical-align: top;">
            <h1>&nbsp;</h1>
            <h3>Defininition:</h3>
            <p>An <b>Incident is an event which is not part of the standard operation of a service</b> and which causes or may cause disruption to or a reduction in the quality of services and customer productivity. </p>
            <p>It can also refer to an event that has not yet impacted the service but has the potential to do so. Incidents may arise from various factors, including hardware or software failures, network outages, cyber-attacks, or human errors. </p>
            <p>The goal of incident management is to restore normal service operation as quickly as possible, minimizing the impact on business operations and ensuring optimal service quality and availability.</p>
          </td>
        </tr>
        <tr>
          <td style="background-color:lightGray;">
            <h3>What Does Good Look Like</h3>
            <p>Firstly ensure the incident is clearly described, be specific. Getting the incident to the right support team early is critical to achieve a fast resolution.</p>
            <p>Configure your support teams and deadlines to meet your Availability Objective</p>
            <p>If you set your SLA to be 99.99% uptime for example, then that gives you 52 minutes of downtime per year. So you have to ensure each incident is promoted through the levels in the right timeframes. If a ticket sits in level 1 support team for over 52 minutes, then you have used up all your available time in one go.</p>
            <p>Each level of support needs to know what is expected of them when an incident occurs.</p>
            <p>Each level of support needs to know the clock is ticking and complete their work in the allotted timeframe, or promote the ticket to the next level if they cant resolve it.</p>
            <p>Each level of support needs to know how to recognise what they can do to recover, and what they cant, and assess what to do next.</p>
            <p>Early incident resolution can be improved by ensuring every Known Error is documented in a Knowledge Article and that article must be linked to the Service Offering and easily found in a search for keywords.</p>
            <p>Every Knowledge Article must describe how to recognise the specific problem, so you can recognise that this is the answer, and provide the steps to quickly recover from that problem.</p>
          </td>
        </tr>
      </table>
    </div>
    </>
  )
}

export default App
