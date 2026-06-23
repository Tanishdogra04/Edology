import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, Send, HelpCircle, Building } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export default function Contact() {
  const { showToast } = useApp();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log('Contact Message Submitted:', data);
    showToast('Your message has been sent successfully!', 'success');
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24 space-y-12 text-left">
      
      <div className="space-y-3">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
          Contact Admissions Support
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-405 max-w-2xl leading-relaxed">
          Need details on cohort start dates, syllabus custom structures, corporate invoice billing, or degree validity? Reach out to our teams below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-50 text-slate-700 border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="font-heading font-extrabold text-lg text-slate-900">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400">Admissions Line</p>
                  <p className="text-sm font-bold text-slate-800">+44 20 7123 4567</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400">Email Inquiries</p>
                  <p className="text-sm font-bold text-slate-800">admissions@edeco.com</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400">London Headquarters</p>
                  <p className="text-sm font-bold text-slate-800 leading-normal">
                    85 Great Portland St, London, W1W 7LT, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border border-slate-150 dark:border-slate-800 rounded-2xl space-y-4">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-405">Regional Offices</h3>
            
            <div className="space-y-3.5 text-xs text-slate-500">
              <div className="flex gap-2.5 items-center">
                <Building className="w-4.5 h-4.5 text-slate-400" />
                <span><strong>Geneva Campus:</strong> SSBM, Rue de Fribourg 22, Geneva, Switzerland</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Building className="w-4.5 h-4.5 text-slate-400" />
                <span><strong>Munich Hub:</strong> IU, Campus Munich, Germany</span>
              </div>
            </div>
          </div>

        </div>

        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white mb-6">Send Us a Message</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register('fullName')}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-blue-500"
                />
                {errors.fullName && <p className="text-[10px] text-red-500 font-medium">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  {...register('email')}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-blue-500"
                />
                {errors.email && <p className="text-[10px] text-red-500 font-medium">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Subject</label>
              <input
                type="text"
                placeholder="Query about admissions, invoice billing..."
                {...register('subject')}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-blue-500"
              />
              {errors.subject && <p className="text-[10px] text-red-500 font-medium">{errors.subject.message}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Message Details</label>
              <textarea
                rows="5"
                placeholder="Detail your request here..."
                {...register('message')}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-blue-500"
              />
              {errors.message && <p className="text-[10px] text-red-500 font-medium">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shadow-blue-500/10 hover:scale-[1.02] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Send message
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}
