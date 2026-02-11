<template>
  <div class="min-h-screen bg-off-white font-sans text-midnight-blue">
    <!-- Navigation -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2 group cursor-pointer" @click="$router.push('/')">
          <div class="w-10 h-10 bg-gradient-to-br from-royal-blue to-accent-teal rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            S
          </div>
          <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-midnight-blue to-royal-blue">ScholarAI</span>
        </div>

        <nav class="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
          <a href="#features" class="text-gray-600 hover:text-royal-blue font-semibold transition-colors">Features</a>
          <a href="#pricing" class="text-gray-600 hover:text-royal-blue font-semibold transition-colors">Pricing</a>
          <router-link to="/login" class="text-midnight-blue font-bold hover:text-royal-blue transition-colors">Log In</router-link>
          <router-link to="/register" class="px-6 py-2.5 bg-royal-blue hover:bg-blue-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Get Started
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-off-white">
      <div class="container mx-auto px-4 relative z-10 text-center">
        <span class="inline-block py-1 px-4 rounded-full bg-blue-50 border border-blue-100 text-royal-blue text-xs font-bold mb-6 tracking-widest uppercase">
          Autonomous Academic Intelligence
        </span>
        <h1 class="text-5xl md:text-7xl font-extrabold text-midnight-blue mb-8 leading-tight tracking-tighter">
          Master Your Academics <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-accent-teal">with AI Precision.</span>
        </h1>
        <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          From complex assignments to deep research gaps—ScholarAI provides the analytical power you need to excel at any institutional level.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <router-link to="/register" class="px-8 py-4 bg-royal-blue hover:bg-blue-700 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Start Free Trial
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
