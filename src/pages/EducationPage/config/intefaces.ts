export interface Education {
  src: string,
  alt: string,
  name: {
    ru: string,
    en: string,
  },
  description: {
    ru: string,
    en: string,
  },
  faculty: {
    ru: string,
    en: string,
  },
  period: {
    ru: string,
    en: string,
  },
  speciality: {
    ru: string,
    en: string,
  },
}

export interface Certificate {
  id: number,
  src: string,
  alt: string,
}