export interface SkillItem {
  name: string
  value: number
}

export interface SkillCategory {
  title: string
  icon: string
  accent: 'teal' | 'violet' | 'amber' | 'sky'
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: '</>',
    accent: 'teal',
    skills: [
      { name: 'Java', value: 92 },
      { name: 'TypeScript', value: 82 },
      { name: 'SQL', value: 79 },
      { name: 'JavaScript', value: 84 },
    ],
  },
  {
    title: 'Frameworks',
    icon: '[]',
    accent: 'violet',
    skills: [
      { name: 'Spring Boot', value: 90 },
      { name: 'React', value: 86 },
      { name: 'Next.js', value: 84 },
      { name: 'Tailwind CSS', value: 88 },
    ],
  },
  {
    title: 'Test Auto',
    icon: '⚡',
    accent: 'amber',
    skills: [
      { name: 'Selenium', value: 89 },
      { name: 'Playwright', value: 84 },
      { name: 'Postman', value: 80 },
      { name: 'TestNG / JUnit', value: 85 },
    ],
  },
  {
    title: 'SDLC / Quality',
    icon: '📋',
    accent: 'sky',
    skills: [
      { name: 'Requirement Analysis', value: 83 },
      { name: 'Test Planning', value: 86 },
      { name: 'Defect Lifecycle', value: 84 },
      { name: 'CI/CD Quality Gates', value: 78 },
    ],
  },
]
