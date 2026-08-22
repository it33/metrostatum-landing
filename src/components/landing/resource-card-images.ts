const base = import.meta.env.BASE_URL;

/** Hosted navy/gold stock photos for About resource cards. */
export const RESOURCE_CARD_IMAGES = {
  press: `${base}images/resources/press.jpg`,
  blog: `${base}images/resources/blog.jpg`,
  community: `${base}images/resources/community.jpg`,
  careers: `${base}images/resources/careers.jpg`,
  partners: `${base}images/resources/partners.jpg`,
  sales: `${base}images/resources/sales.jpg`,
} as const;
