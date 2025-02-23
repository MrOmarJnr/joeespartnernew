import React from 'react';
import Image from 'next/image';

const servicesData = [
  {
    icon: '/icon1.svg', // Replace with actual icon paths
    title: 'Construction',
  },
  {
    icon: '/icon2.svg',
    title: 'Renovation',
  },
  {
    icon: '/icon3.svg',
    title: 'Consultation',
  },
  {
    icon: '/icon4.svg',
    title: 'Repair Services',
  },
  {
    icon: '/icon5.svg',
    title: 'Architecture',
  },
  {
    icon: '/icon6.svg',
    title: 'Electric',
  },
];

export default function Services() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-indigo-500">
                  <Image className="h-8 w-8 text-white" width={32} height={32} src={service.icon} alt="no-classes" />
                </div>
                <p className="mt-6 text-xl font-medium text-gray-900 text-center">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}