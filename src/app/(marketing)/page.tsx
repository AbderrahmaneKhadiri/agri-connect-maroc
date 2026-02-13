"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle2, Sprout } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#052c16]">
            {/* --- BACKGROUND : EFFET 3D / GRADIENT --- */}
            <div className="absolute inset-0 z-0">
                {/* Un dégradé radial pour donner de la profondeur */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#15803d_0%,transparent_50%)] opacity-40" />
                {/* Un motif de grille moderne (comme l'image 5) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                {/* Image de fond "Ferme 3D" (Placeholder haute qualité) */}
                <div
                    className="absolute right-[-10%] top-[10%] w-[60%] h-[80%] opacity-20 blur-[2px] hidden lg:block"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1530836361280-88b499baf46c?auto=format&fit=crop&q=80')",
                        backgroundSize: 'cover',
                        borderRadius: '100% 0% 100% 0% / 0% 100% 0% 100%'
                    }}
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* 1. BADGE (Inspiré image 1) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8"
                    >
                        <Sprout className="w-4 h-4" />
                        <span>Agriculture 4.0 au Maroc</span>
                    </motion.div>

                    {/* 2. TITRE (Inspiré image 3 & 4) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                    >
                        Nous concevons <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            l'agriculture de demain
                        </span>
                    </motion.h1>

                    {/* 3. DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
                    >
                        La plateforme SaaS qui connecte intelligemment les agriculteurs marocains
                        aux entreprises pour un marché plus direct, durable et productif.
                    </motion.p>

                    {/* 4. APPELS À L'ACTION (Inspiré image 1 & 5) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
                    >
                        <Button size="lg" className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 h-14 rounded-xl text-lg font-semibold shadow-lg shadow-orange-900/20 group">
                            Nos Services
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg backdrop-blur-sm">
                            Nous Contacter
                        </Button>
                    </motion.div>

                    {/* 5. PREUVE SOCIALE (Inspiré image 4) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <img
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-[#052c16]"
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="User"
                                />
                            ))}
                            <div className="w-10 h-10 rounded-full bg-green-600 border-2 border-[#052c16] flex items-center justify-center text-[10px] text-white font-bold">
                                +200
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <div className="flex text-orange-500">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                            </div>
                            <span>Rejoint par +200 agriculteurs au Maroc</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- PETITS BADGES FLOTTANTS (Inspiré image 1) --- */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] left-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl hidden md:flex items-center gap-3"
            >
                <div className="p-2 bg-green-500 rounded-lg text-white">
                    <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                    <p className="text-white font-bold text-sm">Performance</p>
                    <p className="text-slate-400 text-xs">Rendement optimisé</p>
                </div>
            </motion.div>

            {/* SOURIS DE SCROLL (Image 1) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 hidden lg:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-white rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}