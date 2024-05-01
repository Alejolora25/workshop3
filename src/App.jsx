import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { CardJob } from './Components/CardJob'

const employees = [
  {
    id: "1",
    jobTitle: "Tester de Software",
    skills: ['Resolution Capacity', 'Compliance Whit Indicators', 'Agile Work'],
    company: "OFFIMEDICAS S.A",
    type: " Presencial (Bucar...",
    salary: "$ 2.8M COP",
    vacancies: "1 Vacante",
    date: "1 days ago",
  },
  {
    id: "2",
    jobTitle: "Regente de farmacia Supernumerario",
    skills: ['Attitude To Service', 'Adaptation To Changes', 'Liderazgo'],
    company: "OFFIMEDICAS S.A",
    type: "Bucaramanga",
    salary: "$ 2.8M COP",
    vacancies: "1 Vacante",
    date: "1 days ago",
  },
  {
    id: "3",
    jobTitle: "Profesor de tecnología",
    skills: ['Attitude', 'Bilingüismo', 'Educación Virtual'],
    company: "Confidencial",
    type: "Bucaramanga",
    salary: "Confidencial",
    vacancies: "1 Vacante",
    date: "1 days ago",
  },
  {
    id: "4",
    jobTitle: "Aprendiz Sena Contable",
    skills: ['Accounting Analysis'],
    company: "Phidias",
    type: "Remoto",
    salary: "$ 1.3M COP",
    vacancies: "1 Vacante",
    date: "about  24 hours ago",
  },
  {
    id: "5",
    jobTitle: "Regente de farmacia Supernumerario",
    skills: ['Attitude To Service', 'Adaptation To Changes', 'Liderazgo'],
    company: "OFFIMEDICAS S.A",
    type: "Bucaramanga",
    salary: "$ 1.9M COP",
    vacancies: "1 Vacante",
    date: "3 days ago",
  },
  {
    id: "6",
    jobTitle: "Auxiliar de Farmacia",
    skills: ['Attitude To Service', 'Fingering', 'Agilism'],
    company: "OFFIMEDICAS S.A",
    type: "Aguachica",
    salary: "$ 1.4M COP",
    vacancies: "1 Vacante",
    date: "3 days ago",
  },
  {
    id: "7",
    jobTitle: "Profesor de tecnología",
    skills: ['Attitude', 'Bilingüismo', 'Educación Virtual'],
    company: "Genuine Digital School",
    type: "Remoto - Cualquier lugar",
    salary: "Confidencial",
    vacancies: "1 Vacante",
    date: "4 days ago",
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
            />
      ))}
      <Footer/>
    </>
  )
}

export default App
