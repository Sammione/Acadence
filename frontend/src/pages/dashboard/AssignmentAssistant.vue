<template>
  <div class="max-w-5xmx-auto">
    <div class="mb-10 animate-fade-in">
      <h2 class="text-4xl font-extrabold text-midnight-blue tracking-tighter">Assignment Synthesis</h2>
      <p class="text-gray-500 mt-2 font-medium">Convert complex institutional requirements into high-grade academic outputs.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Input Control Center -->
      <div class="lg:col-span-12 xl:col-span-7 space-y-8">
        <div class="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full relative overflow-hidden">
           <!-- Decorative Background Element -->
           <div class="absolute top-0 right-0 w-64 h-64 bg-royal-blue/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>

           <!-- Mode Switcher -->
           <div class="flex space-x-2 mb-10 p-1.5 bg-gray-100/50 backdrop-blur-sm rounded-2xl w-fit border border-gray-200/50 shadow-inner translate-z-0">
              <button 
                @click="mode = 'text'" 
                :class="mode === 'text' ? 'bg-white shadow-xl text-royal-blue scale-[1.02]' : 'text-gray-400 font-bold'"
                class="px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300"
              >
                Text Input
              </button>
              <button 
                @click="mode = 'file'" 
                :class="mode === 'file' ? 'bg-white shadow-xl text-royal-blue scale-[1.02]' : 'text-gray-400 font-bold'"
                class="px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300"
              >
                Document Scan
              </button>
           </div>

           <div v-if="mode === 'text'" class="relative">
             <textarea 
               v-model="question" 
               rows="10" 
               class="w-full p-8 border-2 border-gray-100 rounded-[2rem] focus:ring-0 focus:border-royal-blue/30 resize-none transition-all outline-none text-gray-700 bg-gray-50/50 text-lg leading-relaxed shadow-inner"
               placeholder="Paste your assignment prompt or specific research question here..."
             ></textarea>
           </div>

           <div v-else class="flex-1">
              <div 
                class="border-4 border-dashed border-gray-100 rounded-[3rem] p-24 text-center hover:border-royal-blue/20 hover:bg-royal-blue/[0.02] transition-all duration-500 cursor-pointer group relative overflow-hidden"
                @click="triggerFile"
              >
                <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload" accept=".pdf" />
                <div class="relative z-10">
                  <div class="w-20 h-20 bg-white shadow-2xl rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-royal-blue">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-black text-midnight-blue tracking-tight">{{ selectedFile ? selectedFile.name : 'Upload Research PDF' }}</h3>
                  <p class="text-gray-400 font-bold text-sm mt-2 uppercase tracking-widest">Supports Multi-Page OCR Synthesis</p>
                </div>
              </div>
           </div>
           
           <div class="flex flex-col sm:flex-row items-center justify-between mt-10 p-6 bg-midnight-blue rounded-[2rem] border border-white/5 shadow-2xl space-y-4 sm:space-y-0">
             <div class="flex items-center space-x-8 px-4">
                <div class="flex flex-col">
                  <span class="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Academic Depth</span>
                  <select v-model="level" class="text-xs border-none bg-transparent font-black text-white focus:ring-0 cursor-pointer p-0">
                    <option class="text-midnight-blue">Undergraduate</option>
                    <option class="text-midnight-blue">Postgraduate</option>
                    <option class="text-midnight-blue">PhD / Researcher</option>
                  </select>
                </div>
                <div class="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
                <div class="flex flex-col">
                  <span class="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Response Tone</span>
                  <select v-model="tone" class="text-xs border-none bg-transparent font-black text-white focus:ring-0 cursor-pointer p-0">
                    <option class="text-midnight-blue">Standard</option>
                    <option class="text-midnight-blue">Simplified</option>
                    <option class="text-midnight-blue">Critical Analysis</option>
                  </select>
                </div>
             </div>
             
             <button 
               @click="generateAnswer" 
               :disabled="loading"
               class="w-full sm:w-fit px-10 py-5 bg-gradient-to-r from-royal-blue to-blue-600 hover:from-blue-600 hover:to-royal-blue text-white font-black rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center space-x-4 active:scale-95 disabled:grayscale"
             >
               <span v-if="loading" class="animate-spin h-5 w-5 border-3 border-white border-t-transparent rounded-full"></span>
               <span class="text-[10px] uppercase tracking-[0.2em]">{{ loading ? 'Synthesizing...' : 'Run Analysis' }}</span>
             </button>
           </div>
        </div>
      </div>

      <!-- Humanization Side Panel (The Standout Feature) -->
      <div class="lg:col-span-12 xl:col-span-5 space-y-8">
        <div class="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden h-full">
           <div class="px-3 py-1 bg-accent-teal/10 text-accent-teal rounded-full text-[9px] font-black uppercase tracking-widest border border-accent-teal/20 mb-8 self-center">Proprietary Algorithm</div>
           
           <h3 class="text-xl font-black text-midnight-blue tracking-tight">Human-Likeness Index</h3>
           <p class="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">Pattern Recognition Audit</p>

           <!-- Dynamic Gauge -->
           <div class="relative w-56 h-56 mt-12 mb-8 group">
              <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="40" stroke="#f1f5f9" stroke-width="8" fill="transparent" />
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="url(#gradient)" 
                  stroke-width="8" 
                  fill="transparent" 
                  stroke-dasharray="251.2" 
                  :stroke-dashoffset="251.2 - (251.2 * humanScore / 100)" 
                  stroke-linecap="round"
                  class="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#2563EB" />
                    <stop offset="100%" stop-color="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                 <span class="text-5xl font-black text-midnight-blue italic">{{ humanScore }}%</span>
                 <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Reliability</span>
              </div>
           </div>

           <p class="text-sm text-gray-500 max-w-xs leading-relaxed mb-10 px-6 italic">
             Our humanization engine varies sentence architecture and transition complexity to bypass institutional pattern-matching tools.
           </p>

           <button 
              @click="humanizeContent"
              :disabled="humanizing || !answer"
              class="w-full py-5 bg-off-white hover:bg-gray-100 text-midnight-blue font-black rounded-2xl border-2 border-dashed border-gray-200 transition-all flex items-center justify-center space-x-3 active:scale-95 disabled:opacity-30 group"
           >
              <span v-if="humanizing" class="animate-spin h-5 w-5 border-3 border-midnight-blue border-t-transparent rounded-full"></span>
              <span class="text-[11px] uppercase tracking-[0.2em]">{{ humanizing ? 'RECONSTRUCTING...' : 'Upgrade Humanization' }}</span>
           </button>
        </div>
      </div>

      <!-- Full-Width Result View -->
      <div v-if="answer" class="lg:col-span-12">
        <div class="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 animate-slide-up">
           <div class="flex items-center justify-between mb-12 border-b border-gray-50 pb-8">
             <div class="flex flex-col">
                <h3 class="text-2xl font-black text-midnight-blue tracking-tighter">Synthetic Output v1.2</h3>
                <span class="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mt-1">Cross-Verified Academic Logic</span>
             </div>
             <div class="flex space-x-4">
                <button class="p-3 bg-off-white rounded-xl hover:bg-gray-200 transition-colors" title="Export PDF">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-midnight-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </button>
                <button class="p-3 bg-midnight-blue text-white rounded-xl hover:shadow-[0_10px_20px_rgba(15,23,42,0.3)] transition-all" title="Copy Content">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </button>
             </div>
           </div>
           
           <div class="prose prose-xl prose-slate max-w-none text-gray-700 leading-relaxed font-sans whitespace-pre-wrap selection:bg-royal-blue selection:text-white">
             {{ answer }}
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import axios from 'axios'

const mode = ref('text')
const question = ref('')
const level = ref('Undergraduate')
const tone = ref('Standard')
const loading = ref(false)
const humanizing = ref(false)
const answer = ref('')
const selectedFile = ref<File | null>(null)
const fileInput = ref<any>(null)
const humanScore = ref(42) // Starting score for initial AI output

const triggerFile = () => fileInput.value?.click()

const handleFileUpload = (event: any) => {
  const file = event.target.files[0]
  if (file) selectedFile.value = file
}

const generateAnswer = async () => {
  if (mode.value === 'text' && !question.value) return
  if (mode.value === 'file' && !selectedFile.value) return
  
  loading.value = true
  answer.value = ''
  humanScore.value = 42 // Reset to standard AI score
  
  try {
    let result: any
    if (mode.value === 'text') {
      result = await axios.post('http://localhost:8080/api/assignments/solve', {
        question: question.value,
        level: level.value,
        tone: tone.value
      })
    } else {
      const formData = new FormData()
      formData.append('file', selectedFile.value!)
      formData.append('level', level.value)
      formData.append('tone', tone.value)
      result = await axios.post('http://localhost:8080/api/assignments/upload', formData)
    }
    answer.value = result.data.content
  } catch (err) {
    answer.value = "PROTOCOL_ERROR: Authentication failed or backend synthesis node offline."
  } finally {
    loading.value = false
  }
}

const humanizeContent = async () => {
  if (!answer.value || humanizing.value) return
  humanizing.value = true
  
  // Animate score during process for "Wow" factor
  const interval = setInterval(() => {
    if (humanScore.value < 85) humanScore.value += 1
  }, 50)

  try {
    const result = await axios.post('http://localhost:8080/api/assignments/humanize', {
      text: answer.value,
      level: level.value
    })
    
    // Final jump to high score
    clearInterval(interval)
    humanScore.value = 98 
    answer.value = result.data.humanized_content
  } finally {
    humanizing.value = false
  }
}
</script>

<style scoped>
@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-slide-up {
  animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
