import type { ReactElement } from 'react'

const W = '#ffffff'
const K = '#161312'

interface FlowerProps {
  cx: number
  cy: number
  petals: number
  rx: number
  ry: number
  dist: number
  center: number
}

function Flower({ cx, cy, petals, rx, ry, dist, center }: FlowerProps) {
  return (
    <g>
      {Array.from({ length: petals }, (_, i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy - dist}
          rx={rx}
          ry={ry}
          fill={W}
          stroke={K}
          strokeWidth={2.5}
          transform={`rotate(${(i * 360) / petals} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={center} fill={K} />
    </g>
  )
}

const MOTIFS: Record<string, () => ReactElement> = {
  pine: () => (
    <g strokeLinejoin="round">
      <circle cx={72} cy={26} r={13} fill="#d62f2f" stroke={K} strokeWidth={3} />
      <path
        d="M40 134 C34 110 52 98 44 78 C38 62 50 52 46 36"
        fill="none"
        stroke={K}
        strokeWidth={7}
        strokeLinecap="round"
      />
      <ellipse cx={40} cy={100} rx={32} ry={10} fill={W} stroke={K} strokeWidth={3} />
      <ellipse cx={58} cy={70} rx={30} ry={10} fill={W} stroke={K} strokeWidth={3} />
      <ellipse cx={38} cy={42} rx={28} ry={10} fill={W} stroke={K} strokeWidth={3} />
    </g>
  ),
  plum: () => (
    <g>
      <path d="M10 128 C30 98 42 82 92 28" fill="none" stroke={K} strokeWidth={6} strokeLinecap="round" />
      <Flower cx={38} cy={92} petals={5} rx={8} ry={8} dist={9} center={3.5} />
      <Flower cx={60} cy={64} petals={5} rx={8} ry={8} dist={9} center={3.5} />
      <Flower cx={80} cy={38} petals={5} rx={7} ry={7} dist={8} center={3} />
    </g>
  ),
  cherry: () => (
    <g>
      <Flower cx={36} cy={44} petals={5} rx={6} ry={11} dist={11} center={3} />
      <Flower cx={66} cy={72} petals={5} rx={6.5} ry={12} dist={12} center={3.5} />
      <Flower cx={38} cy={102} petals={5} rx={6} ry={11} dist={11} center={3} />
    </g>
  ),
  peony: () => (
    <g>
      <ellipse cx={20} cy={122} rx={18} ry={8} fill={K} transform="rotate(-25 20 122)" />
      <ellipse cx={80} cy={122} rx={18} ry={8} fill={K} transform="rotate(25 80 122)" />
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse
          key={`o${i}`}
          cx={50}
          cy={58 - 22}
          rx={15}
          ry={21}
          fill={W}
          stroke={K}
          strokeWidth={2.5}
          transform={`rotate(${i * 45} 50 58)`}
        />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <ellipse
          key={`i${i}`}
          cx={50}
          cy={58 - 11}
          rx={10}
          ry={14}
          fill={K}
          stroke={W}
          strokeWidth={2}
          transform={`rotate(${i * 60 + 30} 50 58)`}
        />
      ))}
      <circle cx={50} cy={58} r={7} fill={W} />
    </g>
  ),
  mum: () => (
    <g>
      {Array.from({ length: 16 }, (_, i) => (
        <ellipse
          key={i}
          cx={50}
          cy={70 - 22}
          rx={5}
          ry={20}
          fill={W}
          stroke={K}
          strokeWidth={2}
          transform={`rotate(${(i * 360) / 16} 50 70)`}
        />
      ))}
      <circle cx={50} cy={70} r={12} fill={K} />
      <circle cx={50} cy={70} r={5} fill={W} />
    </g>
  ),
  maple: () => (
    <g strokeLinejoin="round">
      <line x1={50} y1={96} x2={50} y2={130} stroke={K} strokeWidth={5} strokeLinecap="round" />
      <polygon
        points="50,16 58,44 80,34 72,60 94,66 70,80 76,100 54,90 50,116 46,90 24,100 30,80 6,66 28,60 20,34 42,44"
        fill={W}
        stroke={K}
        strokeWidth={3}
      />
    </g>
  ),
  iris: () => (
    <g>
      <polygon points="36,134 24,14 46,134" fill={K} />
      <polygon points="46,134 50,6 56,134" fill={K} />
      <polygon points="56,134 76,18 64,134" fill={K} />
      <ellipse cx={26} cy={96} rx={16} ry={8} fill={W} stroke={K} strokeWidth={3} transform="rotate(28 26 96)" />
      <ellipse cx={74} cy={96} rx={16} ry={8} fill={W} stroke={K} strokeWidth={3} transform="rotate(-28 74 96)" />
      <ellipse cx={50} cy={84} rx={10} ry={15} fill={W} stroke={K} strokeWidth={3} />
      <circle cx={50} cy={90} r={3.5} fill={K} />
    </g>
  ),
  paulownia: () => (
    <g>
      <rect x={47} y={68} width={6} height={64} fill={K} />
      <ellipse cx={26} cy={112} rx={18} ry={8} fill={K} transform="rotate(-20 26 112)" />
      <ellipse cx={74} cy={112} rx={18} ry={8} fill={K} transform="rotate(20 74 112)" />
      <ellipse cx={50} cy={34} rx={12} ry={22} fill={W} stroke={K} strokeWidth={3} />
      <ellipse cx={29} cy={58} rx={10} ry={18} fill={W} stroke={K} strokeWidth={3} transform="rotate(-18 29 58)" />
      <ellipse cx={71} cy={58} rx={10} ry={18} fill={W} stroke={K} strokeWidth={3} transform="rotate(18 71 58)" />
      {[
        [50, 22],
        [50, 36],
        [50, 48],
        [29, 52],
        [30, 64],
        [71, 52],
        [70, 64],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={2.4} fill={K} />
      ))}
    </g>
  ),
}

export default function Motif({ id }: { id: string }) {
  const draw = MOTIFS[id]
  return (
    <svg className="motif" viewBox="0 0 100 140" aria-hidden="true" focusable="false">
      {draw?.()}
    </svg>
  )
}
