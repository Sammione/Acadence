<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-midnight-blue">Plagiarism Checker</h2>
      <p class="text-gray-600">Scan your documents for originality and get rephrasing suggestions.</p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <!-- Upload Area -->
      <div class="p-10 border-b border-gray-100 text-center border-dashed border-2 border-gray-200 m-6 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
         <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
           </svg>
         </div>
         <h3 class="text-lg font-medium text-gray-900">Upload your document</h3>
         <p class="text-gray-500 mt-1">Drag and drop or click to browse (PDF, DOCX, TXT)</p>
      </div>

      <!-- Text Input Area -->
      <div class="p-6">
        <div class="mb-4 flex items-center justify-between">
          <label class="text-sm font-medium text-gray-700">Or paste your text</label>
          <span class="text-xs text-gray-400">0 / 5000 words</span>
        </div>
        <textarea 
          class="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none text-sm leading-relaxed" 
          placeholder="Paste your abstract or essay here..."
        ></textarea>
        
        <div class="mt-6 flex justify-end">
          <button class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-transform hover:-translate-y-0.5 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Run Similarity Check</span>
          </button>
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
