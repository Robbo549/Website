import React, { useState } from 'react'

export default function App() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card')

  const services = [
    {
      id: 'snagging',
      title: 'Snagging Survey',
      desc: 'Comprehensive snagging survey for new-build homes. Includes a detailed photographic report and aftercare within your warranty period.',
      tiers: [
        { label: '1-3 bed apartment', price: '£340' },
        { label: '1-2 bed house', price: '£345' },
        { label: '3 bed house', price: '£410' },
        { label: '4 bed house', price: '£460' },
        { label: '5 bed house', price: '£480' }
      ]
    },
    { id: 'precompletion', title: 'Pre-Completion / Handover Inspection', desc: 'Quick pre-handover check to give you peace of mind before keys are handed over.' },
    { id: 'reinspect', title: 'Re-inspection', desc: 'Follow-up visit to confirm snags have been fixed correctly.' },
    { id: 'thermal', title: 'Thermal Inspection', desc: 'Building thermography to identify heat loss, cold bridges and insulation issues.' },
    { id: 'cavity', title: 'Cavity Wall Inspection', desc: 'Cavity and insulation checks to prevent damp and insulation problems.' },
    { id: 'extension', title: 'Extension & Refurb Inspection', desc: 'Inspections tailored to extensions, refurbishments and renovation projects.' }
  ]

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">NH</div>
            <div>
              <h1 className="text-xl font-semibold text-blue-800">NewHomeSnag</h1>
              <p className="text-sm text-gray-500">Professional snagging & home inspection services</p>
            </div>
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#book" className="hover:underline">Book</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-900">Comprehensive snagging surveys for new-build homes</h2>
            <p className="mt-4 text-gray-700">We provide independent inspections covering all major survey types for new homes. Our experienced inspectors ensure every detail is checked and reported clearly, giving you confidence in your new property.</p>
            <div className="mt-6 flex gap-3">
              <a href="#pricing" className="px-5 py-3 bg-blue-600 text-white rounded shadow-sm">View Pricing</a>
              <a href="#book" className="px-5 py-3 border border-blue-600 text-blue-600 rounded">Book Now</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg text-blue-800">How it works</h3>
            <ol className="mt-4 space-y-3 text-sm text-gray-700">
              <li><strong>1.</strong> Choose the survey type and your property size.</li>
              <li><strong>2.</strong> Book a convenient time — reports delivered within 48 hours for most surveys.</li>
              <li><strong>3.</strong> Receive a photographic snag list ready for your developer or warranty provider.</li>
              <li><strong>4.</strong> Use our aftercare support to check remedial works where applicable.</li>
            </ol>
          </div>
        </section>

        <section id="services" className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900">Services</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {services.map(s => (
              <div key={s.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-blue-800">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                {s.tiers && (
                  <div className="mt-4">
                    <div className="text-xs text-gray-500">Pricing</div>
                    <ul className="mt-2 space-y-1">
                      {s.tiers.map(t => (
                        <li key={t.label} className="flex justify-between text-sm">
                          <span>{t.label}</span>
                          <span className="font-medium">{t.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900">Pricing snapshot</h2>
          <p className="text-sm text-gray-600 mt-2">Representative pricing for our most common survey tiers.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-blue-800">Apartment (1-3 beds)</h4>
              <div className="mt-3 text-2xl font-bold">£340</div>
              <div className="text-sm text-gray-500 mt-2">Snagging Survey</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-blue-800">House (1-2 beds)</h4>
              <div className="mt-3 text-2xl font-bold">£345</div>
              <div className="text-sm text-gray-500 mt-2">Snagging Survey</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-blue-800">House (3 beds)</h4>
              <div className="mt-3 text-2xl font-bold">£410</div>
              <div className="text-sm text-gray-500 mt-2">Snagging Survey</div>
            </div>
          </div>
        </section>

        <section id="book" className="mt-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-900">Book a survey</h2>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Full name" className="p-3 border rounded" />
            <input placeholder="Email" className="p-3 border rounded" />
            <input placeholder="Phone (optional)" className="p-3 border rounded" />
            <select className="p-3 border rounded">
              <option>Snagging Survey — 1-3 bed apartment</option>
              <option>Snagging Survey — 1-2 bed house</option>
              <option>Snagging Survey — 3 bed house</option>
              <option>Pre-Completion Inspection</option>
              <option>Thermal Inspection</option>
            </select>
            <textarea placeholder="Notes / preferred dates" className="p-3 border rounded md:col-span-2" />

            <div className="md:col-span-2">
              <h3 className="font-semibold text-blue-800 mb-2">Payment Method</h3>
              <p className="text-sm text-gray-600 mb-3">(Payments will be added later)</p>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="card" defaultChecked />
                  Card
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="paypal" />
                  PayPal
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input placeholder="Cardholder Name" className="p-3 border rounded" />
                <input placeholder="Card Number" className="p-3 border rounded" />
                <input placeholder="Expiry Date (MM/YY)" className="p-3 border rounded" />
                <input placeholder="CVC" className="p-3 border rounded" />
              </div>
            </div>

            <button type="button" className="md:col-span-2 px-5 py-3 bg-blue-600 text-white rounded">Request Booking</button>
          </form>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900">Contact</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold text-blue-800">Office</h4>
              <p className="text-sm text-gray-600 mt-2">NewHomeSnag Ltd<br/>Serving England, Scotland & Wales</p>
              <p className="text-sm text-gray-600 mt-2">Email: info@newhomesnag.com<br/>Website: newhomesnag.co.uk</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold text-blue-800">FAQs & Terms</h4>
              <p className="text-sm text-gray-600 mt-2">Report turnaround: typically 48 hours. Aftercare included for remedial verification where applicable. Standard terms apply at booking.</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NewHomeSnag Ltd — All rights reserved.
        </footer>
      </main>
    </div>
  )
}
