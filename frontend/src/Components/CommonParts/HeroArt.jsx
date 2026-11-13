import {
  ArrowRight,
  ClipboardList,
  HeartHandshake,
  Pill,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import React from "react";

export default function HeroArt() {
  return (
    <div
      className="relative flex items-center justify-center min-h-[440px]"
      aria-label="Illustration of the NogahCare mobile healthcare experience"
    >
      <div className="absolute rounded-full bg-[#416ebe38] h-96 w-96 orb-one"></div>
      <div className="absolute rounded-full border-[1px] border-[#ffffff26] bg-[#ffffff26] bg-opacity-20 w-72 h-72"></div>
      <div className="absolute z-10 bg-[#fff] text-teal-950 rounded-lg shadow-md text-sm flex items-center gap-2 right-0 top-16 px-3 py-2">
        <ShieldCheck size={17} /> Trusted connections
      </div>

      <div className="relative w-60 h-[400px] p-3 rounded-3xl bg-[#0d1234] shadow-lg rotate-6 z-10">
        <div className="absolute z-10 top-4 left-20 w-16 h-3 rounded-2xl bg-[#0d1234]"></div>

        <div className="h-full rounded-3xl bg-[#fff] text-teal-900 p-3 overflow-hidden">
          <div className="font-bold text-sm mt-2">
            Hello, welcome <span className="">👋</span>
          </div>
          <div className="text-sm mt-1">Your care, connected.</div>
          <div className="mt-5 mb-3 w-20 h-20 bg-slate-300 rounded-3xl flex justify-center items-center mx-auto">
            <HeartHandshake size={32} />
          </div>
          <span className="block text-center text-sm mb-4">
            How can we help today?
          </span>

          <div className="flex items-center gap-2 px-3 py-2 border-[1px] border-[#e9edf4] rounded-lg text-xs font-semibold mb-2">
            <span className="h-6 w-6 rounded-lg bg-[#e3e7eb] text-[#10122E] flex items-center justify-center">
              <Stethoscope size={15} />
            </span>{" "}
            Online consultation <ArrowRight size={13} />
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-[1px] border-[#e9edf4] rounded-lg text-xs font-semibold mb-2">
            <span className="h-6 w-6 rounded-lg bg-[#e3e7eb] text-[#10122E] flex items-center justify-center">
              <Pill size={15} />
            </span>{" "}
            Pharmacy services <ArrowRight size={13} />
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-[1px] border-[#e9edf4] rounded-lg text-xs font-semibold mb-2">
            <span className="h-6 w-6 rounded-lg bg-[#e3e7eb] text-[#10122E] flex items-center justify-center">
              <ClipboardList size={15} />
            </span>{" "}
            Prescription support <ArrowRight size={13} />
          </div>
          <div className="flex items-center justify-around gap-2 px-3 py-2 border-[1px] border-[#e9edf4] rounded-lg text-xs font-semibold mb-2">
            <i className="h-1 w-1 rounded-xl bg-[#ccd3e2]"></i>
            <i className="h-1 w-1 rounded-xl bg-[#ccd3e2]"></i>
            <i className="h-1 w-1 rounded-xl bg-[#ccd3e2]"></i>
            <i className="h-1 w-1 rounded-xl bg-[#ccd3e2]"></i>
          </div>
        </div>
      </div>
      <div className="absolute z-10 bg-[#fff] text-teal-950 rounded-lg shadow-md text-sm flex items-center gap-2 left-0 bottom-14 px-3 py-2">
        <span className="h-2 w-2 round-[50%] bg-teal-600 shadow-md"></span> Care
        that connects
      </div>

      <div className="absolute right-[10%] top-[45%] text-6xl font-semibold text-[#ffffff29]">
        +
      </div>
    </div>
  );
}
