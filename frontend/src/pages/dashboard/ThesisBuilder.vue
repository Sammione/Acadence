<template>
  <div class="max-w-6xl mx-auto animate-fade-in mb-20">
    <div class="mb-12">
      <h2 class="text-5xl font-black text-midnight-blue tracking-tighter">Thesis <span class="text-royal-blue">Architect</span></h2>
      <p class="text-gray-400 font-bold mt-2 uppercase tracking-[0.2em] text-xs">Generating 100-page high-fidelity academic dissertations</p>
    </div>

    <!-- Topic Input -->
    <div class="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 mb-12 relative overflow-hidden">
       <div class="absolute inset-0 bg-gradient-to-tr from-royal-blue/5 to-transparent pointer-events-none"></div>
       
       <h3 class="text-2xl font-black text-midnight-blue tracking-tighter mb-8 italic">Specify Research Territory</h3>
       
       <div class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div class="space-y-3">
                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-4">Research Topic</label>
                <input 
                  v-model="topic" 
                  type="text" 
                  placeholder="e.g. Impact of AI on Global Healthcare Logistics" 
                  class="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-royal-blue/20 rounded-2xl outline-none font-bold text-midnight-blue transition-all" 
                />
             </div>
             <div class="space-y-3">
                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-4">Institutional Level</label>
                <select v-model="level" class="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-royal-blue/20 rounded-2xl outline-none font-bold text-midnight-blue transition-all appearance-none cursor-pointer">
                   <option>Undergraduate</option>
                   <option>Postgraduate / Masters</option>
                   <option>PhD / Doctorate</option>
                </select>
             </div>
          </div>

          <div class="pt-6 border-t border-gray-100 flex justify-end">
             <button 
                @click="generateThesis" 
                :disabled="generating || !topic"
                class="px-12 py-5 bg-midnight-blue text-white font-black rounded-2xl shadow-xl hover:bg-black transition-all flex items-center space-x-4 active:scale-95 disabled:grayscale"
             >
                <span v-if="generating" class="animate-spin h-5 w-5 border-3 border-white border-t-transparent rounded-full"></span>
                <span class="text-[11px] uppercase tracking-[0.2em]">{{ generating ? 'Constructing Outline...' : 'Generate Research Foundation' }}</span>
             </button>
          </div>
       </div>
    </div>

    <!-- Output Progress -->
    <div v-if="chapters" class="bg-white p-16 rounded-[4rem] shadow-2xl border border-gray-100 animate-slide-up">
       <div class="flex items-center justify-between mb-12 relative">
          <div class="flex flex-col">
             <h3 class="text-3xl font-black text-midnight-blue tracking-tighter italic">Structural Architecture Generated</h3>
             <span class="text-[10px] font-black text-accent-teal uppercase tracking-[0.3em] mt-2">Ready for Chapter-by-Chapter Expansion</span>
          </div>
          <button class="px-6 py-3 bg-off-white text-midnight-blue font-black rounded-xl text-[10px] uppercase tracking-widest border border-gray-200 hover:bg-gray-100 transition-all">
             Export Word (.docx)
          </button>
       </div>

       <div class="prose prose-xl prose-slate max-w-none text-gray-700 leading-relaxed font-sans whitespace-pre-wrap selection:bg-royal-blue selection:text-white">
          {{ chapters }}
       </div>

       <div class="mt-20 p-12 bg-royal-blue/5 rounded-[3rem] border border-royal-blue/10 flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-royal-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl text-2xl font-black italic">!</div>
          <h4 class="text-xl font-black text-midnight-blue tracking-tight">Expand into 100 Pages</h4>
          <p class="text-sm text-gray-500 max-w-lg mt-2 font-medium italic">
            This blueprint provides the academic foundation. Use the "Expand Chapter" feature to generate deep 15-page segments for each section to reach full dissertation depth.
          </p>
          <div class="mt-8 flex space-x-4">
             <button class="px-8 py-4 bg-royal-blue text-white font-black rounded-2xl shadow-lg hover:shadow-royal-blue/30 transition-all text-xs uppercase tracking-widest">Auto-Expand All</button>
             <button class="px-8 py-4 bg-white text-royal-blue font-black rounded-2xl shadow-md border-2 border-royal-blue/10 text-xs uppercase tracking-widest">Manual Edit</button>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const topic = ref('')
const level = ref('Undergraduate')
const generating = ref(false)
const chapters = ref('')

const generateThesis = async () => {
  generating.value = true
  chapters.value = ''
  try {
    const res = await axios.post('http://localhost:8080/api/research/generate-thesis', {
      topic: topic.value,
      level: level.value
    })
    chapters.value = res.data.chapters
  } catch (err) {
    console.error("Thesis architecture failed to synchronize.")
  } finally {
    generating.value = false
  }
}
</script>

<style scoped>
.animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1); }
.animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes slide-up { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
</style>
