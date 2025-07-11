import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { Box } from '@chakra-ui/react'

const experiences = [
  {
    title: "Associate Business Analyst",
    company: "Technodege Solutions, India",
    duration: "February 2022 – September 2023",
    description: [
      "Designed and delivered data-driven reports by integrating datasets from SQL, Excel, and CRM systems to support marketing and finance decision-making.",
      "Collaborated with cross-functional teams to streamline requirement gathering, market mapping, and project documentation, reducing reporting errors and delivery cycles by 30%.",
      "Automated recurring reporting processes using Excel VBA and logic-based templates, freeing 12+ hours per week for sourcing insights and strategic analysis.",
      "Built dashboards to monitor KPIs and deal execution metrics, enhancing cross-functional planning and contract visibility."
    ]
  },
  {
    title: "Compliance Analyst",
    company: "S. Sathyanarayanan & Co.",
    duration: "February 2021 – January 2022",
    description: [
      "Facilitated statutory audits and collaborated with HR and Accounting to implement regulatory affairs procedures, reducing compliance issues by 20%.",
      "Coordinated 50+ board meetings, drafted disclosures, and managed governance records to support corporate compliance.",
      "Designed Excel-based trackers and legal documentation checklists, streamlining reporting processes and enhancing audit readiness."
    ]
  },
  {
    title: "Business Operations Coordinator",
    company: "Spiro Lifecare Pvt. Ltd.",
    duration: "August 2020 – January 2021",
    description: [
      "Planned and executed fundraising events by optimizing schedules and volunteer coordination, effectively reducing operational costs by 20%.",
      "Applied Excel to analyze event revenue and cost patterns, enabling a 15% improvement in financial planning for future initiatives."
    ]
  }
]

const skills = {
  languages: ["Python", "Java", "R"],
  dataManagement: ["SQL", "PostgreSQL"],
  dataTools: ["Excel - Advanced", "Power BI", "Tableau", "NetSuite", "Klipfolio", "Looker Studio", "Airtable"],
  software: ["Adobe Creative Cloud", "Microsoft Office Suite", "WordPress", "Adobe Analytics", "CRM", "QuickBooks", "HubSpot", "SEMrush"]
}

const education = [
  {
    degree: "MBA in Business Analytics",
    institution: "Pace University, NY",
    duration: "Jan 2024 – Dec 2025",
    location: "GPA: 3.93/4.0 | Courses: Visual Analytics, Marketing Performance, DBMS, Finance"
  },
  {
    degree: "M.Com in Business Management",
    institution: "Mumbai University, India",
    duration: "July 2019 – June 2021",
    location: "GPA: 3.9/4.0 | Courses: Statistics, Research, Strategic Management"
  }
]

const certifications = [
  "Project Destined – Private Equity Real Estate Program (2025)",
  "Commercial Real Estate Bridge Program – Project Destined x Newmark (2025)"
]

const awards = [
  "Selected for competitive private equity and real estate bridge programs"
]

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box minH="100vh" bg="gray.900">
          <Navbar />
          <Hero 
            name="VEEDHI DHANAK"
            title="Business Analyst | Data & Operations | MBA Candidate"
          />
          <About 
            description="MBA candidate with hands-on experience in business analysis, compliance, and operations. Proven ability to convert data into strategic insights, automate reporting, and support decision-making across marketing, finance, and legal verticals. Skilled in SQL, Excel, Power BI, and collaborative project execution with a strong foundation in real estate finance and analytics."
          />
          <Experience experiences={experiences} />
          <Skills skills={skills} />
          <Education education={education} certifications={certifications} awards={awards} />
          <Contact 
            email="dhanakveedhi@gmail.com"
            phone="(551) 280-6584"
            linkedin="https://www.linkedin.com/in/veedhi-dhanak"
            visa="F-1 Student Visa, U.S. (Valid)"
          />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
