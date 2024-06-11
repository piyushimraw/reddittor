export interface RedditResponse {
  kind: string;
  data: RedditResponseData;
}

export interface RedditResponseData {
  modhash: string;
  dist: number;
  facets: Facets;
  after: string;
  geo_filter: string;
  children: Child[];
  before: null;
}

export interface Child {
  kind: Kind;
  data: ChildData;
}

export interface ChildData {
  approved_at_utc: null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: LinkFlairRichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: LinkFlairCSSClass | null;
  downs: number;
  thumbnail_height: number | null;
  top_awarded_type: null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: FlairTextColor;
  upvote_ratio: number;
  author_flair_background_color: null | string;
  subreddit_type: SubredditType;
  ups: number;
  total_awards_received: number;
  media_embed: Facets;
  thumbnail_width: number | null;
  author_flair_template_id: null | string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: Media | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: Facets;
  link_flair_text: null | string;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean | number;
  author_flair_css_class: null;
  author_flair_richtext: AuthorFlairRichtext[];
  gildings: Facets;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: AuthorFlairType;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: AuthorFlairType;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: null | string;
  likes: null;
  suggested_sort: null | string;
  banned_at_utc: null;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null | string;
  treatment_tags: any[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: WhitelistStatus;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: FlairTextColor | null;
  permalink: string;
  parent_whitelist_status: WhitelistStatus;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: Media | null;
  is_video: boolean;
  post_hint?: PostHint;
  url_overridden_by_dest?: string;
  preview?: Preview;
  link_flair_template_id?: string;
}

export interface AuthorFlairRichtext {
  a: string;
  e: E;
  u: string;
}

export enum E {
  Emoji = "emoji",
}

export enum FlairTextColor {
  Dark = "dark",
  Light = "light",
}

export enum AuthorFlairType {
  Richtext = "richtext",
  Text = "text",
}

export interface Facets {}

export enum LinkFlairCSSClass {
  Empty = "",
  Meme = "meme",
  Trend = "trend",
}

export interface LinkFlairRichtext {
  e: AuthorFlairType;
  t: string;
}

export interface Media {
  reddit_video: RedditVideo;
}

export interface RedditVideo {
  bitrate_kbps: number;
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export enum WhitelistStatus {
  AllAds = "all_ads",
}

export enum PostHint {
  HostedVideo = "hosted:video",
  Image = "image",
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Image {
  source: Source;
  resolutions: Source[];
  variants: Variants;
  id: string;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Variants {
  gif?: GIF;
  mp4?: GIF;
}

export interface GIF {
  source: Source;
  resolutions: Source[];
}

export enum SubredditType {
  Public = "public",
}

export enum Kind {
  T3 = "t3",
}
