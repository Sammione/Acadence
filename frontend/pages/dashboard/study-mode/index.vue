<template>
  <div class="max-w-5xl mx-auto">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-midnight-blue">Study Mode</h2>
      <p class="text-gray-600">Turn your notes into quizzes, summaries, and flashcards.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Create New -->
      <div class="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
        <div class="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>
        <h3 class="text-2xl font-bold mb-2 relative z-10">Upload Notes</h3>
        <p class="text-white/90 mb-6 relative z-10">Upload your PDF handouts or lecture slides.</p>
        <button class="px-5 py-2 bg-white/20 backdrop-blur-md rounded-lg font-semibold hover:bg-white/30 transition-colors relative z-10">
          Select File
        </button>
      </div>

       <div class="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
        <div class="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700"></div>
        <h3 class="text-2xl font-bold mb-2 relative z-10">Paste Content</h3>
        <p class="text-white/90 mb-6 relative z-10">Paste text directly to generate questions.</p>
        <button class="px-5 py-2 bg-white/20 backdrop-blur-md rounded-lg font-semibold hover:bg-white/30 transition-colors relative z-10">
          Start Typing
        </button>
      </div>
    </div>

    <div class="mt-10">
      <h3 class="text-lg font-bold text-midnight-blue mb-4">Your Study Sets</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-royal-blue transition-colors cursor-pointer group">
           <div class="flex justify-between items-start mb-4">
             <span class="px-2 py-1 bg-blue-50 text-royal-blue text-xs font-bold rounded uppercase">Economics</span>
             <button class="text-gray-400 hover:text-royal-blue">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
             </button>
           </div>
           <h4 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-royal-blue">Microeconomics 101</h4>
           <p class="text-sm text-gray-500 mb-4">Created 2 days ago • 15 Flashcards</p>
           <div class="flex space-x-2">
             <button class="flex-1 py-2 bg-royal-blue text-white text-sm font-semibold rounded hover:bg-blue-700">Quiz</button>
             <button class="flex-1 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded hover:bg-gray-200">Review</button>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})
</script>
