import SeminarRoom from '../../components/SeminarRoom';
import { chapters } from '../../data/chapters.js';

export default function EvolutionaryPsychologyPage() {
  return (
    <SeminarRoom 
      chapter={chapters.evolutionaryPsychology}
      theme="green"
    />
  );
}