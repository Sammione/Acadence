<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-midnight-blue tracking-tight">Smart Assignment Analysis</h2>
      <p class="text-gray-500 mt-1">Submit your academic queries or documents for high-level synthesis.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
           <!-- Mode Toggle -->
           <div class="flex space-x-2 mb-8 p-1 bg-gray-50 rounded-xl w-fit border border-gray-100 shadow-inner">
              <button 
                @click="mode = 'text'" 
                :class="mode === 'text' ? 'bg-white shadow-md text-royal-blue' : 'text-gray-400 font-medium'"
                class="px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
              >
                Direct Query
              </button>
              <button 
                @click="mode = 'file'" 
                :class="mode === 'file' ? 'bg-white shadow-md text-royal-blue' : 'text-gray-400 font-medium'"
                class="px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
              >
                Scan PDF
              </button>
           </div>

           <div v-if="mode === 'text'">
             <textarea 
               v-model="question" 
               rows="8" 
               class="w-full p-5 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-royal-blue/10 focus:border-royal-blue resize-none transition-all outline-none text-gray-700 bg-gray-50/30"
               placeholder="Enter your assignment question details..."
             ></textarea>
           </div>

           <div v-else>
              <div 
                class="border-4 border-dashed border-gray-100 rounded-3xl p-16 text-center hover:border-royal-blue/30 hover:bg-blue-50/30 transition-all cursor-pointer group"
                @click="triggerFile"
              >
                <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload" accept=".pdf" />
                <div class="w-16 h-16 bg-blue-50 text-royal-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 shadow-sm transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-midnight-blue tracking-tight">{{ selectedFile ? selectedFile.name : 'Drop Academic PDF' }}</h3>
                <p class="text-gray-400 text-sm mt-1">Automated question extraction will begin upon upload.</p>
              </div>
           </div>
           
           <div class="flex items-center justify-between mt-10 p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
             <div class="flex items-center space-x-6">
                <div class="flex flex-col">
                  <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Depth Level</span>
                  <select v-model="level" class="text-sm border-none bg-transparent font-bold text-midnight-blue focus:ring-0 cursor-pointer">
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                    <option>Researcher</option>
                  </select>
                </div>
             </div>
             
             <button 
               @click="generateAnswer" 
               :disabled="loading"
               class="px-8 py-3 bg-midnight-blue hover:bg-black text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center space-x-3 active:scale-95"
             >
               <span v-if="loading" class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
               <span class="text-xs uppercase tracking-widest">{{ loading ? 'Processing' : 'Analyze Now' }}</span>
             </button>
           </div>
        </div>

        <!-- Result -->
        <div v-if="answer" class="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 animate-slide-up">
           <div class="flex items-center justify-between mb-8 border-b border-gray-50 pb-6">
             <h3 class="text-xl font-bold text-midnight-blue tracking-tighter">AI-Generated Analysis</h3>
             <button 
              @click="humanizeContent"
              :disabled="humanizing"
              class="flex items-center space-x-2 px-4 py-2 bg-accent-teal/10 text-accent-teal hover:bg-accent-teal/20 rounded-xl text-xs font-bold transition-all disabled:opacity-50 tracking-widest"
             >
               <span v-if="humanizing" class="animate-spin h-3 w-3 border-2 border-accent-teal border-t-transparent rounded-full mr-1"></span>
               {{ humanizing ? 'REFINING...' : 'HUMANIZE WRITING' }}
             </button>
           </div>
           
           <div class="prose prose-slate max-w-none text-gray-700 leading-relaxed font-sans whitespace-pre-wrap">
             {{ answer }}
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
    answer.value = "Error: System currently offline or invalid API key configuration."
  } finally {
    loading.value = false
  }
}

const humanizeContent = async () => {
  if (!answer.value) return
  humanizing.value = true
  try {
    const result = await axios.post('http://localhost:8080/api/assignments/humanize', {
      text: answer.value,
      level: level.value
    })
    answer.value = result.data.humanized_content
  } finally {
    humanizing.value = false
  }
}
</script>

<style scoped>
@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-slide-up {
  animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
