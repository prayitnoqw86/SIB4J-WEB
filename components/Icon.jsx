import { ICONS } from '@/lib/icons';

/**
 * Icon — merender path SVG dari lib/icons.
 * Setiap sub-path dipisah dengan huruf "M" lalu direkonstruksi menjadi <path>.
 */
export default function Icon({ name, size = 22, stroke = 2 }) {
  const d = ICONS[name] || ICONS.dots;
  const paths = d.split('M').filter(Boolean).map((p, i) => (
    <path key={i} d={'M' + p} />
  ));
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths}
    </svg>
  );
}
