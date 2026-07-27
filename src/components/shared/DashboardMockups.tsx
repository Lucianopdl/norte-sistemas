'use client';

import React from 'react';
import {
  Car,
  Search,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  FileText,
  Users,
  History,
  DollarSign,
} from 'lucide-react';

interface MockupProps {
  className?: string;
}

const autoMotionNav = [
  { icon: Car, active: true },
  { icon: Calendar, active: false },
  { icon: MessageSquare, active: false },
  { icon: BarChart3, active: false },
  { icon: Settings, active: false },
];

const cars = [
  { name: 'Toyota Corolla', price: '$18.500.000' },
  { name: 'VW Amarok', price: '$32.900.000' },
  { name: 'Fiat Cronos', price: '$14.200.000' },
];

export function AutoMotionMockup({ className = '' }: MockupProps) {
  return (
    <div className={`flex bg-slate-900 text-slate-200 font-mono select-none ${className}`}>
      {/* Sidebar */}
      <div className="w-16 sm:w-20 shrink-0 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-4 gap-4">
        <div className="w-7 h-7 rounded-lg bg-amber-400/20 flex items-center justify-center">
          <Car className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <div className="flex flex-col gap-2.5">
          {autoMotionNav.map(({ icon: Icon, active }, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-md flex items-center justify-center ${
                active ? 'bg-amber-400/15 text-amber-400' : 'text-slate-600'
              }`}
            >
              <Icon className="w-3 h-3" />
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 min-w-0 p-3 sm:p-4 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] sm:text-[11px] font-bold tracking-wide text-white">
            Catálogo de Vehículos
          </span>
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-800 border border-slate-700">
            <Search className="w-2.5 h-2.5 text-slate-400" />
            <span className="text-[8px] text-slate-500">Buscar...</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ['134', 'En Stock'],
            ['23', 'Turnos'],
            ['8', 'Consultas'],
          ].map(([v, l]) => (
            <div key={l} className="rounded-lg bg-slate-800/80 border border-slate-700 px-2 py-1.5">
              <div className="text-xs sm:text-sm font-bold text-white leading-none">{v}</div>
              <div className="text-[6px] sm:text-[7px] text-slate-500 uppercase tracking-wide mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 flex-1">
          {cars.map((car) => (
            <div
              key={car.name}
              className="rounded-lg bg-slate-800/60 border border-slate-700 overflow-hidden flex flex-col"
            >
              <div className="flex-1 min-h-[22px] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <Car className="w-4 h-4 text-slate-500" />
              </div>
              <div className="p-1.5">
                <div className="text-[6px] sm:text-[7px] font-semibold text-white truncate">
                  {car.name}
                </div>
                <div className="text-[6px] sm:text-[7px] text-amber-400 font-bold">{car.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const quoteMasterNav = [
  { icon: FileText, active: true },
  { icon: Users, active: false },
  { icon: Calendar, active: false },
  { icon: History, active: false },
  { icon: Settings, active: false },
];

const quoteItems = [
  { label: 'Servicio de Catering x120', price: '$450.000' },
  { label: 'Sonido e Iluminación', price: '$180.000' },
  { label: 'Decoración Floral', price: '$95.000' },
];

export function QuoteMasterMockup({ className = '' }: MockupProps) {
  return (
    <div className={`flex bg-slate-900 text-slate-200 font-mono select-none ${className}`}>
      {/* Sidebar */}
      <div className="w-16 sm:w-20 shrink-0 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-4 gap-4">
        <div className="w-7 h-7 rounded-lg bg-purple-400/20 flex items-center justify-center">
          <FileText className="w-3.5 h-3.5 text-purple-400" />
        </div>
        <div className="flex flex-col gap-2.5">
          {quoteMasterNav.map(({ icon: Icon, active }, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-md flex items-center justify-center ${
                active ? 'bg-purple-400/15 text-purple-400' : 'text-slate-600'
              }`}
            >
              <Icon className="w-3 h-3" />
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 min-w-0 p-3 sm:p-4 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] sm:text-[11px] font-bold tracking-wide text-white">
            Nueva Cotización
          </span>
          <span className="text-[7px] sm:text-[8px] px-2 py-0.5 rounded-full bg-purple-400/15 text-purple-400 font-semibold">
            Evento Corporativo
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ['48', 'Cotizaciones'],
            ['72%', 'Conversión'],
            ['12', 'Clientes'],
          ].map(([v, l]) => (
            <div key={l} className="rounded-lg bg-slate-800/80 border border-slate-700 px-2 py-1.5">
              <div className="text-xs sm:text-sm font-bold text-white leading-none">{v}</div>
              <div className="text-[6px] sm:text-[7px] text-slate-500 uppercase tracking-wide mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-slate-800/60 border border-slate-700 flex-1 flex flex-col divide-y divide-slate-700/60 overflow-hidden">
          {quoteItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between px-2.5 py-1.5">
              <span className="text-[6px] sm:text-[7px] text-slate-300 truncate">{item.label}</span>
              <span className="text-[6px] sm:text-[7px] text-slate-400 font-semibold shrink-0 ml-2">
                {item.price}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between px-2.5 py-1.5 mt-auto bg-purple-400/10">
            <span className="text-[7px] sm:text-[8px] text-white font-bold flex items-center gap-1">
              <DollarSign className="w-2.5 h-2.5 text-purple-400" />
              Total
            </span>
            <span className="text-[7px] sm:text-[8px] text-purple-400 font-bold">$725.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
