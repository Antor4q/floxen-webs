/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.OrthographicCamera | null;
    renderer: THREE.WebGLRenderer | null;
    mesh: THREE.Mesh | null;
    uniforms: {
      resolution: { value: THREE.Vector2 };
      time: { value: number };
      xScale: { value: number };
      yScale: { value: number };
      distortion: { value: number };
    } | null;
    animationId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const refs = sceneRef.current;

    const vertexShader = `
      attribute vec3 position;

      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;

      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {

        vec2 p =
          (gl_FragCoord.xy * 2.0 - resolution.xy)
          / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r =
          0.018 /
          (abs(
            p.y +
            sin((rx + time) * xScale) * yScale
          ) + 0.02);

        float g =
          0.018 /
          (abs(
            p.y +
            sin((gx + time) * xScale) * yScale
          ) + 0.02);

        float b =
          0.018 /
          (abs(
            p.y +
            sin((bx + time) * xScale) * yScale
          ) + 0.02);

        vec3 c1 = vec3(208.0,195.0,254.0) / 255.0;
        vec3 c2 = vec3(192.0,175.0,254.0) / 255.0;
        vec3 c3 = vec3(135.0,98.0,245.0) / 255.0;
        vec3 c4 = vec3(167.0,125.0,243.0) / 255.0;

      float intensity = max(max(r, g), b);

vec3 lineColor = mix(c3, c1, intensity);

// Main Line
vec3 core = lineColor * intensity * 0.22;

// Soft Glow
vec3 glow = lineColor * pow(intensity, 1.8) * 0.85;

// Extra Wide Bloom
vec3 bloom = lineColor * pow(intensity, 3.5) * 2.0;

vec3 color = core + glow + bloom;

        float alpha = max(
          max(color.r, color.g),
          color.b
        );

    alpha = smoothstep(0.015, 0.18, intensity);
alpha *= 0.95;



        gl_FragColor = vec4(color, alpha);
      }
    `;

    refs.scene = new THREE.Scene();

    refs.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    refs.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    refs.renderer.setClearColor(0x000000, 0);
    refs.renderer.setClearAlpha(0);

    refs.camera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      0,
      1
    );

    refs.uniforms = {
      resolution: {
        value: new THREE.Vector2(),
      },
      time: {
        value: 0,
      },
      xScale: {
        value: 1.0,
      },
      yScale: {
        value: 0.35,
      },
      distortion: {
        value: 0.025,
      },
    };

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([
          -1, -1, 0,
           1, -1, 0,
          -1,  1, 0,

           1, -1, 0,
          -1,  1, 0,
           1,  1, 0,
        ]),
        3
      )
    );

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: refs.uniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    refs.mesh = new THREE.Mesh(
      geometry,
      material
    );

    refs.scene.add(refs.mesh);
        const handleResize = () => {
      if (
        !refs.renderer ||
        !refs.uniforms ||
        !canvas.parentElement
      ) {
        return;
      }

      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;

      refs.renderer.setSize(width, height, false);
      refs.uniforms.resolution.value.set(width, height);
    };

    handleResize();

    const animate = () => {
      if (refs.uniforms) {
        refs.uniforms.time.value += 0.008;
      }

      if (
        refs.renderer &&
        refs.scene &&
        refs.camera
      ) {
        refs.renderer.render(
          refs.scene,
          refs.camera
        );
      }

      refs.animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (refs.animationId !== null) {
        cancelAnimationFrame(refs.animationId);
      }

      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();

        if (Array.isArray(refs.mesh.material)) {
          refs.mesh.material.forEach((m) => m.dispose());
        } else {
          refs.mesh.material.dispose();
        }
      }

      refs.renderer?.dispose();

      refs.scene = null;
      refs.camera = null;
      refs.renderer = null;
      refs.mesh = null;
      refs.uniforms = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{
        background: "transparent",
      }}
    />
  );
}


