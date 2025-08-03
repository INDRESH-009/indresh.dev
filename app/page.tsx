'use client'

import ProjectCard from './components/ProjectCard'
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDiscord,
} from 'react-icons/fa6'
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
} from 'react-icons/si'
import GithubGraph from './components/GithubGraph'

const projects = [
  {
    title: 'Wokay',
    description: 'All-in-one team chat and productivity app.',
    link: '#',
    icon: '🟡',
  },
  {
    title: 'Zenorizon',
    description: 'Modern system for projects, roadmaps, and collaboration.',
    link: '#',
    icon: '⚙️',
  },
  {
    title: 'Warmwind',
    description: 'AI-powered assistant to automate daily tasks.',
    link: '#',
    icon: '🌬️',
  },
  {
    title: 'Sendit',
    description: 'Frictionless digital commerce for creators.',
    link: '#',
    icon: '🚀',
  },
  {
    title: 'Passcrypt',
    description: 'Next-gen secure password manager.',
    link: '#',
    icon: '🔐',
  },
  {
    title: 'Merilink',
    description: 'Smart link for cross-platform content sharing.',
    link: '#',
    icon: '🔗',
  },
]

const skillIcons = [
  { icon: <SiTypescript />, color: 'text-blue-600' },
  { icon: <SiJavascript />, color: 'text-yellow-400' },
  { icon: <SiReact />, color: 'text-sky-500' },
  { icon: <SiNextdotjs />, color: 'text-black' },
  { icon: <SiNodedotjs />, color: 'text-green-600' },
  { icon: <SiPostgresql />, color: 'text-blue-800' },
  { icon: <SiMongodb />, color: 'text-green-700' },
  { icon: <SiTailwindcss />, color: 'text-cyan-500' },
  { icon: <SiDocker />, color: 'text-blue-400' },
  { icon: <SiGit />, color: 'text-orange-500' },
]

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 pb-20 pt-20">
      {/* Name */}
      <h1 className="text-2xl font-semibold mt-10">about</h1>

      {/* About */}
      <section className="mt-4 space-y-2 text-gray-700 text-[15px] leading-relaxed">
        <p>tldr; mostly self-taught by shipping things on the internet</p>
        <p>
          into tech and deep science — things that reshape us.
          <br />
          fascinated by space, systems, and ideas that expand the mind.
        </p>
      </section>

      {/* Social Icons */}
      <section className="mt-6">
        <h2 className="text-sm text-gray-500 mb-1 font-bold uppercase tracking-wide">
          socials
        </h2>
        <div className="flex gap-2 text-3xl text-gray-800">
          <a href="https://x.com/explode73" target="_blank" className="hover:text-black">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/indreshmr/" target="_blank" className="hover:text-black">
            <FaLinkedin />
          </a>
          <a href="https://github.com/INDRESH-009" target="_blank" className="hover:text-black">
            <FaGithub />
          </a>
          <a href="mailto:indresh15.dev@gmail.com" className="hover:text-black">
            <FaEnvelope />
          </a>
          <a href="https://discord.com" target="_blank" className="hover:text-black">
            <FaDiscord />
          </a>
        </div>
      </section>

      {/* Recent Work */}
      <section className="mt-10">
        <h2 className="text-sm font-bold mb-3 text-gray-800 uppercase tracking-wide">
          recent work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="mt-12">
        <h2 className="text-sm font-bold mb-3 text-gray-800 uppercase tracking-wide">
          github stats
        </h2>
        <div className="w-full overflow-x-auto rounded-xl border border-gray-200">
            <GithubGraph/>
        </div>
        <p className="text-sm text-gray-500 mt-1 text-right">
          Contributions this year
        </p>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-sm font-bold mb-3 text-gray-800 uppercase tracking-wide">
          skills
        </h2>
        <div className="flex flex-wrap gap-4 text-3xl">
          {skillIcons.map(({ icon, color }, index) => (
            <span key={index} className={`${color}`}>{icon}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="text-sm font-medium mb-3 text-gray-800 uppercase tracking-wide">
          experience
        </h2>
        <div className="space-y-3">
          {[
            {
              role: 'Software Engineer',
              company: 'Warmwind',
              icon: '🌬️',
              date: 'Jan 2025 – Present',
            },
            {
              role: 'Founding Engineer',
              company: 'Sendit',
              icon: '🚀',
              date: 'Jun 2024 – Dec 2024',
            },
            {
              role: 'Full Stack Developer',
              company: 'Freelance',
              icon: '💻',
              date: 'Aug 2023 – May 2024',
            },
            {
              role: 'Backend Developer',
              company: 'Stealth Startup',
              icon: '🕶️',
              date: 'Dec 2021 – Jul 2022',
            },
          ].map((exp) => (
            <div
              key={exp.company}
              className="flex items-center justify-between border px-4 py-3 rounded-xl"
            >
              <div className="flex gap-3 items-center">
                <span className="text-xl">{exp.icon}</span>
                <div>
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-sm text-gray-600">{exp.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{exp.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
