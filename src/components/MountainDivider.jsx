function MountainDivider({ tone = 'gold' }) {
  return (
    <svg
      className={`ridge ridge--${tone}`}
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline points="0,90 140,20 230,90" />
      <polyline points="180,90 340,10 480,90" />
      <polyline points="420,90 600,30 780,90" />
      <polyline points="720,90 900,12 1050,90" />
      <polyline points="980,90 1090,35 1200,90" />
    </svg>
  );
}

export default MountainDivider;
