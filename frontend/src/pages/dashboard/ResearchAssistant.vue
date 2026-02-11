<template>
  <div class="max-w-5xl mx-auto">
    <div class="mb-10">
      <h2 class="text-3xl font-bold text-midnight-blue tracking-tighter">Academic E-Library</h2>
      <p class="text-gray-500 mt-1">Access millions of peer-reviewed journals and open-access repositories.</p>
    </div>

    <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-10 transition-all focus-within:ring-4 focus-within:ring-royal-blue/5">
      <div class="relative max-w-4xl mx-auto">
        <input 
          v-model="query" 
          @keyup.enter="search"
          type="text" 
          placeholder="Topic, keyword, or author..." 
          class="w-full px-8 py-5 pr-16 rounded-2xl border border-gray-100 focus:border-royal-blue shadow-inner text-lg outline-none transition-all placeholder-gray-300 font-medium" 
        />
        <button 
          @click="search"
          :disabled="loading"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-royal-blue text-white rounded-xl hover:bg-blue-700 transition-all disabled:bg-gray-200 active:scale-90"
        >
          <svg v-if="!loading" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span v-else class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full block"></span>
        </button>
      </div>
    </div>

    <!-- Results -->
    <div v-if="results.length > 0" class="grid grid-cols-1 gap-6">
      <div v-for="paper in results" :key="paper.id" class="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 hover:border-royal-blue/20 hover:shadow-xl transition-all group flex flex-col md:flex-row gap-6">
         <div class="flex-1">
           <div class="flex items-center space-x-3 mb-4">
             <span class="px-3 py-1 bg-midnight-blue text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">
               {{ paper.source }}
             </span>
             <span class="text-xs text-gray-400 font-bold uppercase tracking-widest">{{ new Date(paper.published).getFullYear() }}</span>
           </div>
           
           <h3 class="text-xl font-bold text-midnight-blue group-hover:text-royal-blue transition-colors mb-3 tracking-tight">{{ paper.title }}</h3>
           
           <p class="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed font-sans">
             {{ paper.summary }}
           </p>

           <div class="flex flex-wrap items-center gap-2">
             <span v-for="author in paper.authors.slice(0, 3)" :key="author" class="text-[11px] font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-100 hover:bg-royal-blue/5 hover:text-royal-blue transition-colors">
               {{ author }}
             </span>
           </div>
         </div>

         <div class="flex flex-col justify-between items-end border-l border-gray-50 pl-6 w-32 shrink-0">
            <a v-if="paper.pdf" :href="paper.pdf" target="_blank" class="w-full text-center py-3 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all">
              View PDF
            </a>
            <a :href="paper.link" target="_blank" class="w-full text-center py-3 text-royal-blue hover:underline text-[10px] font-bold uppercase tracking-widest">
              Source
            </a>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const query = ref('')
const loading = ref(false)
const results = ref<any[]>([])

const search = async () => {
  if (!query.value.trim()) return
  loading.value = true
  try {
    const res = await axios.get(`http://localhost:8080/api/research/search?q=${encodeURIComponent(query.value)}`)
    results.value = res.data.results
  } finally {
    loading.value = false
  }
}
</script>
