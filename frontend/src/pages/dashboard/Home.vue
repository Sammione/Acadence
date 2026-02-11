<template>
  <div class="animate-fade-in space-y-12">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 class="text-5xl font-black text-midnight-blue tracking-tighter">Academic Intelligence <span class="italic text-royal-blue">Portal</span></h2>
        <p class="text-gray-400 font-bold mt-2 uppercase tracking-[0.2em] text-xs">Project Status: ACTIVE • SECURITY: ENCRYPTED</p>
      </div>
      <div class="flex space-x-3">
         <div class="px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-end">
            <span class="text-[9px] font-black text-gray-400 tracking-widest uppercase">Global Rank</span>
            <span class="text-sm font-black text-midnight-blue">TOP 5% <span class="text-accent-teal">↑ 2.4%</span></span>
         </div>
      </div>
    </div>

    <!-- Metric Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="card in metrics" :key="card.title" class="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">{{ card.title }}</p>
        <div class="flex items-baseline space-x-2">
          <h4 class="text-5xl font-black text-midnight-blue tracking-tighter italic">{{ card.value }}</h4>
        </div>
        <div class="mt-6 flex items-center space-x-2">
           <div class="w-1.5 h-1.5 rounded-full bg-accent-teal"></div>
           <span class="text-[9px] font-black text-accent-teal uppercase tracking-widest">{{ card.trend }}</span>
        </div>
      </div>
    </div>

    <!-- Research Pipeline visualization -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-10">
      <!-- Growth Pipeline -->
      <div class="xl:col-span-2 bg-midnight-blue p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
         <div class="absolute inset-0 bg-gradient-to-tr from-royal-blue/20 to-transparent pointer-events-none"></div>
         
         <div class="flex items-center justify-between mb-12 relative z-10">
            <h3 class="text-2xl font-black text-white tracking-tight">Research Velocity Pipeline</h3>
            <span class="px-4 py-2 bg-white/10 rounded-xl text-[10px] font-black text-white tracking-widest uppercase border border-white/5">Jan - Dec Audit</span>
         </div>

         <!-- SVG Wave/Graph Visualization -->
         <div class="h-64 flex items-end justify-between space-x-4 relative z-10 px-4">
            <div v-for="(h, i) in [40, 70, 50, 90, 60, 100, 80]" :key="i" class="flex-1 group/bar relative">
               <div 
                :style="{ height: h + '%' }" 
                class="w-full bg-gradient-to-t from-royal-blue to-accent-teal rounded-full transition-all duration-1000 group-hover/bar:brightness-125 cursor-help"
               ></div>
               <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap bg-white text-midnight-blue text-[10px] font-black px-2 py-1 rounded shadow-xl">
                 PHASE {{ i + 1 }}
               </div>
            </div>
         </div>

         <div class="mt-12 pt-12 border-t border-white/10 grid grid-cols-3 gap-8 relative z-10">
            <div>
               <p class="text-[9px] font-black text-white/30 tracking-widest uppercase mb-1">Synthesized Papers</p>
               <h5 class="text-2xl font-black text-white italic">4,281</h5>
            </div>
            <div>
               <p class="text-[9px] font-black text-white/30 tracking-widest uppercase mb-1">Research Gaps ID'd</p>
               <h5 class="text-2xl font-black text-white italic">142</h5>
            </div>
            <div>
               <p class="text-[9px] font-black text-white/30 tracking-widest uppercase mb-1">Peer Correlation</p>
               <h5 class="text-2xl font-black text-white italic">0.98%</h5>
            </div>
         </div>
      </div>

      <!-- Quick Action Cards -->
      <div class="space-y-8">
        <div class="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl group cursor-pointer hover:bg-royal-blue hover:scale-[1.02] transition-all duration-500" @click="$router.push('/dashboard/assignments')">
           <h4 class="text-xl font-black text-royal-blue group-hover:text-white mb-3 transition-colors">Start Synthesis →</h4>
           <p class="text-xs font-bold text-gray-400 group-hover:text-white/60 leading-relaxed uppercase tracking-widest">Assignment Engine v4.0</p>
        </div>
        <div class="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl group cursor-pointer hover:bg-accent-teal hover:scale-[1.02] transition-all duration-500" @click="$router.push('/dashboard/research')">
           <h4 class="text-xl font-black text-accent-teal group-hover:text-white mb-3 transition-colors">E-Library Access →</h4>
           <p class="text-xs font-bold text-gray-400 group-hover:text-white/60 leading-relaxed uppercase tracking-widest">Global Repository Node</p>
        </div>
        
        <!-- Live Alert Mock -->
        <div class="p-8 bg-black rounded-[2.5rem] shadow-2xl overflow-hidden relative">
           <div class="flex items-center space-x-4 mb-4">
              <div class="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <span class="text-[10px] font-black text-white uppercase tracking-widest">Intelligence Alert</span>
           </div>
           <p class="text-xs text-white/60 font-bold leading-tight">New research paper detected in "Deep Learning" repository matching your profile.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const metrics = [
  { title: "Academic Score", value: "A+", trend: "CONSISTENT PERFORMANCE" },
  { title: "Synthesized Q's", value: "142", trend: "+12 THIS WEEK" },
  { title: "Human Index", value: "98%", trend: "HIGH RELIABILITY" },
  { title: "Study Points", value: "4.2", trend: "TOP 5% RANK" }
]
</script>

<style scoped>
.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
