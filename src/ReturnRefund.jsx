/* src/ReturnRefund.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ReturnRefund() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-stone-200 p-6 md:p-20">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-black mb-12">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-serif mb-8">Returns & Refunds</h1>
        
        <div className="space-y-8 text-stone-600 leading-relaxed">
          <section>
            <h2 className="text-black font-semibold uppercase tracking-wider text-xs mb-3">Policy Overview</h2>
            <p>At SKEYE ACCESSORIES, we pride ourselves on quality. If you are not completely satisfied with your purchase, you may return it within 14 days of receipt for an exchange or store credit.</p>
          </section>
          
          <section>
            <h2 className="text-black font-semibold uppercase tracking-wider text-xs mb-3">Conditions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Items must be returned unworn, undamaged, and unused, with all tags attached and the original packaging included.</li>
              <li>Footwear and accessories must be returned with the original branded boxes and dust bags, where provided, and placed inside a protective outer box for shipping.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-black font-semibold uppercase tracking-wider text-xs mb-3">Refund Process</h2>
            <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. Refunds are processed within 5-7 business days to your original method of payment.</p>
          </section>
        </div>
      </div>
    </div>
  );
}