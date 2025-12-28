"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Box, Home, Truck, Sofa } from "lucide-react";

// Mock data for sizes
const sizes = [
  {
    id: "small",
    label: "Small (10-25 sq ft)",
    description: "About the size of a garden shed.",
    fit: "Boxes, small furniture, sports gear, or student items.",
    icon: Box,
    items: ["10-20 Boxes", "Bicycle", "Small Desk"]
  },
  {
    id: "medium",
    label: "Medium (35-50 sq ft)",
    description: "Half the size of a standard garage.",
    fit: "Contents of a 1-bedroom flat or shed.",
    icon: Sofa,
    items: ["Queen Bed", "Sofa", "Appliances", "30+ Boxes"]
  },
  {
    id: "large",
    label: "Large (75-100 sq ft)",
    description: "About the size of a standard garage.",
    fit: "Contents of a 2-bedroom house.",
    icon: Home,
    items: ["Furniture Suite", "Dining Table", "Multiple Beds", "50+ Boxes"]
  },
  {
    id: "xl",
    label: "Extra Large (125+ sq ft)",
    description: "Large garage or warehouse space.",
    fit: "Contents of a 3-4 bedroom house or business stock.",
    icon: Truck,
    items: ["Full House Move", "Pallets", "Large Equipment"]
  }
];

export function SizeGuide() {
  const [activeSize, setActiveSize] = useState(sizes[1]); // Default to Medium

  return (
    <div className="grid lg:grid-cols-5 gap-8 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
      
      {/* Size Selector */}
      <div className="lg:col-span-2 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-brand-dark mb-2">Select a size range</h3>
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => setActiveSize(size)}
            className={cn(
              "text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3",
              activeSize.id === size.id
                ? "bg-brand-primary text-white border-brand-primary shadow-md"
                : "bg-white border-gray-200 text-gray-700 hover:border-brand-primary/50 hover:bg-gray-50"
            )}
          >
            <div className={cn(
              "p-2 rounded-lg",
              activeSize.id === size.id ? "bg-white/20" : "bg-gray-100 text-brand-dark"
            )}>
              <size.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-bold text-sm md:text-base">{size.label}</div>
              <div className={cn("text-xs opacity-80", activeSize.id === size.id ? "text-white" : "text-gray-500")}>
                {size.description}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Visualizer */}
      <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <activeSize.icon className="h-48 w-48 text-brand-primary" />
        </div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-4">
            Best for: {activeSize.fit}
          </div>
          <h4 className="text-2xl font-bold text-brand-dark mb-4">{activeSize.label}</h4>
          
          <div className="space-y-4">
            <p className="text-gray-600">Typically fits:</p>
            <ul className="grid grid-cols-2 gap-3">
              {activeSize.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-500">
            * This is a rough guide. We recommend calling us for precise advice.
          </div>
        </div>
      </div>
    </div>
  );
}
