import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Eureka B2B SaaS</h1>
      <p className="text-slate-600">
        Production-minded starter with App Router, typed validation, API route examples,
        and test scaffolding.
      </p>
      <div className="flex gap-3">
        <Link className="rounded-md bg-slate-900 px-4 py-2 text-white" href="/login">
          Login
        </Link>
        <Link className="rounded-md border border-slate-300 px-4 py-2" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </section>
  );
}
