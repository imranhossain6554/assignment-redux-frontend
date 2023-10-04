

export default function FilterComponent() {
  return (
    <div>
      <>
        <h1 className="text-2xl uppercase">Availability</h1>
        <div className="flex items-center space-x-2 mt-3">
          <input type="range" min={0} max="100" value="40" className="range" />
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl"></div>
          <div>From 0$ To $</div>
        </div>
      </>
    </div>
  );
}
