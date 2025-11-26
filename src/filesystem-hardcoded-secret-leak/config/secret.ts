// VULNERABILITY: Hardcoded Secret Leak
// This file contains hardcoded secrets that should never be exposed to clients
// In a real system, these would be stored in secure vaults or environment variables
// that are not accessible through the filesystem API

export const SECRETS = {
  API_KEY: "FAKE-KEY-123456",
  DB_PASSWORD: "P@ssw0rd!",
  INTERNAL_TOKEN: "INTERNAL-SERVICE-TOKEN-XYZ"
};

// Additional sensitive configuration
export const DATABASE_CONFIG = {
  host: "internal-db.example.com",
  port: 5432,
  username: "admin",
  password: "SuperSecretDBPassword123!"
};

export const AWS_CREDENTIALS = {
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
};

