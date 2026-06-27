"use client";

import { useEffect, useRef } from "react";

const POSITION_BUFFER = "[-1, 1, -1,-1, 1,1, 1, 1, -1,-1, 1,-1]";
const UV_BUFFER = "[0,0, 0,1, 1,0, 1,0, 0,1, 1,1]";

const VERTEX_SHADER = `
precision highp float;
attribute vec4 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = position;
}
`;

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 vUv;
uniform float time;
uniform vec2 resolution;

const float SCALE = 1.0;
const float AX = 5.0, AY = 7.0, AZ = 9.0, AW = 13.0;
const float BX = 1.0, BY = 1.0;

const vec3 COLOR1 = vec3(0.0431, 0.0431, 0.4000);
const vec3 COLOR2 = vec3(0.4706, 0.2510, 0.5686);
const vec3 COLOR3 = vec3(0.0118, 0.1020, 0.2745);
const vec3 COLOR4 = vec3(0.0510, 0.3059, 0.9294);

float cheapNoise(vec3 stp) {
  vec3 p = vec3(stp.st, stp.p);
  vec4 a = vec4(AX, AY, AZ, AW);
  return mix(
    sin(p.z + p.x*a.x + cos(p.x*a.x - p.z)) *
    cos(p.z + p.y*a.y + cos(p.y*a.x + p.z)),
    sin(1. + p.x*a.z + p.z + cos(p.y*a.w - p.z)) *
    cos(1. + p.y*a.w + p.z + cos(p.x*a.x + p.z)),
    .436
  );
}

void main() {
  vec2 aR = vec2(resolution.x / resolution.y, 1.0);
  vec2 st = vUv * aR * SCALE;
  float S = sin(time * .005);
  float C = cos(time * .005);

  vec2 v1 = vec2(cheapNoise(vec3(st, 2.0)), cheapNoise(vec3(st, 1.0)));
  vec2 v2 = vec2(
    cheapNoise(vec3(st + BX*v1 + vec2(C*1.7, S*9.2), 0.15*time)),
    cheapNoise(vec3(st + BY*v1 + vec2(S*8.3, C*2.8), 0.126*time))
  );

  float n = .5 + .5 * cheapNoise(vec3(st + v2, 0.0));

  vec3 color = mix(COLOR1, COLOR2, clamp((n*n)*8.0, 0.0, 1.0));
  color = mix(color, COLOR3, clamp(length(v1), 0.0, 1.0));
  color = mix(color, COLOR4, clamp(length(v2.x), 0.0, 1.0));
  color /= n*n + n*7.0;

  gl_FragColor = vec4(color, 1.0);
}
`;

const LOADER_ID = "shader-art-loader";

export default function LiquidMetalBackground() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      host.innerHTML = "";
      return;
    }

    if (!document.getElementById(LOADER_ID)) {
      const mod = document.createElement("script");
      mod.id = LOADER_ID;
      mod.type = "module";
      mod.textContent = `
        import { ShaderArt } from 'https://esm.sh/shader-art';
        ShaderArt.register([]);
      `;
      document.head.appendChild(mod);
    }

    const shaderArt = document.createElement("shader-art");
    shaderArt.setAttribute("autoplay", "");
    shaderArt.style.display = "block";
    shaderArt.style.width = "100%";
    shaderArt.style.height = "100%";

    const createBufferScript = (name: string, data: string) => {
      const script = document.createElement("script");
      script.type = "buffer";
      script.setAttribute("name", name);
      script.dataset.size = "2";
      script.textContent = data;
      return script;
    };

    const createShaderScript = (type: "vert" | "frag", source: string) => {
      const script = document.createElement("script");
      script.type = type;
      script.textContent = source;
      return script;
    };

    shaderArt.appendChild(createBufferScript("position", POSITION_BUFFER));
    shaderArt.appendChild(createBufferScript("uv", UV_BUFFER));
    shaderArt.appendChild(createShaderScript("vert", VERTEX_SHADER));
    shaderArt.appendChild(createShaderScript("frag", FRAGMENT_SHADER));

    host.appendChild(shaderArt);

    return () => {
      host.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.85]"
      aria-hidden="true"
    />
  );
}
