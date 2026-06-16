const data = [
  { year: 2021, applicants: 2533, shortlisted: 2722 },
  { year: 2022, applicants: 2537, shortlisted: 2746 },
  { year: 2023, applicants: 2577, shortlisted: 2794 },
  { year: 2024, applicants: 2635, shortlisted: 2860 },
  { year: 2025, applicants: 2745, shortlisted: 2950 },
];

const W = 880;
const H = 480;
const PAD = { top: 80, right: 40, bottom: 56, left: 80 };
const Y_MIN = 2400;
const Y_MAX = 3050;
const Y_STEP = 50;

const innerW = W - PAD.left - PAD.right;
const innerH = H - PAD.top - PAD.bottom;

const xFor = (i: number) => PAD.left + (i * innerW) / (data.length - 1);
const yFor = (v: number) =>
  PAD.top + ((Y_MAX - v) / (Y_MAX - Y_MIN)) * innerH;

// Catmull-Rom to bezier smoothing
function smoothPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function BarRisesChart() {
  const applicantsPts = data.map((d, i) => ({ x: xFor(i), y: yFor(d.applicants) }));
  const shortlistedPts = data.map((d, i) => ({ x: xFor(i), y: yFor(d.shortlisted) }));

  const yTicks: number[] = [];
  for (let v = Y_MIN; v <= Y_MAX; v += Y_STEP) yTicks.push(v);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="block h-auto w-full"
      role="img"
      aria-label="Mean UCAT scores of Manchester Dentistry applicants vs shortlisted, 2021 to 2025"
    >
      {/* Header */}
      <text
        x={W / 2}
        y={28}
        textAnchor="middle"
        className="fill-accent"
        style={{ fontSize: 13, letterSpacing: "0.2em", fontWeight: 500 }}
      >
        UCAS DATA · MEAN SCORES
      </text>
      <text
        x={W / 2}
        y={56}
        textAnchor="middle"
        className="fill-foreground"
        style={{ fontSize: 22, fontFamily: "var(--font-serif)", fontWeight: 600 }}
      >
        Applicant vs shortlisted scores (2021–2025)
      </text>

      {/* Y axis label */}
      <text
        transform={`translate(22 ${PAD.top + innerH / 2}) rotate(-90)`}
        textAnchor="middle"
        className="fill-muted-foreground"
        style={{ fontSize: 12 }}
      >
        Mean score
      </text>

      {/* Gridlines + Y ticks */}
      {yTicks.map((v) => {
        const y = yFor(v);
        return (
          <g key={v}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y}
              y2={y}
              className="stroke-border"
              strokeWidth={1}
            />
            <text
              x={PAD.left - 12}
              y={y + 4}
              textAnchor="end"
              className="fill-muted-foreground"
              style={{ fontSize: 12 }}
            >
              {v.toLocaleString()}
            </text>
          </g>
        );
      })}

      {/* X axis labels */}
      {data.map((d, i) => (
        <text
          key={d.year}
          x={xFor(i)}
          y={H - PAD.bottom + 24}
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontSize: 14, fontWeight: 500 }}
        >
          {d.year}
        </text>
      ))}

      {/* Applicants line (solid, primary navy) */}
      <path
        d={smoothPath(applicantsPts)}
        fill="none"
        className="stroke-primary"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {applicantsPts.map((p, i) => (
        <circle
          key={`a-${i}`}
          cx={p.x}
          cy={p.y}
          r={5}
          className="fill-primary"
        />
      ))}

      {/* Shortlisted line (dashed, accent) */}
      <path
        d={smoothPath(shortlistedPts)}
        fill="none"
        className="stroke-accent"
        strokeWidth={2.5}
        strokeDasharray="8 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {shortlistedPts.map((p, i) => (
        <circle
          key={`s-${i}`}
          cx={p.x}
          cy={p.y}
          r={5}
          className="fill-accent"
        />
      ))}

      {/* Legend */}
      <g transform={`translate(${W / 2 - 170} 74)`}>
        <line x1={0} y1={6} x2={28} y2={6} className="stroke-primary" strokeWidth={2.5} strokeLinecap="round" />
        <text x={36} y={10} className="fill-foreground" style={{ fontSize: 13 }}>
          Applicants
        </text>
        <g transform="translate(160 0)">
          <line
            x1={0}
            y1={6}
            x2={28}
            y2={6}
            className="stroke-accent"
            strokeWidth={2.5}
            strokeDasharray="6 5"
            strokeLinecap="round"
          />
          <text x={36} y={10} className="fill-foreground" style={{ fontSize: 13 }}>
            Shortlisted
          </text>
        </g>
      </g>
    </svg>
  );
}