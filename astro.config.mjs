import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://strix-engineering-studio.github.io',
  base: '/strix-developer',
  integrations: [
    starlight({
      title: 'Strix Developer Documentation',
      description: 'Technical documentation for Strix Engineering Studio.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/strix-engineering-studio/strix-developer',
        },
      ],
      sidebar: [
        { label: 'Start here', items: [
          { label: 'Welcome', slug: 'index' },
          { label: 'Developer onboarding', slug: 'getting-started/onboarding' },
          { label: 'Local development', slug: 'getting-started/local-development' },
        ]},
        { label: 'Engineering', items: [
          { label: 'Architecture', slug: 'engineering/architecture' },
          { label: 'Code standards', slug: 'engineering/code-standards' },
          { label: 'Testing strategy', slug: 'engineering/testing' },
        ]},
        { label: 'Operations', items: [
          { label: 'CI/CD', slug: 'operations/ci-cd' },
          { label: 'Deployment', slug: 'operations/deployment' },
          { label: 'Troubleshooting', slug: 'operations/troubleshooting' },
        ]},
        { label: 'Products and platforms', autogenerate: { directory: 'products' }},
      ],
      editLink: {
        baseUrl: 'https://github.com/strix-engineering-studio/strix-developer/edit/main/',
      },
    }),
  ],
});
