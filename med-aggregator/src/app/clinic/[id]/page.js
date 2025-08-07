import Header from '@/components/Header';
import clinics from '@/data/clinics.json';

export default async function ClinicPage({ params }) {
  const id = params.id; // Now correctly awaited inside async function
  const clinic = clinics.find(c => c.slug === id);

  if (!clinic) {
    return (
      <>
        <Header />
        <main className="max-w-3xl mx-auto p-4 text-red-600">
          Clinic not found
        </main>
      </>
    );
  }

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-4 mt-6 text-gray-800">
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-2">{clinic.name}</h1>
          <p className="mb-1">{clinic.address}</p>
          <p className="mb-1">Phone: {clinic.phone}</p>
          <p className="mb-1">
            Website:{' '}
            <a href={clinic.website} target="_blank" className="text-blue-600 underline">
              {clinic.website}
            </a>
          </p>
          <p className="mb-4">Languages: {clinic.languages.join(', ')}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Services & Prices</h2>
          <table className="w-full border border-collapse text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2 text-left">Service</th>
                <th className="border px-3 py-2 text-left">Category</th>
                <th className="border px-3 py-2 text-left">Price (₾)</th>
              </tr>
            </thead>
            <tbody>
              {clinic.services.map((s, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{s.name}</td>
                  <td className="border px-3 py-2">{s.category}</td>
                  <td className="border px-3 py-2">{s.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// For static generation of all clinic pages
export function generateStaticParams() {
  return clinics.map((clinic) => ({
    id: clinic.slug
  }));
}
