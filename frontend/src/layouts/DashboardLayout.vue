<template>
  <div class="flex h-screen bg-[#F1F5F9] overflow-hidden font-sans selection:bg-royal-blue/20">
    <!-- Sophisticated Sidebar -->
    <aside class="w-72 bg-midnight-blue text-white hidden md:flex flex-col z-30 relative shadow-2xl">
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-royal-blue/10 to-transparent pointer-events-none"></div>

      <div class="p-8 border-b border-white/5 flex items-center space-x-3 cursor-pointer group shrink-0" @click="$router.push('/')">
         <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-midnight-blue font-black text-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:rotate-12 transition-transform duration-500">
            S
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-black tracking-tighter leading-none">ScholarAI</span>
            <span class="text-[10px] font-bold text-accent-teal tracking-[0.2em] uppercase mt-1">Research Lab</span>
          </div>
      </div>
      
      <nav class="flex-1 overflow-y-auto p-4 space-y-2 mt-4 custom-scrollbar">
        <div class="px-4 mb-2 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Navigation</div>
        
        <router-link to="/dashboard" exact-active-class="bg-white/10 text-white translate-x-1" class="flex items-center space-x-3 px-4 py-3.5 text-white/60 rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 group">
           <span class="text-sm font-bold">Lab Overview</span>
        </router-link>
        
        <div class="pt-6 pb-2 px-4 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Core Engines</div>
        
        <router-link to="/dashboard/assignments" active-class="bg-white/10 text-white translate-x-1 border-l-4 border-royal-blue" class="flex items-center space-x-3 px-4 py-3.5 text-white/60 rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 group">
           <span class="text-sm font-bold">Assignment Synth</span>
        </router-link>

        <router-link to="/dashboard/research" active-class="bg-white/10 text-white translate-x-1 border-l-4 border-accent-teal" class="flex items-center space-x-3 px-4 py-3.5 text-white/60 rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 group">
           <span class="text-sm font-bold">E-Library Core</span>
        </router-link>

        <div class="pt-6 pb-2 px-4 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Account</div>
        <div class="flex items-center space-x-3 px-4 py-3.5 text-white/30 rounded-2xl cursor-not-allowed">
           <span class="text-sm font-bold">Subscription</span>
           <span class="text-[8px] bg-white/10 px-2 py-0.5 rounded text-white font-black">PRO</span>
        </div>
      </nav>

      <!-- User Card -->
      <div class="p-6 mt-auto border-t border-white/5 bg-white/5 m-4 rounded-3xl backdrop-blur-md">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-royal-blue to-accent-teal flex items-center justify-center font-black shadow-lg">U</div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-xs font-black truncate">Undergraduate</span>
            <span class="text-[10px] text-white/40 truncate">Free Plan</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Modern Transparent Header -->
      <header class="bg-white/50 backdrop-blur-xl border-b border-gray-200/50 h-20 flex items-center justify-between px-10 z-20 sticky top-0">
        <div class="flex flex-col">
          <h1 class="text-xl font-black text-midnight-blue tracking-tighter">Command Center</h1>
          <p class="text-[10px] font-bold text-gray-400">SESSION ID: SX-{{ Date.now().toString().slice(-6) }}</p>
        </div>
        
        <div class="flex items-center space-x-6">
           <div class="hidden lg:flex items-center px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 space-x-4">
              <div class="flex flex-col items-end">
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">AI Status</span>
                <span class="text-[10px] font-bold text-accent-teal">OPTIMIZED</span>
              </div>
              <div class="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></div>
           </div>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto custom-scrollbar-light">
        <div class="p-10 max-w-7xl mx-auto">
          <router-view v-slot="{ Component }">
            <transition name="page" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }

.custom-scrollbar-light::-webkit-scrollbar { width: 6px; }
.custom-scrollbar-light::-webkit-scrollbar-track { background: #f1f5f9; }
.custom-scrollbar-light::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

/* Page Transitions */
.page-enter-active, .page-leave-active { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
