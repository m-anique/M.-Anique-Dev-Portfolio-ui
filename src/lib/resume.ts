import resumeAsset from "@/assets/resume.pdf.asset.json";

/**
 * Single source of truth for the resume download.
 *
 * Currently served from the bundled/CDN PDF asset. When a backend Resume API
 * exists, swap the body of `getResumeUrl()` to fetch it (e.g. a server fn
 * returning the latest resume URL) — every button already reads from here.
 */
export const RESUME_FILENAME = "Muhammad_Anique_Qadir_Resume.pdf";

export const RESUME_URL: string = resumeAsset.url;

export function getResumeUrl(): string {
  return RESUME_URL;
}
