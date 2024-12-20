export interface SearchResult {
  title: string;
  url: string;
  description: string;
  context?: string;
  category?: string;
}

export interface TypeScriptSearchArgs {
  query: string;
  category?: 'handbook' | 'reference' | 'release-notes' | 'declaration-files' | 'javascript';
}

export interface NodeDocsSearchArgs {
  query: string;
  category?: 'core';
}

export interface DiscordSearchArgs {
  query: string;
  category?: 'preparations' | 'creating-your-bot' | 'slash-commands' | 'interactions' | 'message-components' | 'popular-topics' | 'voice' | 'additional-features' | 'improving-dev-environment' | 'miscellaneous';
}

export interface NoResultsResponse {
  message: string;
  suggestion: string;
}

// Match MCP SDK's response format
export interface McpToolResponse {
  _meta?: Record<string, unknown>;
  content: Array<{
    type: string;
    text: string;
  }>;
  isError?: boolean;
}
