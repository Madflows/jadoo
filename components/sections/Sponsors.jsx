import React from 'react'

const COMPANIES = [
    {
        name: "axon",
        logo: "/assets/companies/axon.png"
    },
    {
        name: "jetstar",
        logo: "/assets/companies/jetstar.png"
    },
    {
        name: "expedia",
        logo: "/assets/companies/expedia.png"
    },
    {
        name: "qantas",
        logo: "/assets/companies/qantas.png"
    },
    {
        name: "alitalia",
        logo: "/assets/companies/alitalia.png"
    },
]


const Sponsors = () => {
  return (
    <section className='py-10'>
        <div className='max-w-6xl gap-4 p-4 md:p-0 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {
                COMPANIES.map((company, index) => (
                    <div className='grayscale cursor-pointer transition-all duration-300 hover:grayscale-0 grid place-items-center' key={index}>
                        <img width={150} src={company.logo} alt={company.name} />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Sponsors
