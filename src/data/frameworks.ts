export type LanguageInfo = {
  name: string;
};

export const languages = Object.freeze({
  dotnet: {
    name: '.NET',
  },
  go: {
    name: 'Go',
  },
  java: {
    name: 'Java',
  },
  nodejs: {
    name: 'Node.js',
  },
  php: {
    name: 'PHP',
  },
  python: {
    name: 'Python',
  },
  ruby: {
    name: 'Ruby',
  },
  rust: {
    name: 'Rust',
  },
} as const satisfies Record<string, LanguageInfo>);

export type Language = keyof typeof languages;

export type ApiFrameworkInfo = {
  name: string;
  language: Language;
};

export const apiFrameworks = Object.freeze({
  express: {
    name: 'Express.js',
    language: 'nodejs',
  },
  koa: {
    name: 'Koa.js',
    language: 'nodejs',
  },
  fastify: {
    name: 'Fastify',
    language: 'nodejs',
  },
  hapi: {
    name: 'Hapi.js',
    language: 'nodejs',
  },
  nestjs: {
    name: 'NestJS',
    language: 'nodejs',
  },
  gin: {
    name: 'Gin',
    language: 'go',
  },
  fiber: {
    name: 'Fiber',
    language: 'go',
  },
  echo: {
    name: 'Echo',
    language: 'go',
  },
  chi: {
    name: 'Chi',
    language: 'go',
  },
  'spring-boot': {
    name: 'Spring Boot',
    language: 'java',
  },
  quarkus: {
    name: 'Quarkus',
    language: 'java',
  },
  micronaut: {
    name: 'Micronaut',
    language: 'java',
  },
  'vertx-web': {
    name: 'Vert.x Web',
    language: 'java',
  },
  laravel: {
    name: 'Laravel',
    language: 'php',
  },
  symfony: {
    name: 'Symfony',
    language: 'php',
  },
  slim: {
    name: 'Slim',
    language: 'php',
  },
  rails: {
    name: 'Ruby on Rails',
    language: 'ruby',
  },
  sinatra: {
    name: 'Sinatra',
    language: 'ruby',
  },
  grape: {
    name: 'Grape',
    language: 'ruby',
  },
  fastapi: {
    name: 'FastAPI',
    language: 'python',
  },
  flask: {
    name: 'Flask',
    language: 'python',
  },
  django: {
    name: 'Django',
    language: 'python',
  },
  'django-rest': {
    name: 'Django REST Framework',
    language: 'python',
  },
  axum: {
    name: 'Axum',
    language: 'rust',
  },
  'actix-web': {
    name: 'Actix Web',
    language: 'rust',
  },
  rocket: {
    name: 'Rocket',
    language: 'rust',
  },
  'aspnet-core': {
    name: 'ASP.NET Core',
    language: 'dotnet',
  },
} as const satisfies Record<string, ApiFrameworkInfo>);

export type Framework = keyof typeof apiFrameworks;

export const getFrameworkName = (framework: Framework): string => apiFrameworks[framework].name;

export const getFrameworkLanguageName = (framework: Framework): string =>
  languages[apiFrameworks[framework].language].name;
