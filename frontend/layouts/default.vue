<template>
  <div class="flex flex-col min-h-screen bg-off-white text-midnight-blue font-sans">
    <!-- Navigation -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-gradient-to-br from-royal-blue to-emerald-teal rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            S
          </div>
          <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-midnight-blue to-royal-blue">ScholarAI</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink to="#features" class="text-gray-600 hover:text-royal-blue font-medium transition-colors">Features</NuxtLink>
          <NuxtLink to="#how-it-works" class="text-gray-600 hover:text-royal-blue font-medium transition-colors">How it Works</NuxtLink>
          <NuxtLink to="#pricing" class="text-gray-600 hover:text-royal-blue font-medium transition-colors">Pricing</NuxtLink>
          <NuxtLink to="/login" class="text-midnight-blue font-semibold hover:text-royal-blue transition-colors">Log In</NuxtLink>
          <NuxtLink to="/register" class="px-5 py-2.5 bg-royal-blue hover:bg-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Get Started
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-gray-700 hover:text-royal-blue">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-midnight-blue text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-royal-blue to-emerald-teal rounded-lg flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span class="text-xl font-bold">ScholarAI</span>
            </div>
            <p class="text-gray-400 text-sm">Empowering students and researchers with advanced AI tools for academic excellence.</p>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-emerald-teal">Product</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Features</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Pricing</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Testimonials</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-emerald-teal">Resources</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Blog</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Guides</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Help Center</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4 text-emerald-teal">Legal</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Terms of Service</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} ScholarAI. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout logic here
</script>
