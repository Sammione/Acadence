<template>
  <div class="max-w-5xl mx-auto animate-fade-in">
    <div class="mb-12">
      <h2 class="text-5xl font-black text-midnight-blue tracking-tighter">Similarity <span class="text-royal-blue">Audit</span></h2>
      <p class="text-gray-400 font-bold mt-2 uppercase tracking-[0.2em] text-xs">Cross-referencing global academic databases for originality</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <!-- Input Area -->
      <div class="lg:col-span-2 space-y-8">
        <div class="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
           <div class="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
           
           <div class="flex items-center justify-between mb-8">
              <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Originality Scanner</span>
              <div v-if="checking" class="flex items-center space-x-2 text-accent-teal">
                 <span class="animate-spin h-3 w-3 border-2 border-accent-teal border-t-transparent rounded-full"></span>
                 <span class="text-[9px] font-black uppercase">Deep Scan in Progress...</span>
              </div>
           </div>

           <textarea 
             v-model="text" 
             rows="15" 
             class="w-full p-8 border-2 border-gray-50 rounded-[2.5rem] focus:ring-4 focus:ring-royal-blue/5 focus:border-royal-blue/20 resize-none transition-all outline-none text-gray-700 bg-gray-50/30 text-lg leading-relaxed shadow-inner"
             placeholder="Paste the content you wish to audit for similarity..."
           ></textarea>

           <div class="mt-8 flex items-center justify-between bg-midnight-blue p-6 rounded-[2rem]">
              <div class="flex flex-col px-4 text-white">
                 <span class="text-[9px] font-black text-white/40 uppercase tracking-widest">Character Count</span>
                 <span class="text-sm font-black italic">{{ text.length }} / 50,000</span>
              </div>
              <button 
                @click="checkPlagiarism" 
                :disabled="checking || !text"
                class="px-10 py-4 bg-gradient-to-r from-accent-teal to-emerald-600 text-white font-black rounded-2xl shadow-xl hover:shadow-accent-teal/20 transition-all flex items-center space-x-3 active:scale-95 disabled:grayscale"
              >
                <span class="text-[11px] uppercase tracking-[0.2em]">Begin Similarity Audit</span>
              </button>
           </div>
        </div>
      </div>

      <!-- Result Panel -->
      <div v-if="result" class="space-y-8 animate-slide-up">
         <!-- Score Widget -->
         <div class="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-center relative overflow-hidden">
            <div :class="verdictColor" class="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border mb-8 mx-auto w-fit">
               VERDICT: {{ result.verdict }}
            </div>
            
            <div class="relative w-40 h-40 mx-auto mb-6">
               <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                 <circle cx="50" cy="50" r="45" stroke="#f1f5f9" stroke-width="6" fill="transparent" />
                 <circle 
                   cx="50" cy="50" r="45" 
                   :stroke="scoreColor" 
                   stroke-width="8" 
                   fill="transparent" 
                   stroke-dasharray="282.7" 
                   :stroke-dashoffset="282.7 - (282.7 * result.similarityScore / 100)" 
                   stroke-linecap="round"
                   class="transition-all duration-1000 ease-out shadow-lg"
                 />
               </svg>
               <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="text-4xl font-black text-midnight-blue italic">{{ result.similarityScore }}%</span>
                  <span class="text-[8px] font-black text-gray-400 uppercase tracking-widest mt-1">Similarity</span>
               </div>
            </div>
            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">A score below 15% is ideal for high-level academic submission.</p>
         </div>

         <!-- Source List -->
         <div class="bg-midnight-blue p-8 rounded-[2.5rem] shadow-2xl text-white">
            <h3 class="text-sm font-black uppercase tracking-widest mb-6 text-white/40">Potential Matches</h3>
            <div class="space-y-4">
               <div v-for="source in result.originalSources" :key="source" class="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <p class="text-xs font-bold text-white/80 group-hover:text-white transition-colors truncate">{{ source }}</p>
                  <span class="text-[8px] font-black text-accent-teal uppercase tracking-widest mt-2 block italic">Click to verify match node</span>
               </div>
               <div v-if="result.originalSources.length === 0" class="text-center py-6 border-2 border-dashed border-white/10 rounded-2xl">
                  <span class="text-[10px] font-black text-white/30 uppercase tracking-widest">No match detected</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import axios from 'axios'

const text = ref('')
const checking = ref(false)
const result = ref<any>(null)

const checkPlagiarism = async () => {
  checking.value = true
  result.value = null
  try {
    const res = await axios.post('http://localhost:8080/api/plagiarism/check', { text: text.value })
    result.value = res.data
  } catch (err) {
    console.error("Similarity node connection lost.")
  } finally {
    checking.value = false
  }
}

const scoreColor = computed(() => {
  if (!result.value) return '#2563EB'
  if (result.value.similarityScore > 50) return '#ef4444'
  if (result.value.similarityScore > 20) return '#f59e0b'
  return '#10B981'
})

const verdictColor = computed(() => {
  if (!result.value) return ''
  if (result.value.verdict === 'Alert') return 'bg-red-50 text-red-600 border-red-100'
  if (result.value.verdict === 'Caution') return 'bg-amber-50 text-amber-600 border-amber-100'
  return 'bg-emerald-50 text-emerald-600 border-emerald-100'
})
</script>

<style scoped>
.animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1); }
.animate-slide-up { animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes slide-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
</style>
