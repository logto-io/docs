"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFrameworkLanguageName = exports.getFrameworkName = exports.apiFrameworks = exports.languages = void 0;
exports.languages = Object.freeze({
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
});
exports.apiFrameworks = Object.freeze({
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
});
var getFrameworkName = function (framework) { return exports.apiFrameworks[framework].name; };
exports.getFrameworkName = getFrameworkName;
var getFrameworkLanguageName = function (framework) {
    return exports.languages[exports.apiFrameworks[framework].language].name;
};
exports.getFrameworkLanguageName = getFrameworkLanguageName;
