module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\.tsx?$': ['ts-jest', {}],
    },
    moduleNameMapper: {
        '^@users/(.*)$': '<rootDir>/src/users/$1',
    },
    preset: 'ts-jest/presets/default-esm',
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    // setupFilesAfterEnv: ['./jest.setup.ts']
}
