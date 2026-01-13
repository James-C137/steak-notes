import { CookingPot, ClipboardCheck } from 'lucide-react';

interface Props {
  title: string;
  items: string[];
  icon: 'cooking-pot' | 'clipboard';
  variant?: 'ochre' | 'sage' | 'terracotta' | 'parchment';
}

const icons = {
  'cooking-pot': CookingPot,
  'clipboard': ClipboardCheck,
};

const variantStyles = {
  ochre: { bg: 'bg-ochre/25', accent: 'bg-ochre' },
  sage: { bg: 'bg-sage/25', accent: 'bg-forest' },
  terracotta: { bg: 'bg-terracotta/20', accent: 'bg-brick' },
  parchment: { bg: 'bg-parchment', accent: 'bg-ochre' },
};

export default function ItemList({ title, items, icon, variant = 'ochre' }: Props) {
  const styles = variantStyles[variant];

  const Icon = icons[icon];

  return (
    <section className="my-8">
      <div className={`brutal-border brutal-list ${styles.bg} p-6`}>
        <h3 className="font-black text-lg mt-0 mb-4 flex items-center gap-3">
          <span className={`inline-flex w-8 h-8 ${styles.accent} text-cream items-center justify-center rounded`}>
            <Icon className="w-4 h-4" />
          </span>
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="w-8 flex-shrink-0 flex justify-center">
                <span className={`w-3 h-3 ${styles.accent} rounded-sm`}></span>
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
