<template>
  <div class="flex h-screen bg-off-white overflow-hidden">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-20">
      <div class="p-6 border-b border-gray-100 flex items-center space-x-2">
         <div class="w-8 h-8 bg-gradient-to-br from-royal-blue to-emerald-teal rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
            S
          </div>
          <span class="text-xl font-bold text-midnight-blue">ScholarAI</span>
      </div>
      
      <nav class="flex-1 overflow-y-auto p-4 space-y-1">
        <NuxtLink to="/dashboard" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-royal-blue transition-colors group" active-class="bg-blue-50 text-royal-blue font-semibold">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-royal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
           <span>Dashboard</span>
        </NuxtLink>
        
        <div class="pt-4 pb-2 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tools</div>
        
        <NuxtLink to="/dashboard/assignments" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-royal-blue transition-colors group" active-class="bg-blue-50 text-royal-blue font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-royal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
           <span>Assignment Assistant</span>
        </NuxtLink>

        <NuxtLink to="/dashboard/research" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-royal-blue transition-colors group" active-class="bg-blue-50 text-royal-blue font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-royal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
           <span>Research Assistant</span>
        </NuxtLink>

        <NuxtLink to="/dashboard/plagiarism" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-royal-blue transition-colors group" active-class="bg-blue-50 text-royal-blue font-semibold">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-royal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
           <span>Plagiarism Checker</span>
        </NuxtLink>
        
        <NuxtLink to="/dashboard/study-mode" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-royal-blue transition-colors group" active-class="bg-blue-50 text-royal-blue font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-royal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
           <span>Study Mode</span>
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-gray-100">
        <NuxtLink to="/dashboard/profile" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 hover:text-royal-blue transition-colors">
          <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">U</div>
           <div>
             <p class="text-sm font-semibold text-gray-900">User Profile</p>
             <p class="text-xs text-gray-500">Free Plan</p>
           </div>
        </NuxtLink>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Header -->
      <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm z-10">
        <h1 class="text-xl font-bold text-gray-800">{{ ($route.name as string).split('-').pop()?.replace(/^\w/, c => c.toUpperCase()) || 'Dashboard' }}</h1>
        <div class="flex items-center space-x-4">
           <button class="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors">
             <span>Level: Undergraduate</span>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
             </svg>
           </button>
           <div class="h-8 w-px bg-gray-200"></div>
           <button class="relative p-2 text-gray-500 hover:text-royal-blue transition-colors">
             <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
             </svg>
           </button>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-off-white p-6">
        <div class="max-w-5xl mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Dashboard logic
</script>
