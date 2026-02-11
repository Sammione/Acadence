<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-midnight-blue">Smart Assignment Assistant</h2>
      <p class="text-gray-600">Get AI-powered explanations and structured answers for your assignments.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Input Section -->
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <!-- File Upload Toggle -->
           <div class="flex items-center space-x-4 mb-6 p-1 bg-gray-50 rounded-xl w-fit">
              <button 
                @click="mode = 'text'" 
                :class="mode === 'text' ? 'bg-white shadow-sm text-royal-blue' : 'text-gray-500'"
                class="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
              >
                Text Input
              </button>
              <button 
                @click="mode = 'file'" 
                :class="mode === 'file' ? 'bg-white shadow-sm text-royal-blue' : 'text-gray-500'"
                class="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
              >
                Upload Document
              </button>
           </div>

           <div v-if="mode === 'text'">
             <label class="block text-sm font-medium text-gray-700 mb-2">Assignment Question</label>
             <textarea 
               v-model="question" 
               rows="6" 
               class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue resize-none transition-shadow"
               placeholder="Paste your assignment question here... e.g., 'Discuss the economic impact of inflation on small businesses in Nigeria.'"
             ></textarea>
           </div>

           <div v-else>
              <div 
                class="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:border-royal-blue hover:bg-blue-50 transition-all cursor-pointer group"
                @click="$refs.fileInput.click()"
              >
                <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload" accept=".pdf" />
                <div class="w-16 h-16 bg-blue-100 text-royal-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-800">{{ selectedFile ? selectedFile.name : 'Upload Assignment PDF' }}</h3>
                <p class="text-gray-500 text-sm mt-1">Upload the document containing your questions</p>
              </div>
           </div>
           
           <div class="flex items-center justify-between mt-6">
             <div class="flex items-center space-x-4">
               <div>
                  <label class="block text-xs font-medium text-gray-500 mb-1">Tone</label>
                  <select v-model="tone" class="text-sm border-gray-200 rounded-lg focus:ring-royal-blue focus:border-royal-blue">
                    <option>Standard</option>
                    <option>Simple</option>
                    <option>Deep Academic</option>
                  </select>
               </div>
                <div>
                  <label class="block text-xs font-medium text-gray-500 mb-1">Level</label>
                  <select v-model="level" class="text-sm border-gray-200 rounded-lg focus:ring-royal-blue focus:border-royal-blue">
                    <option>Secondary</option>
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                  </select>
               </div>
             </div>
             
             <button 
               @click="generateAnswer" 
               :disabled="(mode === 'text' ? !question : !selectedFile) || loading"
               class="px-6 py-2.5 bg-royal-blue hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg shadow-md transition-all flex items-center space-x-2"
             >
               <span v-if="loading" class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
               <span>{{ loading ? 'Analyzing...' : (mode === 'text' ? 'Generate Answer' : 'Process Document') }}</span>
             </button>
           </div>
        </div>

        <!-- Result Section -->
        <div v-if="answer" class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
           <div class="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
             <h3 class="text-lg font-bold text-midnight-blue">AI Analysis</h3>
             <div class="flex space-x-2">
               <!-- Humanize Button -->
               <button 
                @click="humanizeContent"
                :disabled="humanizing"
                class="flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
               >
                 <span v-if="humanizing" class="animate-spin h-4 w-4 border-2 border-emerald-700 border-t-transparent rounded-full"></span>
                 <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <span>{{ humanizing ? 'Humanizing...' : 'Humanize' }}</span>
               </button>
               <button class="p-1.5 text-gray-400 hover:text-royal-blue rounded-lg transition-colors" title="Copy">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
               </button>
             </div>
           </div>
           
           <div class="prose prose-blue max-w-none whitespace-pre-wrap text-gray-700 leading-relaxed font-sans">
             {{ answer }}
           </div>
        </div>
      </div>

      <!-- History Sidebar -->
      <div class="lg:col-span-1">
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 h-full">
           <h3 class="font-bold text-gray-800 mb-4">Recent Questions</h3>
           <div class="space-y-3">
             <div v-for="i in 3" :key="i" class="p-3 rounded-xl bg-gray-50 hover:bg-blue-50 cursor-pointer transition-colors group">
               <p class="text-sm font-medium text-gray-700 group-hover:text-royal-blue line-clamp-2">
                 Discuss the impact of climate change on...
               </p>
               <p class="text-xs text-gray-400 mt-1">2 hours ago</p>
             </div>
           </div>
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

const mode = ref('text')
const question = ref('')
const tone = ref('Standard')
const level = ref('Undergraduate')
const loading = ref(false)
const humanizing = ref(false)
const answer = ref('')
const selectedFile = ref<File | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0]
  }
}

const generateAnswer = async () => {
  loading.value = true
  answer.value = ''
  
  try {
    let response: any
    
    if (mode.value === 'text') {
      response = await $fetch('http://localhost:8080/api/assignments/solve', {
        method: 'POST',
        body: {
          question: question.value,
          level: level.value,
          tone: tone.value
        }
      })
    } else {
      const formData = new FormData()
      formData.append('file', selectedFile.value!)
      formData.append('level', level.value)
      formData.append('tone', tone.value)
      
      response = await $fetch('http://localhost:8080/api/assignments/upload', {
        method: 'POST',
        body: formData
      })
    }
    
    // @ts-ignore
    answer.value = response.content
  } catch (error) {
     answer.value = "Error connecting to server. Please ensure the backend is running on port 8080 and handling multipart/form-data."
  } finally {
    loading.value = false
  }
}

const humanizeContent = async () => {
  if (!answer.value) return
  humanizing.value = true
  
  try {
    const response = await $fetch('http://localhost:8080/api/assignments/humanize', {
      method: 'POST',
      body: {
        text: answer.value,
        level: level.value
      }
    })
    
    // @ts-ignore
    answer.value = response.humanized_content
  } catch (error) {
    console.error("Humanize error", error)
  } finally {
    humanizing.value = false
  }
}
</script>

<style>
.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out;
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.prose h1, .prose h2, .prose h3 {
  color: #0F172A;
  font-weight: 700;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.prose p {
  margin-bottom: 1em;
}

.prose strong {
  color: #2563EB;
}
</style>
