export default function CustomTooltip({ active, payload, label, platform }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="custom-tooltip">
      <p className="tooltip-label">{label}</p>
      {payload.map((item, index) => (
        <div key={index} className="tooltip-item">
          <span className="tooltip-key">{item.name}:</span>
          <span className="tooltip-value" style={{ color: item.color }}>
            {item.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}