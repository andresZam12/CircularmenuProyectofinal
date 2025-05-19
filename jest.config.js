import { property } from "three/tsl";

export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest' // Transforma JSX y ES Modules
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@/(.*)$': '<rootDir>/src/$1' // Opcional: alias para imports
  },
  extensionsToTreatAsEsm: ['.jsx'] // Solo necesario para JSX

  

}
