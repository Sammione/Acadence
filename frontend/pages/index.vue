<template>
  <div class="relative overflow-hidden">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-off-white">
      <div class="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div class="absolute top-20 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-100 to-cyan-100 rounded-full blur-3xl opacity-50 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center">
        <span class="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-royal-blue text-sm font-semibold mb-6 tracking-wide uppercase">
          Revolutionizing Academic Excellence
        </span>
        <h1 class="text-5xl md:text-7xl font-extrabold text-midnight-blue mb-8 leading-tight tracking-tight">
          Your AI-Powered <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-emerald-teal">Academic Companion</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Unlock your full potential with ScholarAI. From structured assignments to deep research and study aids, we assist you at every step of your academic journey.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <NuxtLink to="/dashboard" class="px-8 py-4 bg-royal-blue hover:bg-blue-700 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Start Learning for Free
          </NuxtLink>
           <NuxtLink to="#features" class="px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-midnight-blue text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
            Explore Features
          </NuxtLink>
        </div>
        
        <!-- Mockup/Visual -->
        <div class="mt-20 relative mx-auto max-w-5xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white/50 backdrop-blur-sm">
           <div class="absolute top-0 w-full h-12 bg-white/80 border-b border-gray-100 flex items-center px-4 space-x-2">
             <div class="w-3 h-3 rounded-full bg-red-400"></div>
             <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
             <div class="w-3 h-3 rounded-full bg-green-400"></div>
           </div>
           <div class="pt-12 pb-8 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white min-h-[400px] flex justify-center items-center">
             <div class="text-center">
               <div class="mb-4 inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg text-royal-blue font-medium">
                 <span class="animate-pulse w-2 h-2 rounded-full bg-royal-blue"></span>
                 <span>AI Processing Assignment...</span>
               </div>
               <h3 class="text-2xl font-bold text-gray-800 mb-2">Structure & Explain: "The Impact of AI on Education"</h3>
               <div class="text-left bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl">
                 <div class="w-3/4 h-4 bg-gray-200 rounded mb-3"></div>
                 <div class="w-full h-3 bg-gray-100 rounded mb-2"></div>
                 <div class="w-full h-3 bg-gray-100 rounded mb-2"></div>
                 <div class="w-2/3 h-3 bg-gray-100 rounded"></div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-white relative">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-midnight-blue mb-4">Everything You Need to Excel</h2>
          <p class="text-gray-600 text-lg">Comprehensive tools designed for Secondary, Undergraduate, and Postgraduate students.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Feature 1 -->
          <div class="p-8 rounded-2xl bg-off-white hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 group">
             <div class="w-14 h-14 bg-blue-100 text-royal-blue rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
               📝
             </div>
             <h3 class="text-xl font-bold text-midnight-blue mb-3">Assignment Assistant</h3>
             <p class="text-gray-600 leading-relaxed">Breaks down complex questions and generates structured, academic answers in natural English.</p>
          </div>
          
           <!-- Feature 2 -->
          <div class="p-8 rounded-2xl bg-off-white hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100 group">
             <div class="w-14 h-14 bg-emerald-100 text-emerald-teal rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
               🔍
             </div>
             <h3 class="text-xl font-bold text-midnight-blue mb-3">Research Assistant</h3>
             <p class="text-gray-600 leading-relaxed">Finds literature, refines topics, builds methodologies, and generates citations in APA, MLA, and more.</p>
          </div>
          
          <!-- Feature 3 -->
          <div class="p-8 rounded-2xl bg-off-white hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100 group">
             <div class="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
               🛡️
             </div>
             <h3 class="text-xl font-bold text-midnight-blue mb-3">Plagiarism Checker</h3>
             <p class="text-gray-600 leading-relaxed">Detect similarity, highlight duplicates, and get rephasing suggestions to maintain originality.</p>
          </div>

          <!-- Feature 4 -->
          <div class="p-8 rounded-2xl bg-off-white hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-100 group">
             <div class="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
               🧠
             </div>
             <h3 class="text-xl font-bold text-midnight-blue mb-3">Smart Study Mode</h3>
             <p class="text-gray-600 leading-relaxed">Turn notes into summaries, quizzes, flashcards, and exam predictions automatically.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section id="how-it-works" class="py-24 bg-midnight-blue text-white overflow-hidden relative">
      <!-- Background Patterns -->
      <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">Adaptable to Your Level</h2>
            <p class="text-gray-300 text-lg mb-8">
              ScholarAI isn't one-size-fits-all. Select your academic level during onboarding, and our AI adjusts tone, complexity, and depth accordingly.
            </p>
            
            <ul class="space-y-6">
              <li class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-royal-blue flex items-center justify-center font-bold mt-1">1</div>
                <div class="ml-4">
                  <h4 class="text-xl font-bold text-emerald-teal">Secondary School</h4>
                  <p class="text-gray-400">Simplified explanations and foundational concept building.</p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-royal-blue flex items-center justify-center font-bold mt-1">2</div>
                <div class="ml-4">
                  <h4 class="text-xl font-bold text-emerald-teal">Undergraduate</h4>
                  <p class="text-gray-400">Standard academic tone with critical analysis and referencing.</p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-royal-blue flex items-center justify-center font-bold mt-1">3</div>
                <div class="ml-4">
                  <h4 class="text-xl font-bold text-emerald-teal">Postgraduate & Research</h4>
                  <p class="text-gray-400">Advanced synthesis, methodology structuring, and deep gap analysis.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="md:w-1/2 relative">
             <div class="absolute inset-0 bg-gradient-to-r from-royal-blue to-emerald-teal rounded-2xl blur-2xl opacity-30 transform rotate-3 scale-105"></div>
             <div class="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
               <div class="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                 <span class="text-sm font-mono text-emerald-400">MODE: RESEARCHER</span>
                 <div class="flex space-x-1">
                   <div class="w-3 h-3 rounded-full bg-red-400"></div>
                   <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div class="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
               </div>
               <div class="space-y-4 font-mono text-sm text-gray-300">
                 <p>> Analyzing literature gap...</p>
                 <p>> Identifying methodological limitations in recent studies...</p>
                 <p>> Suggesting quantitative approach with ANOVA analysis...</p>
                 <code class="block bg-black/30 p-4 rounded text-emerald-300">
                   Outcome: Integration of AI in curriculum needs longitudinal study on student retention...
                 </code>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-24 bg-off-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-midnight-blue to-royal-blue rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden group">
           <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
           <div class="absolute bottom-0 left-0 w-48 h-48 bg-emerald-teal/20 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>
           
           <h2 class="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">Ready to Ace Your Academics?</h2>
           <p class="relative z-10 text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of students and researchers using ScholarAI to work smarter, not harder.</p>
           
           <NuxtLink to="/register" class="relative z-10 inline-block px-10 py-5 bg-emerald-teal hover:bg-emerald-600 text-white font-bold text-xl rounded-full shadow-lg transition-transform hover:-translate-y-1">
             Get Started for Free
           </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Page logic
</script>
