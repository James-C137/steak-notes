import { Clock, Flame, Thermometer, Beef } from 'lucide-react';

interface Tag {
  label: string;
  icon?: 'clock' | 'flame' | 'thermometer' | 'beef';
}

interface Props {
  tags: Tag[];
}

const icons = {
  clock: Clock,
  flame: Flame,
  thermometer: Thermometer,
  beef: Beef,
};

export default function Tags({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2 text-sm font-mono">
      {tags.map((tag) => {
        const Icon = tag.icon ? icons[tag.icon] : null;
        return (
          <span
            key={tag.label}
            className="bg-sand px-3 py-1 border-2 border-charcoal rounded whitespace-nowrap flex items-center gap-1.5"
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            {tag.label}
          </span>
        );
      })}
    </div>
  );
}
