interface Stat {
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
  className?: string;
  columns?: number;
}

const StatsGrid = ({ stats, className = "", columns = 2 }: StatsGridProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4"
  }[columns] || "grid-cols-2";

  return (
    <div className={`flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-center ${className}`}>
      {stats.map((stat, index) => (
        <>
          <div key={index} className="text-center flex-shrink-0">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-citisquare-gold mb-1 sm:mb-2">{stat.value}</div>
            <div className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-[150px] mx-auto leading-tight">{stat.label}</div>
          </div>
          {index < stats.length - 1 && (
            <div className="w-px h-8 sm:h-12 bg-border/30 hidden sm:block" />
          )}
        </>
      ))}
    </div>
  );
};

export default StatsGrid;