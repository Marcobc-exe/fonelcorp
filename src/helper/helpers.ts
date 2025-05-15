export function getEnvVariable(key: string) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environmnet variable: ${key}`);
  }
  return value;
}
