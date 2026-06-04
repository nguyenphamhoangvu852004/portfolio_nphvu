// ── Core Discussion Types ───────────────────────────────────────────────────

export type TagColor = "purple" | "sky" | "emerald" | "amber" | "rose" | "indigo" | "teal" | "orange";

export interface TradeoffItem {
  option: string;
  pro: string;
  con: string;
}

export interface TechDiscussion {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: TagColor;
  context: string;
  approach: string;
  tradeoffs: TradeoffItem[];
  conclusion: string;
  relatedProjects: string[];
  keywords: string[];
  // Extended fields for discussion forum layout
  author: string;
  createdAt: string; // ISO string or human readable
  commentCount: number;
  views: number;
}

// ── Comment Types ───────────────────────────────────────────────────────────

export interface Comment {
  id: string;
  author: string;
  avatarInitials: string;
  avatarColor: string;
  content: string;
  createdAt: string;
  likes: number;
  topicId: string;
}

// ── UI State Types ──────────────────────────────────────────────────────────

export interface TechnicalPageState {
  selectedTopicId: string | null;
  searchQuery: string;
  activeTag: string;
}
