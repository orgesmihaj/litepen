import { TSettings } from 'types/settings';

interface IComposer {
  /**
   * Build the composer.
   */
  build(settings: TSettings): void;
}

export default IComposer;