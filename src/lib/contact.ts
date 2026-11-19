// Datos de contacto compartidos por todo el sitio.
export const WHATSAPP_NUMBER = '5493735609095';

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const FOUNDERS = {
  total: 5,
  taken: 0,
  deadline: '31/12/2026',
} as const;
