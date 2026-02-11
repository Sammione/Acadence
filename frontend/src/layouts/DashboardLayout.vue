<template>
  <div class="flex h-screen bg-off-white overflow-hidden font-sans">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-20">
      <div class="p-6 border-b border-gray-100 flex items-center space-x-2 cursor-pointer" @click="$router.push('/')">
         <div class="w-8 h-8 bg-gradient-to-br from-royal-blue to-accent-teal rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
            S
          </div>
          <span class="text-xl font-bold text-midnight-blue tracking-tight">ScholarAI</span>
      </div>
      
      <nav class="flex-1 overflow-y-auto p-4 space-y-1">
        <router-link to="/dashboard" exact-active-class="bg-blue-50 text-royal-blue font-bold" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors group">
           <span>Dashboard</span>
        </router-link>
        
        <div class="pt-4 pb-2 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Core Tools</div>
        
        <router-link to="/dashboard/assignments" active-class="bg-blue-50 text-royal-blue font-bold" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors group">
           <span>Assignment Assistant</span>
        </router-link>

        <router-link to="/dashboard/research" active-class="bg-blue-50 text-royal-blue font-bold" class="flex items-center space-x-3 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors group">
           <span>Research E-Library</span>
        </router-link>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm z-10 transition-all">
        <h1 class="text-lg font-bold text-gray-800 tracking-tight">Scholar Central</h1>
        <div class="flex items-center space-x-4">
           <div class="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-600 uppercase tracking-widest border border-gray-200">
             Undergraduate
           </div>
           <div class="w-8 h-8 rounded-full bg-royal-blue text-white flex items-center justify-center font-bold text-sm shadow-md">
             U
           </div>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-off-white p-6">
        <div class="max-w-6xl mx-auto">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
