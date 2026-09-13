import StackItem from "./StackItem";

function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.035)]">
      {/* Header */}
      <div>
        <h2 className="text-sm font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[11px] text-slate-400">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology Selected`}
        </p>
      </div>

      {/* Empty state */}
      {stack.length === 0 ? (
        <div className="mt-4 flex min-h-[68px] items-center justify-center rounded-lg border border-dashed border-slate-200 px-4">
          <p className="text-[10px] text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          {/* Selected technologies */}
          <div className="mt-4 flex flex-col gap-2">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-6 flex h-[30px] w-full items-center justify-center rounded-md border border-red-200 bg-white px-3 text-[10px] font-semibold text-red-500 transition-colors duration-200 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;