function StackSidebar() {
  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-[11px] text-slate-400">
        No technologies selected yet.
      </p>

      <div className="mt-4 flex min-h-[68px] items-center justify-center rounded-lg border border-dashed border-slate-200 px-4">
        <p className="text-[10px] text-slate-400">
          Your stack is empty.
        </p>
      </div>
    </aside>
  );
}

export default StackSidebar;