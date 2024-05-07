import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Bakulesh Rane',
    role: 'Founder',
    description:
      "Bakulesh, Founder at Zenvest, combines 2 years of software engineering and ML data roles at major firms with 1 year in startup marketing. He's recognized for building a 100k+ member Data Analytics community and holds advanced certifications in Data Science and Blockchain from IIT Kanpur.",
    imageSrc:
      'Bakuleshrane.jpeg',
  },
  {
    name: 'Abhishek Pawar',
    role: 'Co-Founder',
    description:
      'Abhishek, Co-founder at Zenvest, brings 3+ years of experience in pharmaceuticals, emerging biotech, and management consulting, including roles at Bristol Meyers Squibb, IQVIA, Pfizer, and Dompe, with a B.Tech from VJTI Mumbai.',
    imageSrc:
      'Abhishek.jpg',
  },

];

const Team: React.FC = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <h1 className='text-center font-bold text-3xl py-10'>Meet Our Core Team</h1>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-2 lg:max-w-screen-lg">
        {teamMembers.map((member, index) => (
          <div key={index} className='bg-black p-5 rounded-lg'>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={member.imageSrc}
              alt={member.name}
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">{member.name}</p>
              <p className="mb-4 text-xs text-gray-50">{member.role}</p>
              <p className="text-sm tracking-wide text-gray-50">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
