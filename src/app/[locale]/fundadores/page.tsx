import type { Metadata } from 'next';
import { FundadoresView } from './FundadoresView';

export const metadata: Metadata = {
  title: 'Programa Fundadores | Norte Sistemas',
  description: 'Buscamos 5 negocios fundadores: diagnóstico gratis, 1 mes de soporte incluido y un bonus a los 4 meses. Cupos limitados hasta el 31/12.',
  openGraph: {
    title: 'Programa Fundadores · Norte Sistemas',
    description: 'Diagnóstico gratis, 1 mes de soporte incluido y un bonus a los 4 meses. Solo 5 cupos.',
    url: 'https://www.nortesistemas.net/es/fundadores',
    siteName: 'Norte Sistemas',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function FundadoresPage() {
  return <FundadoresView />;
}
