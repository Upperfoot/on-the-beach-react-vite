// jest.config.ts

export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        // process `*.tsx` files with `ts-jest`
        "^.+\\.tsx?$": [
            "ts-jest",
            {tsconfig: 'tsconfig.app.json'}
        ]
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
    },
}