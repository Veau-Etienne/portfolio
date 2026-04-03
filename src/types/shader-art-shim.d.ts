// Assure l'augmentation globale + prise en compte par TS
import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'shader-art': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>, HTMLElement
      > & { autoplay?: boolean };

      'uniform': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>, HTMLElement
      > & {
        type?: string;   // "float" | "color" | ...
        name?: string;
        value?: string;
        min?: string;
        max?: string;
        step?: string;
      };

      // Pour typer les <script> internes de shader-art
      'script': React.DetailedHTMLProps<
        React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement
      > & {
        type?: 'buffer' | 'vert' | 'frag' | string;
        name?: string;
        'data-size'?: string | number;
      };
    }
  }
}

// Modules minimaux
declare module 'shader-art' {
  export type PluginFactory = () => unknown;
  export const ShaderArt: { register(plugins: Array<PluginFactory | unknown>): void };
  const _default: typeof ShaderArt;
  export default _default;
}

declare module '@shader-art/plugin-uniform' {
  export class UniformPlugin {}
  const _default: typeof UniformPlugin;
  export default _default;
}

export {};
