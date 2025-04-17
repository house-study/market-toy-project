import { badgeStyleMap } from '@/constants/style';

interface BadgeProps {
  label?: string;
}

const Badge = ({ label }: BadgeProps) => {
  const color = (label && badgeStyleMap[label]) || 'bg-gray-100 text-gray-800';
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-semibold ${color}`}
    >
      {label}
    </span>
  );
};
export default Badge;
