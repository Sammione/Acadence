<template>
  <div class="max-w-5xl mx-auto">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-midnight-blue">Research Assistant</h2>
      <p class="text-gray-600">Find literature, refine research topics, and access a global e-library of academic papers.</p>
    </div>

    <!-- Search Section -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
      <div class="relative max-w-2xl mx-auto">
        <input 
          v-model="query" 
          @keyup.enter="search"
          type="text" 
          placeholder="Topic, keyword, or researcher name..." 
          class="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-teal focus:border-emerald-teal shadow-sm text-lg outline-none transition-all" 
        />
        <button 
          @click="search"
          :disabled="loading"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-emerald-teal text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:bg-gray-300"
        >
          <svg v-if="!loading" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span v-else class="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full block"></span>
        </button>
      </div>

      <div class="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-500">
        <label class="flex items-center space-x-2 cursor-pointer">
          <input type="radio" v-model="source" value="all" class="text-emerald-teal focus:ring-emerald-teal" />
          <span>All Sources</span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
          <input type="radio" v-model="source" value="arxiv" class="text-emerald-teal focus:ring-emerald-teal" />
          <span>arXiv</span>
        </label>
        <label class="flex items-center space-x-2 cursor-pointer">
          <input type="radio" v-model="source" value="scholar" class="text-emerald-teal focus:ring-emerald-teal" />
          <span>Google Scholar</span>
        </label>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="results.length > 0" class="space-y-6">
      <div v-for="paper in results" :key="paper.id" class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-200 transition-all group">
         <div class="flex items-start justify-between mb-3">
           <div>
             <span :class="paper.source === 'arXiv' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'" class="px-2 py-1 text-[10px] font-bold rounded uppercase tracking-wider mb-2 inline-block">
               {{ paper.source }}
             </span>
             <h3 class="text-xl font-bold text-gray-900 group-hover:text-royal-blue transition-colors">{{ paper.title }}</h3>
           </div>
           <a v-if="paper.pdf" :href="paper.pdf" target="_blank" class="p-2 bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="View PDF">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
           </a>
         </div>

         <p class="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
           {{ paper.summary }}
         </p>

         <div class="flex items-center justify-between">
           <div class="flex flex-wrap items-center gap-2">
             <span v-for="author in paper.authors.slice(0, 3)" :key="author" class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
               {{ author }}
             </span>
             <span v-if="paper.authors.length > 3" class="text-xs text-gray-400">+{{ paper.authors.length - 3 }} more</span>
           </div>
           <div class="flex items-center space-x-4 text-xs text-gray-400">
              <span v-if="paper.citations">{{ paper.citations }} Citations</span>
              <span>{{ new Date(paper.published).getFullYear() }}</span>
              <a :href="paper.link" target="_blank" class="text-royal-blue font-semibold hover:underline">View Source</a>
           </div>
         </div>
      </div>
    </div>

    <!-- Empty/Welcome State -->
    <div v-else-if="!loading" class="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
      <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-teal text-4xl mb-6">
        📚
      </div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Academic E-Library</h3>
      <p class="text-gray-500 max-w-md mb-8">Search through millions of specialized academic papers and journals to find exactly what you need for your literature review.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl text-left">
         <div class="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h4 class="font-bold text-gray-700 mb-1">Peer Reviewed</h4>
            <p class="text-xs text-gray-500">Access high-quality, verified academic content.</p>
         </div>
         <div class="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h4 class="font-bold text-gray-700 mb-1">Direct PDF</h4>
            <p class="text-xs text-gray-500">Download papers directly where available.</p>
         </div>
         <div class="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h4 class="font-bold text-gray-700 mb-1">Multi-Source</h4>
            <p class="text-xs text-gray-500">Search arXiv, Scholar, and more simultaneously.</p>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'dashboard'
})

const query = ref('')
const source = ref('all')
const loading = ref(false)
const results = ref<any[]>([])

const search = async () => {
  if (!query.value.trim()) return
  loading.value = true
  results.value = []
  
  try {
    const response = await $fetch(`http://localhost:8080/api/research/search?q=${encodeURIComponent(query.value)}&source=${source.value}`)
    // @ts-ignore
    results.value = response.results
  } catch (error) {
    console.error("Search failed", error)
  } finally {
    loading.value = false
  }
}
</script>

