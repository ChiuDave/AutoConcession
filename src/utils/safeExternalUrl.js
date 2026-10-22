const SAFE_PROTOCOLS = new Set(["http:", "https:"]);

export const getSafeExternalImageUrl = (value, fallback = "") => {
  if (typeof value !== "string" || value.trim() === "") {
    return fallback;
  }

  try {
    const parsedUrl = new URL(value, window.location.origin);
    return SAFE_PROTOCOLS.has(parsedUrl.protocol) ? parsedUrl.toString() : fallback;
  } catch {
    return fallback;
  }
};
