import { MencionSection } from './mencion-section';

const ITEMS = [
  { icon: 'invoice', t: 'Contratos', d: 'Tramitación de contratos de trabajo' },
  { icon: 'chart', t: 'Remuneraciones', d: 'Cálculo de sueldos y finiquitos' },
  { icon: 'clipboard', t: 'Bienestar', d: 'Evaluaciones, ascensos y desarrollo' },
  { icon: 'handshake', t: 'Reclutamiento', d: 'Descripción de cargos e inducción' },
  { icon: 'scale', t: 'Normativa laboral', d: 'Legislación vigente y previsión' },
];

export function RecursosHumanos() {
  return (
    <MencionSection
      id="rrhh"
      headerIcon="users"
      title="Recursos Humanos"
      items={ITEMS}
      campoLaboral="Campo laboral: departamentos de RR.HH., consultoras y empresas de todo tamaño"
      theme="dark"
    />
  );
}
