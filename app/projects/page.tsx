// app/projects/page.tsx
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Wokay',
    description: 'All-in-one team chat and productivity app.',
    link: '#',
  },
  {
    title: 'Sendit',
    description: 'Frictionless digital commerce platform for creators.',
    link: '#',
  },
  {
    title: 'Warmwind',
    description: 'AI virtual assistant for daily task delegation.',
    link: '#',
  },
  {
    title: 'Passcrypt',
    description: 'Next-gen secure password manager.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-20">
      <h1 className="text-2xl font-semibold mt-12 mb-6">Recent Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}
