import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({ technologies }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
        />
      ))}
    </div>
  );
}

export default TechnologyGrid;