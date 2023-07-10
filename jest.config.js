module.export = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(jsx|js|ts|tsx)$": "babel-jest",
  },
};
