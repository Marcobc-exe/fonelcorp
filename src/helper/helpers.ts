export function getEnvVariable(key: string) {
  const value = import.meta.env[key as keyof ImportMetaEnv] as string | undefined;
  if (!value) {
    throw new Error(`Missing environmnet variable: ${key}`);
  }
  return value;
}
