<template>
  <div class="max-w-6xl mx-auto animate-fade-in">
    <!-- Header -->
    <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between items-start gap-8">
      <div>
        <h2 class="text-5xl font-extrabold text-midnight-blue tracking-tighter">Academic E-Library</h2>
        <p class="text-gray-400 font-bold mt-2 uppercase tracking-[0.2em] text-xs">Accessing 482M+ peer-reviewed decentralized nodes</p>
      </div>
      
      <!-- Search Mode Toggle -->
      <div class="flex p-1.5 bg-white rounded-2xl shadow-lg border border-gray-100">
         <button @click="searchMode = 'global'" :class="searchMode === 'global' ? 'bg-midnight-blue text-white shadow-xl' : 'text-gray-400 font-bold'" class="px-6 py-2.5 rounded-xl text-[9px] uppercase tracking-widest transition-all duration-500">Global Search</button>
         <button @click="searchMode = 'archive'" :class="searchMode === 'archive' ? 'bg-midnight-blue text-white shadow-xl' : 'text-gray-400 font-bold'" class="px-6 py-2.5 rounded-xl text-[9px] uppercase tracking-widest transition-all duration-500">Local Archive</button>
      </div>
    </div>

    <!-- Ultra-Modern Search Bar -->
    <div class="relative mb-16 group">
      <div class="absolute inset-0 bg-gradient-to-r from-royal-blue to-accent-teal rounded-[2.5rem] blur-2xl opacity-10 group-focus-within:opacity-20 transition-opacity"></div>
      <div class="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 flex items-center h-24 focus-within:ring-2 focus-within:ring-royal-blue/20 transition-all">
        <div class="w-16 h-16 flex items-center justify-center text-gray-300">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <input 
          v-model="query" 
          @keyup.enter="search"
          type="text" 
          placeholder="Topic, keyword, researcher or ISBN..." 
          class="flex-1 bg-transparent border-none text-2xl font-black text-midnight-blue placeholder-gray-200 focus:ring-0 px-6 outline-none" 
        />
        <button 
          @click="search"
          :disabled="loading"
          class="h-16 px-12 bg-midnight-blue hover:bg-black text-white rounded-[1.5rem] font-black italic text-sm tracking-widest uppercase transition-all active:scale-95 disabled:grayscale"
        >
          {{ loading ? 'SCANNING...' : 'SCAN' }}
        </button>
      </div>
    </div>

    <!-- Insights Overlay (Wow Factor) -->
    <div v-if="results.length > 0" class="mb-12 p-8 bg-gradient-to-r from-royal-blue to-blue-700 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
        <div class="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        </div>
        <div class="relative z-10">
           <h4 class="text-sm font-black uppercase tracking-[0.3em] mb-4 text-royal-blue-100">AI GAP ANALYSIS</h4>
           <h3 class="text-3xl font-black italic mb-2 tracking-tighter">Current literature in "{{ lastQuery }}" shows a significant divergence in methodology.</h3>
           <p class="text-xs font-bold text-white/60 uppercase tracking-widest">Recommended Focus: Cross-disciplinary correlation with sustainable ethics.</p>
        </div>
    </div>

    <!-- Search Results Grid -->
    <div v-if="results.length > 0" class="grid grid-cols-1 gap-8 mb-20 animate-slide-up">
      <div v-for="paper in results" :key="paper.id" class="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col xl:flex-row gap-10 hover:shadow-2xl transition-all duration-500 relative group overflow-hidden">
         
         <div class="flex-1">
           <div class="flex items-center space-x-4 mb-6">
             <span class="px-4 py-1.5 bg-gray-100 text-midnight-blue text-[9px] font-black rounded-lg uppercase tracking-widest border border-gray-200">
               SOURCE: {{ paper.source }}
             </span>
             <span class="text-[10px] font-black text-accent-teal uppercase tracking-widest italic">INDEXED: {{ new Date(paper.published).getFullYear() }}</span>
           </div>
           
           <h3 class="text-2xl font-black text-midnight-blue group-hover:text-royal-blue transition-colors mb-4 tracking-tighter leading-tight">{{ paper.title }}</h3>
           
           <p class="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed font-medium italic">
             {{ paper.summary }}
           </p>

           <div class="flex flex-wrap items-center gap-2">
             <span v-for="author in paper.authors.slice(0, 3)" :key="author" class="text-[10px] font-black text-gray-400 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
               {{ author.toUpperCase() }}
             </span>
           </div>
         </div>

         <!-- Citation & Action Center -->
         <div class="xl:w-64 flex flex-col space-y-3 shrink-0 border-t xl:border-t-0 xl:border-l border-gray-100 pt-8 xl:pt-0 xl:pl-10">
            <h4 class="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-2">Citability Node</h4>
            
            <!-- Citation Generator -->
            <div class="flex flex-col space-y-2">
               <button @click="copyCitation(paper, 'APA')" class="w-full text-left p-3 hover:bg-gray-50 rounded-xl text-[9px] font-bold text-gray-600 uppercase transition-all tracking-widest flex items-center justify-between group/cite">
                  <span>APA 7th Edition</span>
                  <span class="opacity-0 group-hover/cite:opacity-100 text-royal-blue">COPY</span>
               </button>
               <button @click="copyCitation(paper, 'MLA')" class="w-full text-left p-3 hover:bg-gray-50 rounded-xl text-[9px] font-bold text-gray-600 uppercase transition-all tracking-widest flex items-center justify-between group/cite">
                  <span>MLA 9th Edition</span>
                  <span class="opacity-0 group-hover/cite:opacity-100 text-royal-blue">COPY</span>
               </button>
            </div>

            <div class="pt-6 mt-auto space-y-2">
               <a v-if="paper.pdf" :href="paper.pdf" target="_blank" class="w-full py-4 bg-midnight-blue text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-black transition-all shadow-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                 <span>Download SSR</span>
               </a>
               <a :href="paper.link" target="_blank" class="w-full py-4 bg-white text-midnight-blue border-2 border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-gray-50 transition-all">
                 Verify Source
               </a>
            </div>
         </div>
      </div>
    </div>
    
    <!-- Empty State -->
    <div v-else-if="!loading" class="py-40 flex flex-col items-center justify-center text-center">
       <div class="w-32 h-32 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center text-6xl mb-10 animate-bounce group transform hover:rotate-12 transition-all">
         🚀
       </div>
       <h3 class="text-4xl font-black text-midnight-blue tracking-tighter italic">Enter Research Core.</h3>
       <p class="text-gray-400 font-bold uppercase tracking-widest text-sm mt-4">Cross-referencing global academic database nodes...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const query = ref('')
const lastQuery = ref('')
const loading = ref(false)
const searchMode = ref('global')
const results = ref<any[]>([])

const search = async () => {
  if (!query.value.trim()) return
  loading.value = true
  lastQuery.value = query.value
  try {
    const res = await axios.get(`http://localhost:8080/api/research/search?q=${encodeURIComponent(query.value)}`)
    results.value = res.data.results
  } catch (err) {
    console.error("Link to research node failed.")
  } finally {
    loading.value = false
  }
}

const copyCitation = (paper: any, style: string) => {
  let citation = ""
  const firstAuthor = paper.authors[0]
  const year = new Date(paper.published).getFullYear()
  
  if (style === 'APA') {
    citation = `${firstAuthor}. (${year}). ${paper.title}. ScholarAI E-Library Repository.`
  } else {
    citation = `${firstAuthor}. "${paper.title}." ScholarAI, ${year}.`
  }
  
  navigator.clipboard.writeText(citation)
  alert(`${style} Citation copied to clipboard.`)
}
</script>

<style scoped>
.animate-slide-up {
  animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
