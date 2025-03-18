import type { Testimonial } from "@/lib/types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-sm border hover:border-primary hover:shadow-md transition-all">
      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < testimonial.rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={i < testimonial.rating ? "text-yellow-500" : "text-muted-foreground"}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
      <div>
        <p className="font-medium">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
      </div>
    </div>
  )
}

