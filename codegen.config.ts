import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/schema.graphql',
  generates: {
    'src/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        defaultMapper: 'Partial<{T}>',
        maybeValue: 'T | null | undefined',
      },
    },
  },
}

export default config
