import "./styles.css";

export default function HightLightItem({
  title,
  measure,
  unit,
  children,
}) {
  return (
    <div className="hight-light-item-container">
      <h3 className="hight-light-item-title">{title}</h3>
      <div className="hight-light-item-info-container">
        <span className="hight-light-item-measure">{measure.toFixed(2)}</span>
        <span className="hight-light-item-unit">{unit}</span>
      </div>
      <div className="hight-light-child">{children}</div>
    </div>
  );
}
