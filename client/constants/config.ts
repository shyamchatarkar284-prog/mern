export const APP_URL = process.env.NEXT_PBLIC_ENV === "production"
    ? process.env.NEXT_PUBLIC_LIVE
    : process.env.NEXT_PUBLIC_API_LOCAL 