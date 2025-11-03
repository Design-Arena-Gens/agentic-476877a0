'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const designTypes = ['Posters', 'Websites', 'Logos', '3D Art'];

const sampleDesigns = [
  { id: 1, ai: 'GPT-4 Vision', category: 'poster', votes: 234 },
  { id: 2, ai: 'Midjourney V6', category: 'poster', votes: 189 },
  { id: 3, ai: 'DALL-E 3', category: 'website', votes: 312 },
  { id: 4, ai: 'Stable Diffusion XL', category: 'website', votes: 278 },
  { id: 5, ai: 'Claude Artifacts', category: 'logo', votes: 401 },
  { id: 6, ai: 'Gemini Pro Vision', category: 'logo', votes: 367 },
];

export default function Home() {
  const [stage, setStage] = useState(0);
  const [currentType, setCurrentType] = useState(0);
  const [showBattle, setShowBattle] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stage < 8) {
        setStage(stage + 1);
      }
    }, stage === 0 ? 1500 : stage === 1 ? 2000 : stage === 2 ? 3000 : stage === 3 ? 2500 : stage === 4 ? 3000 : stage === 5 ? 2500 : stage === 6 ? 2000 : 2500);

    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      setCurrentType((prev) => (prev + 1) % designTypes.length);
    }, 800);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    if (stage >= 3) {
      setShowBattle(true);
    }
  }, [stage]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Glitch overlay */}
      <AnimatePresence>
        {glitchActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-50"
            style={{
              background: 'repeating-linear-gradient(0deg, rgba(255,0,255,0.1) 0px, transparent 2px, transparent 4px)',
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Stage 0: Opening text */}
        <AnimatePresence>
          {stage >= 0 && stage < 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue text-glow">
                  Ab design karega
                </span>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-6xl md:text-8xl font-black"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-green to-neon-yellow text-glow">
                  AI vs AI! 🔥
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 1: Design types showcase */}
        <AnimatePresence>
          {stage >= 1 && stage < 3 && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <motion.p
                className="text-3xl md:text-5xl font-semibold mb-8 text-neon-pink"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                Kaunsa model banayega best look?
              </motion.p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {designTypes.map((type, idx) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className={`p-6 rounded-xl border-2 ${
                      idx === currentType ? 'border-neon-blue neon-glow' : 'border-neon-purple/30'
                    } bg-black/50 backdrop-blur-sm`}
                  >
                    <div className="text-2xl font-bold text-neon-green text-glow">{type}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2-4: Battle interface */}
        <AnimatePresence>
          {stage >= 2 && stage < 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', duration: 0.8 }}
              className="w-full max-w-6xl"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-black text-center mb-12"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue text-glow">
                  THE BATTLE BEGINS
                </span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* AI 1 */}
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-purple blur-lg opacity-75 animate-pulse"></div>
                  <div className="relative bg-black border-2 border-neon-pink rounded-2xl p-8 h-80 flex flex-col items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-6xl">🎨</span>
                    </div>
                    <div className="text-2xl font-bold text-neon-pink text-glow">GPT-4 Vision</div>
                  </div>
                </motion.div>

                {/* VS Divider */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                >
                  <div className="text-6xl font-black text-neon-yellow text-glow animate-pulse">VS</div>
                </motion.div>

                {/* AI 2 */}
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-green blur-lg opacity-75 animate-pulse"></div>
                  <div className="relative bg-black border-2 border-neon-blue rounded-2xl p-8 h-80 flex flex-col items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-6xl">🤖</span>
                    </div>
                    <div className="text-2xl font-bold text-neon-blue text-glow">DALL-E 3</div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12"
              >
                <p className="text-3xl md:text-4xl font-bold text-neon-green text-glow">
                  Tum decide karoge — vote do!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 5: Leaderboard */}
        <AnimatePresence>
          {stage >= 5 && stage < 7 && (
            <motion.div
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-4xl"
            >
              <motion.h2
                className="text-5xl md:text-6xl font-black text-center mb-12"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-neon-green to-neon-blue text-glow">
                  LEADERBOARD 🏆
                </span>
              </motion.h2>

              <div className="space-y-4">
                {sampleDesigns.slice(0, 4).map((design, idx) => (
                  <motion.div
                    key={design.id}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                      idx === 0 ? 'from-yellow-400 to-orange-500' :
                      idx === 1 ? 'from-gray-300 to-gray-400' :
                      idx === 2 ? 'from-orange-400 to-orange-600' :
                      'from-purple-500 to-pink-500'
                    } rounded-lg blur opacity-75 group-hover:opacity-100 transition`}></div>
                    <div className="relative bg-black rounded-lg p-6 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`text-4xl font-black ${
                          idx === 0 ? 'text-yellow-400' :
                          idx === 1 ? 'text-gray-300' :
                          idx === 2 ? 'text-orange-400' :
                          'text-purple-400'
                        }`}>
                          #{idx + 1}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-neon-blue">{design.ai}</div>
                          <div className="text-sm text-gray-400 uppercase">{design.category}</div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-3xl font-black text-neon-green text-glow"
                      >
                        {design.votes} votes
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 6: CTA */}
        <AnimatePresence>
          {stage >= 6 && stage < 8 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="space-y-8"
              >
                <div className="text-4xl md:text-6xl font-black space-y-4">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-neon-pink text-glow"
                  >
                    Vote.
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="text-neon-blue text-glow"
                  >
                    Compare.
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="text-neon-green text-glow"
                  >
                    Discover.
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 7: Final logo and tagline */}
        <AnimatePresence>
          {stage >= 7 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: 'spring' }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-8"
              >
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-neon-pink via-neon-purple via-neon-blue to-neon-green blur-2xl opacity-75 animate-pulse"></div>
                  <h1 className="relative text-6xl md:text-9xl font-black">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green text-glow">
                      DesignArena.ai
                    </span>
                  </h1>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <p className="text-3xl md:text-5xl font-bold text-neon-yellow text-glow">
                  Where AIs Compete,
                </p>
                <p className="text-3xl md:text-5xl font-bold text-neon-green text-glow">
                  Creativity Wins.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-12 py-6 text-2xl font-bold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-full relative group overflow-hidden"
                onClick={() => setStage(0)}
              >
                <span className="relative z-10">Enter Arena</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-green to-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ['#00f0ff', '#ff00ff', '#00ff88', '#ffff00'][i % 4],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
