import React, { useEffect, useRef } from "react";

export interface PixelBlastProps {
  variant?: "square" | "cross" | "diamond" | "hex";
  pixelSize?: number;
  color?: string;
  secondaryColor?: string;
  patternScale?: number;
  patternDensity?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleSpeed?: number;
  rippleThickness?: number;
  rippleIntensityScale?: number;
  liquid?: boolean;
  liquidStrength?: number;
  liquidRadius?: number;
  liquidWobbleSpeed?: number;
  speed?: number;
  edgeFade?: number;
  transparent?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

interface Ripple {
  x: number;
  y: number;
  startTime: number;
  maxRadius: number;
}

// 4x4 Bayer Matrix values normalized 0..1
const BAYER_4X4 = [
  0.0 / 16.0,  8.0 / 16.0,  2.0 / 16.0, 10.0 / 16.0,
 12.0 / 16.0,  4.0 / 16.0, 14.0 / 16.0,  6.0 / 16.0,
  3.0 / 16.0, 11.0 / 16.0,  1.0 / 16.0,  9.0 / 16.0,
 15.0 / 16.0,  7.0 / 16.0, 13.0 / 16.0,  5.0 / 16.0,
];

const VS_SOURCE = `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FS_SOURCE = `
precision highp float;

varying vec2 vUv;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uSecondaryColor;
uniform float uPixelSize;
uniform float uPatternScale;
uniform float uPatternDensity;
uniform float uSpeed;
uniform float uEdgeFade;
uniform float uVariant; // 0.0: square, 1.0: cross (+), 2.0: diamond, 3.0: hex
uniform float uTransparent;

uniform float uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensityScale;
uniform vec2 uR0, uR1, uR2, uR3, uR4, uR5;
uniform float uT0, uT1, uT2, uT3, uT4, uT5;

uniform float uLiquid;
uniform float uLiquidStrength;
uniform float uLiquidRadius;
uniform float uLiquidWobbleSpeed;

float getBayer(vec2 p) {
  vec2 b = mod(floor(p), 4.0);
  float idx = b.y * 4.0 + b.x;
  if (idx < 0.5) return 0.0 / 16.0;
  if (idx < 1.5) return 8.0 / 16.0;
  if (idx < 2.5) return 2.0 / 16.0;
  if (idx < 3.5) return 10.0 / 16.0;
  if (idx < 4.5) return 12.0 / 16.0;
  if (idx < 5.5) return 4.0 / 16.0;
  if (idx < 6.5) return 14.0 / 16.0;
  if (idx < 7.5) return 6.0 / 16.0;
  if (idx < 8.5) return 3.0 / 16.0;
  if (idx < 9.5) return 11.0 / 16.0;
  if (idx < 10.5) return 1.0 / 16.0;
  if (idx < 11.5) return 9.0 / 16.0;
  if (idx < 12.5) return 15.0 / 16.0;
  if (idx < 13.5) return 7.0 / 16.0;
  if (idx < 14.5) return 13.0 / 16.0;
  return 5.0 / 16.0;
}

float evalRipple(vec2 p, vec2 rPos, float rTime) {
  if (rTime < 0.0 || rTime > 5.0) return 0.0;
  float d = distance(p, rPos);
  float radius = rTime * uRippleSpeed;
  float diff = abs(d - radius);
  float ring = exp(-pow(diff / max(0.01, uRippleThickness), 2.0));
  float decay = max(0.0, 1.0 - (rTime / 5.0));
  return ring * decay * uRippleIntensityScale;
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  float pSize = max(1.0, uPixelSize);
  
  vec2 grid = floor(fragCoord / pSize);
  vec2 pixelCenter = (grid + 0.5) * pSize;
  vec2 cellOffset = (fragCoord - grid * pSize) / pSize - 0.5;

  float minRes = min(uResolution.x, uResolution.y);
  vec2 p = (pixelCenter - 0.5 * uResolution.xy) / minRes * uPatternScale;

  if (uLiquid > 0.5) {
    float wobble = sin(p.y * uLiquidRadius + uTime * uLiquidWobbleSpeed) * cos(p.x * uLiquidRadius + uTime * uLiquidWobbleSpeed);
    p += vec2(cos(wobble * 3.14159), sin(wobble * 3.14159)) * uLiquidStrength;
  }

  float t = uTime * uSpeed;
  float w1 = sin(p.x * 2.2 + t * 1.5) * cos(p.y * 1.9 - t * 1.1);
  float w2 = sin((p.x + p.y) * 1.8 - t * 0.8) * 0.5 + 0.5;
  float w3 = cos(length(p) * 2.5 - t * 1.2) * 0.5 + 0.5;

  float pattern = (w1 * 0.4 + w2 * 0.35 + w3 * 0.25) * uPatternDensity;
  pattern = clamp(pattern * 0.5 + 0.5, 0.0, 1.0);

  if (uEnableRipples > 0.5) {
    float rip = 0.0;
    rip += evalRipple(p, uR0, uT0);
    rip += evalRipple(p, uR1, uT1);
    rip += evalRipple(p, uR2, uT2);
    rip += evalRipple(p, uR3, uT3);
    rip += evalRipple(p, uR4, uT4);
    rip += evalRipple(p, uR5, uT5);
    pattern = clamp(pattern + rip * 0.6, 0.0, 1.0);
  }

  // Unique shape geometry
  float shape = 1.0;
  if (uVariant > 0.5 && uVariant < 1.5) {
    // Unique Cross / Plus (+) mark - high-tech coordinate matrix
    float barW = 0.16;
    float barL = 0.44;
    float hBar = step(abs(cellOffset.y), barW) * step(abs(cellOffset.x), barL);
    float vBar = step(abs(cellOffset.x), barW) * step(abs(cellOffset.y), barL);
    shape = max(hBar, vBar);
  } else if (uVariant > 1.5 && uVariant < 2.5) {
    // Unique Diamond
    shape = step(abs(cellOffset.x) + abs(cellOffset.y), 0.52);
  } else if (uVariant > 2.5) {
    // Unique Hexagonal micro-tile
    shape = step(max(abs(cellOffset.x) * 0.866 + abs(cellOffset.y) * 0.5, abs(cellOffset.y)), 0.45);
  }

  float bayer = getBayer(grid);
  float dithered = step(bayer, pattern) * shape;

  vec2 uv = fragCoord / uResolution.xy;
  float distEdge = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
  float vignette = smoothstep(0.0, max(0.001, uEdgeFade), distEdge);

  float finalAlpha = dithered * vignette;

  // Deep dark navy blend
  vec3 blendColor = mix(uSecondaryColor, uColor, clamp(pattern, 0.0, 1.0));

  if (uTransparent > 0.5) {
    gl_FragColor = vec4(blendColor, finalAlpha * 0.85);
  } else {
    vec3 bg = vec3(0.04, 0.07, 0.14); // ultra deep navy
    gl_FragColor = vec4(mix(bg, blendColor, finalAlpha), 1.0);
  }
}
`;

function parseColor(hex: string, fallback: [number, number, number]): [number, number, number] {
  if (!hex) return fallback;
  let clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    clean = clean.split("").map((c) => c + c).join("");
  }
  const n = parseInt(clean, 16);
  if (isNaN(n)) return fallback;
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export function PixelBlast({
  variant = "cross",
  pixelSize = 5,
  color = "#152445", // Deep Dark Sapphire Navy
  secondaryColor = "#080F1E", // Pitch Dark Midnight Navy
  patternScale = 2,
  patternDensity = 1,
  pixelSizeJitter = 0,
  enableRipples = true,
  rippleSpeed = 0.4,
  rippleThickness = 0.12,
  rippleIntensityScale = 1.5,
  liquid = false,
  liquidStrength = 0.12,
  liquidRadius = 1.2,
  liquidWobbleSpeed = 5,
  speed = 0.5,
  edgeFade = 0.25,
  transparent = true,
  className = "",
  style,
}: PixelBlastProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  const lastSpawnRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl =
        canvas.getContext("webgl", { alpha: transparent, antialias: false, preserveDrawingBuffer: false }) ||
        (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    } catch {
      gl = null;
    }

    // Initialize ambient ripples
    ripplesRef.current = [
      { x: -0.3, y: 0.2, startTime: (Date.now() - startTimeRef.current) / 1000 - 1.0, maxRadius: 3 },
      { x: 0.4, y: -0.2, startTime: (Date.now() - startTimeRef.current) / 1000 - 2.5, maxRadius: 3 },
    ];

    let animationFrameId: number;

    const resize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(300, Math.floor(rect.width * dpr));
      const h = Math.max(200, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        if (gl) gl.viewport(0, 0, w, h);
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const rgbPrimary = parseColor(color, [0.082, 0.141, 0.27]); // #152445
    const rgbSecondary = parseColor(secondaryColor, [0.031, 0.059, 0.118]); // #080F1E
    const variantCode =
      variant === "cross" ? 1.0 : variant === "diamond" ? 2.0 : variant === "hex" ? 3.0 : 0.0;

    // WebGL pipeline
    if (gl) {
      const compile = (type: number, src: string) => {
        if (!gl) return null;
        const sh = gl.createShader(type);
        if (!sh) return null;
        gl.shaderSource(sh, src);
        gl.compileShader(sh);
        if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
          gl.deleteShader(sh);
          return null;
        }
        return sh;
      };

      const vs = compile(gl.VERTEX_SHADER, VS_SOURCE);
      const fs = compile(gl.FRAGMENT_SHADER, FS_SOURCE);

      if (vs && fs) {
        const prog = gl.createProgram();
        if (prog) {
          gl.attachShader(prog, vs);
          gl.attachShader(prog, fs);
          gl.linkProgram(prog);

          if (gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            gl.useProgram(prog);

            const posBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
              gl.STATIC_DRAW,
            );

            const aPos = gl.getAttribLocation(prog, "aPosition");
            gl.enableVertexAttribArray(aPos);
            gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

            const uResolution = gl.getUniformLocation(prog, "uResolution");
            const uTime = gl.getUniformLocation(prog, "uTime");
            const uColor = gl.getUniformLocation(prog, "uColor");
            const uSecondaryColor = gl.getUniformLocation(prog, "uSecondaryColor");
            const uPixelSize = gl.getUniformLocation(prog, "uPixelSize");
            const uPatternScale = gl.getUniformLocation(prog, "uPatternScale");
            const uPatternDensity = gl.getUniformLocation(prog, "uPatternDensity");
            const uSpeed = gl.getUniformLocation(prog, "uSpeed");
            const uEdgeFade = gl.getUniformLocation(prog, "uEdgeFade");
            const uVariant = gl.getUniformLocation(prog, "uVariant");
            const uTransparent = gl.getUniformLocation(prog, "uTransparent");

            const uEnableRipples = gl.getUniformLocation(prog, "uEnableRipples");
            const uRippleSpeed = gl.getUniformLocation(prog, "uRippleSpeed");
            const uRippleThickness = gl.getUniformLocation(prog, "uRippleThickness");
            const uRippleIntensityScale = gl.getUniformLocation(prog, "uRippleIntensityScale");

            const uR = [
              gl.getUniformLocation(prog, "uR0"),
              gl.getUniformLocation(prog, "uR1"),
              gl.getUniformLocation(prog, "uR2"),
              gl.getUniformLocation(prog, "uR3"),
              gl.getUniformLocation(prog, "uR4"),
              gl.getUniformLocation(prog, "uR5"),
            ];
            const uT = [
              gl.getUniformLocation(prog, "uT0"),
              gl.getUniformLocation(prog, "uT1"),
              gl.getUniformLocation(prog, "uT2"),
              gl.getUniformLocation(prog, "uT3"),
              gl.getUniformLocation(prog, "uT4"),
              gl.getUniformLocation(prog, "uT5"),
            ];

            const uLiquid = gl.getUniformLocation(prog, "uLiquid");
            const uLiquidStrength = gl.getUniformLocation(prog, "uLiquidStrength");
            const uLiquidRadius = gl.getUniformLocation(prog, "uLiquidRadius");
            const uLiquidWobbleSpeed = gl.getUniformLocation(prog, "uLiquidWobbleSpeed");

            const renderLoop = () => {
              const now = (Date.now() - startTimeRef.current) / 1000;

              // Periodic ambient pulses
              if (enableRipples && now - lastSpawnRef.current > 3.5) {
                lastSpawnRef.current = now;
                const angle = Math.random() * Math.PI * 2;
                const rad = 0.2 + Math.random() * 0.4;
                ripplesRef.current.push({
                  x: Math.cos(angle) * rad,
                  y: Math.sin(angle) * rad,
                  startTime: now,
                  maxRadius: 3,
                });
                if (ripplesRef.current.length > 6) ripplesRef.current.shift();
              }

              if (!gl || !canvas) return;

              gl.useProgram(prog);
              gl.uniform2f(uResolution, canvas.width, canvas.height);
              gl.uniform1f(uTime, now);
              gl.uniform3f(uColor, rgbPrimary[0], rgbPrimary[1], rgbPrimary[2]);
              gl.uniform3f(uSecondaryColor, rgbSecondary[0], rgbSecondary[1], rgbSecondary[2]);

              const dpr = window.devicePixelRatio || 1;
              const jitter = pixelSizeJitter ? Math.sin(now * 3) * pixelSizeJitter : 0;
              gl.uniform1f(uPixelSize, Math.max(1, (pixelSize + jitter) * dpr));
              gl.uniform1f(uPatternScale, patternScale);
              gl.uniform1f(uPatternDensity, patternDensity);
              gl.uniform1f(uSpeed, speed);
              gl.uniform1f(uEdgeFade, edgeFade);
              gl.uniform1f(uVariant, variantCode);
              gl.uniform1f(uTransparent, transparent ? 1.0 : 0.0);

              gl.uniform1f(uEnableRipples, enableRipples ? 1.0 : 0.0);
              gl.uniform1f(uRippleSpeed, rippleSpeed);
              gl.uniform1f(uRippleThickness, rippleThickness);
              gl.uniform1f(uRippleIntensityScale, rippleIntensityScale);

              for (let i = 0; i < 6; i++) {
                if (i < ripplesRef.current.length) {
                  const r = ripplesRef.current[i];
                  gl.uniform2f(uR[i], r.x, r.y);
                  gl.uniform1f(uT[i], now - r.startTime);
                } else {
                  gl.uniform2f(uR[i], -999, -999);
                  gl.uniform1f(uT[i], -999);
                }
              }

              gl.uniform1f(uLiquid, liquid ? 1.0 : 0.0);
              gl.uniform1f(uLiquidStrength, liquidStrength);
              gl.uniform1f(uLiquidRadius, liquidRadius);
              gl.uniform1f(uLiquidWobbleSpeed, liquidWobbleSpeed);

              gl.drawArrays(gl.TRIANGLES, 0, 6);
              animationFrameId = requestAnimationFrame(renderLoop);
            };

            renderLoop();

            return () => {
              cancelAnimationFrame(animationFrameId);
              ro.disconnect();
              if (posBuf) gl?.deleteBuffer(posBuf);
              if (prog) gl?.deleteProgram(prog);
              if (vs) gl?.deleteShader(vs);
              if (fs) gl?.deleteShader(fs);
            };
          }
        }
      }
    }

    // 2D Canvas Fallback
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render2D = () => {
      const now = (Date.now() - startTimeRef.current) / 1000;
      const w = canvas.width;
      const h = canvas.height;
      const pSize = Math.max(2, pixelSize * (window.devicePixelRatio || 1));

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;

      const cols = Math.ceil(w / pSize);
      const rows = Math.ceil(h / pSize);
      const minDim = Math.min(w, h);

      for (let y = 0; y < rows; y += 2) {
        for (let x = 0; x < cols; x += 2) {
          const px = x * pSize;
          const py = y * pSize;
          const nx = (px - w / 2) / minDim * patternScale;
          const ny = (py - h / 2) / minDim * patternScale;

          const wave = Math.sin(nx * 2.2 + now * speed * 1.5) * Math.cos(ny * 1.9 - now * speed * 1.1);
          const bayerIdx = (y % 4) * 4 + (x % 4);
          const threshold = BAYER_4X4[bayerIdx];

          if ((wave * 0.5 + 0.5) > threshold) {
            ctx.globalAlpha = 0.5;
            ctx.fillRect(px, py, pSize, pSize);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render2D);
    };

    render2D();
    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, [
    color,
    secondaryColor,
    pixelSize,
    patternScale,
    patternDensity,
    pixelSizeJitter,
    enableRipples,
    rippleSpeed,
    rippleThickness,
    rippleIntensityScale,
    liquid,
    liquidStrength,
    liquidRadius,
    liquidWobbleSpeed,
    speed,
    edgeFade,
    variant,
    transparent,
  ]);

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enableRipples || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const minDim = Math.min(rect.width, rect.height);
    const x = ((e.clientX - rect.left) - rect.width / 2) / minDim * patternScale;
    const y = -((e.clientY - rect.top) - rect.height / 2) / minDim * patternScale;
    const now = (Date.now() - startTimeRef.current) / 1000;

    ripplesRef.current.push({ x, y, startTime: now, maxRadius: 3 });
    if (ripplesRef.current.length > 6) {
      ripplesRef.current.shift();
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointer}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default PixelBlast;
