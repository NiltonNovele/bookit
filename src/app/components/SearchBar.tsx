"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search as SearchIcon, Brain } from "lucide-react";
import Link from "next/link";
import LocationSelectorModal from "./LocationSelectorModal";
import { serviceCategories } from "./serviceCategories";

interface ExpandableServiceDropdownProps {
  value: string;
  onChange: (val: string) => void;
  serviceCategories: Record<string, string[]>;
}

const ExpandableServiceDropdown: React.FC<ExpandableServiceDropdownProps> = ({
  value,
  onChange,
  serviceCategories,
}) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleCategory = (category: string) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allServices = Object.values(serviceCategories).flat();
  const selectedLabel =
    value === "Any"
      ? "Any"
      : allServices.includes(value)
      ? value
      : "Select Service";

  return (
    <div className="relative w-[140px]" ref={containerRef}>
      <button
        type="button"
        className="w-full px-3 py-2 border rounded-md border-orange-200 bg-white text-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-orange-300"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selectedLabel}
      </button>

      {open && (
        <div
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border border-orange-200 bg-white shadow-lg"
          role="listbox"
          tabIndex={-1}
        >
          {/* Any option */}
          <div
            onClick={() => {
              onChange("Any");
              setOpen(false);
            }}
            className={`cursor-pointer px-4 py-2 hover:bg-orange-100 ${
              value === "Any" ? "bg-orange-200 font-semibold" : ""
            }`}
            role="option"
            aria-selected={value === "Any"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onChange("Any");
                setOpen(false);
              }
            }}
          >
            Any
          </div>

          {/* Categories */}
          {Object.entries(serviceCategories).map(([category, services]) => (
            <div key={category} className="border-t border-orange-100">
              <div
                className="cursor-pointer px-4 py-2 font-semibold flex justify-between items-center hover:bg-orange-100"
                onClick={() => toggleCategory(category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCategory(category);
                  }
                }}
              >
                <span>{category}</span>
                <span>{expanded[category] ? "−" : "+"}</span>
              </div>
              {expanded[category] && (
                <div className="pl-6">
                  {services.map((service) => (
                    <div
                      key={service}
                      className={`cursor-pointer px-4 py-2 hover:bg-orange-200 ${
                        value === service ? "bg-orange-300 font-semibold" : ""
                      }`}
                      onClick={() => {
                        onChange(service);
                        setOpen(false);
                      }}
                      role="option"
                      aria-selected={value === service}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onChange(service);
                          setOpen(false);
                        }
                      }}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Any");
  const [location, setLocation] = useState("All Areas");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [results, setResults] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock data
    const mockProviders = [
      {
        id: 1,
        name: "Bright Smiles Dental",
        category: "Dentist",
        description:
          "Modern dental clinic with affordable checkups and whitening.",
        location: "Cape Town CBD",
      },
      {
        id: 2,
        name: "Sunset Dental Care",
        category: "Dentist",
        description:
          "Expert care with emergency services and cosmetic dentistry.",
        location: "Sea Point",
      },
      {
        id: 3,
        name: "Glow & Go Salon",
        category: "Salon",
        description: "Haircuts, coloring, and styling by professionals.",
        location: "Woodstock",
      },
      {
        id: 4,
        name: "Urban Fade Studio",
        category: "Salon",
        description: "Trendy hair studio for men and women.",
        location: "Gardens",
      },
      {
        id: 5,
        name: "Wellness Hub Spa",
        category: "Salon",
        description: "Relaxing massages and facial treatments.",
        location: "Green Point",
      },
    ];

    // Simple filtering for mockup
    const q = query.toLowerCase();
    const filtered = mockProviders.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );

    setTimeout(() => {
      setResults(filtered);
      setLoading(false);
    }, 500); // simulate loading delay
  };

  const handleLocationSave = (
    position: { lat: number; lng: number },
    radius: number
  ) => {
    setLocation(
      `${position.lat.toFixed(3)},${position.lng.toFixed(
        3
      )} (Radius: ${radius}km)`
    );
    setShowLocationModal(false);
  };

  return (
    <section className="bg-orange-50 border border-orange-100 rounded-2xl p-6 shadow-md mb-16">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-orange-700 mb-6 flex items-center gap-2">
        <SearchIcon size={22} aria-hidden="true" />
        Find a Local Service
      </h2>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col lg:flex-row gap-4 items-stretch"
        role="search"
        aria-label="Search local services"
      >
        {/* Search Input */}
        <div className="flex-grow min-w-0 relative">
          <label htmlFor="search-query" className="sr-only">
            Search keywords
          </label>
          <input
            id="search-query"
            type="text"
            placeholder="e.g. Dentist, car wash, Thai food"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 border rounded-md shadow-sm border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-gray-400"
          />
        </div>

        {/* Service Type Dropdown */}
        <ExpandableServiceDropdown
          value={type}
          onChange={setType}
          serviceCategories={serviceCategories}
        />

        {/* Location Selector */}
        <div className="relative min-w-[160px]">
          <label htmlFor="location-select" className="sr-only">
            Selected location
          </label>
          <select
            id="location-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled
            className="w-full px-4 py-3 border rounded-md border-orange-200 bg-white text-gray-700 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-disabled="true"
          >
            <option>{location}</option>
          </select>

          <button
            type="button"
            onClick={() => setShowLocationModal(true)}
            className="absolute inset-y-0 right-0 px-3 text-orange-700 hover:text-orange-900"
            aria-label="Open location selector"
            title="Select Location"
          >
            📍
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition shadow-sm"
          aria-label="Search"
        >
          <SearchIcon size={18} aria-hidden="true" />
          Search
        </button>

        {/* Ask BookAI Button */}
        <Link
          href="/bookai"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-700 border border-orange-500 rounded-md hover:bg-orange-50 transition shadow-sm"
          aria-label="Ask BookAI for help"
        >
          <Brain size={18} aria-hidden="true" />
          Ask BookAI
        </Link>
      </form>
      <ul className="space-y-4">
        {results.map((provider) => (
          <li
            key={provider.id}
            className="border p-4 rounded-md shadow-sm hover:shadow-md transition bg-white"
          >
            <h3 className="font-semibold text-lg text-orange-800">
              {provider.name}
            </h3>
            <p className="text-sm text-gray-600">{provider.category}</p>
            <p className="text-gray-700">{provider.description}</p>
            <p className="text-gray-500 text-sm mb-2">{provider.location}</p>
            <button className="mt-2 inline-block px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition text-sm">
              Book Now
            </button>
          </li>
        ))}
      </ul>
      {/* Helper Text */}
      <p className="text-sm text-gray-500 mt-3 pl-1">
        Use keywords or filter by service type &amp; location.
      </p>

      {/* Location Selector Modal */}
      {showLocationModal && (
        <LocationSelectorModal
          onClose={() => setShowLocationModal(false)}
          onSave={handleLocationSave}
        />
      )}

      <section className="mt-6">
        {loading && <p>Loading...</p>}
        {!loading && results.length === 0 && <p>No results found.</p>}
        {!loading && results.length > 0 && (
          <ul className="space-y-4">
            {results.map((provider) => (
              <li
                key={provider.id}
                className="border p-4 rounded-md shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{provider.name}</h3>
                <p className="text-sm text-gray-600">{provider.category}</p>
                <p className="text-gray-700">{provider.description}</p>
                <p className="text-gray-500 text-sm">{provider.location}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

export default SearchBar;
