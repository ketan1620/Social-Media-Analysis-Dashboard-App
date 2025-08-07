export default function TimeFilter({ value, onChange }) {
  const timeRanges = [
    { id: '7d', label: 'Last 7 days' },
    { id: '30d', label: 'Last 30 days' },
    { id: '90d', label: 'Last 90 days' },
    { id: '1y', label: 'Last year' }
  ];

  return (
    <div className="time-filter">
      {timeRanges.map((range) => (
        <button
          key={range.id}
          className={`filter-button ${value === range.id ? 'active' : ''}`}
          onClick={() => onChange(range.id)}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}