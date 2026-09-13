function TechnologyCard({ technology, isAdded, onAdd }) {
  const badgeStyles = {
    Popular: "bg-sky-50 text-sky-500 ring-sky-100",
    Versatile: "bg-emerald-50 text-emerald-500 ring-emerald-100",
    Fast: "bg-orange-50 text-orange-500 ring-orange-100",
    Standard: "bg-emerald-50 text-emerald-500 ring-emerald-100",
    "Top SQL": "bg-blue-50 text-blue-500 ring-blue-100",
    Cache: "bg-rose-50 text-rose-500 ring-rose-100",
    Ubiquitous: "bg-amber-50 text-amber-500 ring-amber-100",
    Essential: "bg-sky-50 text-sky-500 ring-sky-100",
    Robust: "bg-sky-50 text-sky-500 ring-sky-100",
    Modern: "bg-cyan-50 text-cyan-500 ring-cyan-100",
    Containers: "bg-sky-50 text-sky-500 ring-sky-100",
  };

  const badgeClass =
    badgeStyles[technology.badge] ||
    "bg-slate-50 text-slate-500 ring-slate-100";

  return (
    <article className="flex min-h-[275px] flex-col rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.035)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-6 w-6 object-contain"
        />

        {technology.badge && (
          <span
            className={`rounded-full px-2.5 py-1 text-[9px] font-medium leading-none ring-1 ${badgeClass}`}
          >
            {technology.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="mt-4 text-[14px] font-bold leading-5 text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1.5 line-clamp-3 min-h-[48px] text-[10px] leading-[15px] text-slate-400">
        {technology.description}
      </p>

      {/* Divider */}
      <div className="mt-3 border-t border-slate-100" />

      {/* Meta information */}
      <div className="mt-2.5 flex items-center justify-between gap-1.5">
        <span className="shrink-0 rounded bg-slate-50 px-2 py-1 text-[9px] font-medium leading-none text-slate-500">
          {technology.category}
        </span>

        <span className="min-w-0 truncate text-[9px] font-medium leading-none text-slate-400">
          {technology.difficulty}
        </span>

        <span className="flex shrink-0 items-center gap-1 text-[9px] font-medium leading-none text-slate-500">
          <span className="text-[10px] text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Add button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-auto flex h-[30px] w-full items-center justify-center rounded-md px-3 text-[10px] font-medium transition-all duration-200 ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-[#0a0f1d] text-white hover:bg-[#151c2d]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;