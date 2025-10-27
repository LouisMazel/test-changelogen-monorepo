import { defineConfig } from '@maz-ui/changelogen-monorepo'

export default defineConfig({
  types: {
    feat: { title: '🚀 Features', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🩹 Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    docs: { title: '📖 Documentation', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
    style: { title: '💄 Styles', semver: 'patch' },
    chore: { title: '⚙️ Chore' },
    examples: false,
    test: false,
    ci: false,
    build: false,
  },

  monorepo: {
    versionMode: 'selective',
    packages: ['./packages/*'],
  },

  release: {
    publish: false,
  },
})
