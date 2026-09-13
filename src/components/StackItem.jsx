function StackItem({ technology, onRemove }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/60 p-3">
      <img
        src={technology.icon}
        alt={`${technology.name} icon`}
        className="h-5 w-5 shrink-0 object-contain"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[11px] font-semibold text-slate-800">
          {technology.name}
        </h3>

        <p className="mt-0.5 truncate text-[9px] text-slate-400">
          {technology.category}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white hover:text-rose-500"
        aria-label={`Remove ${technology.name} from stack`}
      >
        <span className="text-sm leading-none">×</span>
      </button>
    </div>
  );
}

export default StackItem;