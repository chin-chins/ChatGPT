// Server configuration
export const SERVER_PORT = 3000; // Server port
export const DEBUG = false; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = true; // Moderation mode

// Rate limit
export const PRIOD = 15 * 1000; // 15 seconds
export const RATE_LIMIT = 50; // 50 requests per 15 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [
    // "127.0.0.1"
];

// OpenAI API Keys
export let OPENAI_KEYS = [
    "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",
    "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];
