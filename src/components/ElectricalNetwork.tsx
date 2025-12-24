import { motion } from 'motion/react';

interface Node {
  x: number;
  y: number;
}

interface Connection {
  from: number;
  to: number;
}

const nodes: Node[] = [
  { x: 10, y: 30 },
  { x: 25, y: 15 },
  { x: 45, y: 25 },
  { x: 65, y: 10 },
  { x: 80, y: 35 },
  { x: 35, y: 50 },
  { x: 55, y: 60 },
  { x: 75, y: 70 },
  { x: 20, y: 75 },
  { x: 50, y: 85 },
];

const connections: Connection[] = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 0, to: 5 },
  { from: 2, to: 5 },
  { from: 5, to: 6 },
  { from: 6, to: 7 },
  { from: 4, to: 7 },
  { from: 5, to: 8 },
  { from: 8, to: 9 },
  { from: 6, to: 9 },
];

export function ElectricalNetwork() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-40"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Connections */}
      {connections.map((conn, index) => (
        <motion.line
          key={`line-${index}`}
          x1={`${nodes[conn.from].x}%`}
          y1={`${nodes[conn.from].y}%`}
          x2={`${nodes[conn.to].x}%`}
          y2={`${nodes[conn.to].y}%`}
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: index * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        />
      ))}

      {/* Energy Flow Particles */}
      {connections.map((conn, index) => (
        <motion.circle
          key={`particle-${index}`}
          r="0.5"
          fill="#7dd3fc"
          filter="url(#glow)"
          initial={{
            cx: `${nodes[conn.from].x}%`,
            cy: `${nodes[conn.from].y}%`,
          }}
          animate={{
            cx: `${nodes[conn.to].x}%`,
            cy: `${nodes[conn.to].y}%`,
          }}
          transition={{
            duration: 2,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, index) => (
        <g key={`node-${index}`}>
          <motion.circle
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="1"
            fill="#8b5cf6"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          />
          <motion.circle
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="1.5"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="0.2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
            transition={{
              duration: 2,
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
