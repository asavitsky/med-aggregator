import Header from '@/components/Header';

export default function BlogPage() {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-4 mt-6 text-gray-800">
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Blog</h1>
          <p className="text-gray-800">
            Coming soon: health articles, medical tips, and clinic news.
          </p>
        </div>
      </main>
    </div>
  );
}