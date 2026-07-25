import { MencionSection } from './mencion-section';

const ITEMS = [
  { icon: 'box', t: 'Control de productos', d: 'Entrada, salida y stock disponible' },
  { icon: 'chart', t: 'Almacenamiento', d: 'Manejo de existencias y localización' },
  { icon: 'clipboard', t: 'Cubicaje', d: 'Optimización de espacios de bodegaje' },
  { icon: 'laptop', t: 'Sistemas de registro', d: 'Radiofrecuencia y control computacional' },
  { icon: 'shield', t: 'Prevención de riesgos', d: 'Normas de seguridad y rotulación' },
];

export function Logistica() {
  return (
    <MencionSection
      id="logistica"
      headerIcon="truck"
      title="Logística"
      items={ITEMS}
      campoLaboral="Campo laboral: bodegas, centros de distribución, importadoras y operadores logísticos"
      theme="light"
    />
  );
}
