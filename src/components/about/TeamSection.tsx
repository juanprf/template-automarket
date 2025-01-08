import React from 'react';

const team = [
  {
    name: 'John Smith',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  },
  {
    name: 'Sarah Johnson',
    role: 'Sales Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  },
  {
    name: 'Michael Brown',
    role: 'Service Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
];

export function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}