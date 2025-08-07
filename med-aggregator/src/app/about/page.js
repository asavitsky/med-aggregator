import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-4 mt-6 text-gray-800">
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">About This Project</h1>
          <p className="mb-2">
            This medical aggregator helps you compare prices, view services, and find the right clinic in Tbilisi.
          </p>
          <p>
            It’s designed for both locals and expats to make healthcare more transparent and accessible.
          </p>
        </div>
      </main>
    </div>
  );
}


