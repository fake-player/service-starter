import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/schema.graphql',
  generates: {
    'src/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        defaultMapper: 'Partial<{T}>',
        maybeValue: 'T | null | undefined',
        scalars: {
          DateTime: 'Date',
          Void: 'void',
        },
      },
    },
  },
}

export default config
