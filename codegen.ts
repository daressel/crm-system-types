import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/**/*.graphql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-document-nodes',
      ],
      config: {
        avoidOptionals: false,
      },
    },
    // './graphql.schema.json': {
    //   plugins: ['introspection'],
    // },
  },
};

export default config;
