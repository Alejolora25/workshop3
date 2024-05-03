import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { CardJob } from './Components/CardJob'

const employees = [
  {
    id: "offimedicas",
    jobTitle: "Tester de Software",
    skills: ['Resolution Capacity', 'Compliance Whit Indicators', 'Agile Work'],
    company: "OFFIMEDICAS S.A",
    type: " Presencial (Bucar...",
    salary: "$ 2.8M COP",
    vacancies: "1 Vacante",
    date: "1 days ago",
    benefits: ['certificaciones', 'Fiesta de fin año', 'capacitaciones'],
  },
  {
    id: "offimedicas",
    jobTitle: "Regente de farmacia Supernumerario",
    skills: ['Attitude To Service', 'Adaptation To Changes', 'Liderazgo'],
    company: "OFFIMEDICAS S.A",
    type: "Bucaramanga",
    salary: "$ 2.8M COP",
    vacancies: "1 Vacante",
    date: "1 days ago",
    benefits: ['certificaciones', 'Fiesta de fin año', 'capacitaciones'],
  },
  {
    id: "genuine-digital-school",
    jobTitle: "Profesor de tecnología",
    skills: ['Attitude', 'Bilingüismo', 'Educación Virtual'],
    company: "Confidencial",
    type: "Bucaramanga",
    salary: "Confidencial",
    vacancies: "1 Vacante",
    date: "1 days ago",
    benefits: [],
  },
  {
    id: "phidias",
    jobTitle: "Aprendiz Sena Contable",
    skills: ['Accounting Analysis'],
    company: "Phidias",
    type: "Remoto",
    salary: "$ 1.3M COP",
    vacancies: "1 Vacante",
    date: "2 days ago",
    benefits: ['certificaciones', 'Fiesta de fin año', 'capacitaciones'],
  },
  {
    id: "offimedicas",
    jobTitle: "Regente de farmacia Supernumerario",
    skills: ['Attitude To Service', 'Adaptation To Changes', 'Liderazgo'],
    company: "OFFIMEDICAS S.A",
    type: "Bucaramanga",
    salary: "$ 1.9M COP",
    vacancies: "1 Vacante",
    date: "3 days ago",
    benefits: [ 'Trabajo remoto parcial',  'certificaciones', 'capacitaciones', ],
  },
  {
    id: "offimedicas",
    jobTitle: "Auxiliar de Farmacia",
    skills: ['Attitude To Service', 'Fingering', 'Agilism'],
    company: "OFFIMEDICAS S.A",
    type: "Aguachica",
    salary: "$ 1.4M COP",
    vacancies: "1 Vacante",
    date: "3 days ago",
    benefits: ['Seguro médico privado', ],
  },
  {
    id: "genuine-digital-school",
    jobTitle: "Profesor de tecnología",
    skills: ['Attitude', 'Bilingüismo', 'Educación Virtual'],
    company: "Genuine Digital School",
    type: "Remoto - Cualquier lugar",
    salary: "Confidencial",
    vacancies: "1 Vacante",
    date: "4 days ago",
    benefits: ['Seguro médico privado', 'Horario Flexible', ],
  },
]

function App() {

  return (
    <>
      <Header/>
      {employees.map((employee) => (
            <CardJob
              id = {employee.id}
              jobTitle={employee.jobTitle}
              company={employee.company}
              type={employee.type}
              salary={employee.salary}
              vacancies={employee.vacancies}
              date={employee.date}
              skills={employee.skills}
              benefits={employee.benefits}
            />
      ))}
      <Footer/>
    </>
  )
}

export default App
