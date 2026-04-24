export interface ProjectItem {
  title: string
  summary: string
  description: string
  stack: string[]
  featured?: boolean
  githubUrl: string
  demoUrl: string
  accent: 'teal' | 'violet' | 'amber' | 'sky'
}

export const projects: ProjectItem[] = [
  {
    title: 'Smart Banking Console',
    summary: 'Role-based banking platform with transaction integrity and audit-friendly logs.',
    description:
      'A feature-rich Java + Spring Boot banking system with secure APIs, account workflows, and end-to-end automation coverage for major journeys.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Selenium', 'Docker'],
    featured: true,
    githubUrl: 'https://github.com/henasivenom',
    demoUrl: 'https://github.com/henasivenom',
    accent: 'teal',
  },
  {
    title: 'Airline Reservation Engine',
    summary: 'Seat inventory, booking orchestration, and cancellation lifecycle automation.',
    description:
      'Domain-driven reservation flow with responsive dashboard and validation-heavy forms, designed for reliability under concurrent requests.',
    stack: ['Java', 'Spring', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/henasivenom',
    demoUrl: 'https://github.com/henasivenom',
    accent: 'violet',
  },
  {
    title: 'QA Velocity Dashboard',
    summary: 'Execution analytics for automation suites with trend and flakiness insights.',
    description:
      'Built a visualization layer for automation results, helping prioritize flaky tests and boost release confidence with meaningful trend metrics.',
    stack: ['TypeScript', 'Next.js', 'Playwright', 'Charting'],
    githubUrl: 'https://github.com/henasivenom',
    demoUrl: 'https://github.com/henasivenom',
    accent: 'amber',
  },
  {
    title: 'Portfolio Experience Lab',
    summary: 'Experimental motion system for portfolio storytelling.',
    description:
      'A reusable component architecture for kinetic UI, glassmorphism surfaces, and recruiter-focused content hierarchy.',
    stack: ['Next.js', 'Framer Motion', 'Tailwind'],
    githubUrl: 'https://github.com/henasivenom',
    demoUrl: 'https://github.com/henasivenom',
    accent: 'sky',
  },
]
