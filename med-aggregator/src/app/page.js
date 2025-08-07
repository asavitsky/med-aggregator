'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import clinics from '@/data/clinics.json';
import Link from 'next/link';

export default function HomePage() {
  const [query, setQuery] = useState('');

  const filtered = clinics
    .map(clinic => ({
      ...clinic,
      matchedServices: clinic.services.filter(s =>
        s.name.toLowerCase().includes(query.toLowerCase())
      )
    }))
    .filter(clinic => clinic.matchedServices.length > 0 || query === '');

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-4 bg-white text-gray-800 rounded shadow mt-6">
        <input
          type="text"
          placeholder="Search service (e.g. cardiologist)"
          className="border px-3 py-2 w-full mb-4 rounded"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        {filtered.map(clinic => (
          <div key={clinic.slug} className="border p-4 rounded mb-4 shadow-sm">
            <Link href={`/clinic/${clinic.slug}`}>
              <h2 className="text-xl font-semibold text-gray-800 hover:underline">
                {clinic.name}
              </h2>
            </Link>
            <p className="text-sm text-gray-600 mb-2">{clinic.address}</p>

            {query && (
              <ul className="text-sm mt-2">
                {clinic.matchedServices.map((s, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{s.name}</span>
                    <span className="font-medium">{s.price} ₾</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
