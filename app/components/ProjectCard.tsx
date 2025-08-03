// app/components/ProjectCard.tsx
import Link from 'next/link'

type Props = {
  title: string
  description: string
  link: string
  icon?: string
}

export default function ProjectCard({ title, description, link, icon }: Props) {
  return (
    <Link
      href={link}
      className="block rounded-xl bg-gray-100 p-4 hover:bg-gray-200 transition"
    >
      <div className="flex gap-3 items-start">
        <span className="text-xl">{icon}</span>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
}
