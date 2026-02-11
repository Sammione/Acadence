<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <div v-for="card in metrics" :key="card.title" class="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 hover:shadow-lg transition-all">
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{{ card.title }}</p>
      <div class="flex items-baseline space-x-2">
        <h4 class="text-4xl font-extrabold text-midnight-blue tracking-tighter">{{ card.value }}</h4>
        <span class="text-xs font-bold text-accent-teal">{{ card.trend }}</span>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-3xl p-10 shadow-sm border border-gray-50">
    <h3 class="text-xl font-bold text-midnight-blue tracking-tighter mb-8 italic">Welcome back to ScholarAI Research Lab.</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="p-10 bg-royal-blue/5 rounded-3xl border border-royal-blue/10 group cursor-pointer" @click="$router.push('/dashboard/assignments')">
         <h4 class="text-lg font-bold text-royal-blue mb-3 group-hover:translate-x-1 transition-transform">Solve Assignment →</h4>
         <p class="text-sm text-gray-500 leading-relaxed">Let AI analyze your complex homework and projects with academic precision.</p>
      </div>
      <div class="p-10 bg-accent-teal/5 rounded-3xl border border-accent-teal/10 group cursor-pointer" @click="$router.push('/dashboard/research')">
         <h4 class="text-lg font-bold text-accent-teal mb-3 group-hover:translate-x-1 transition-transform">Research Library →</h4>
         <p class="text-sm text-gray-500 leading-relaxed">Scan millions of papers and identify research gaps in seconds.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const metrics = [
  { title: "SDR Queries", value: "24", trend: "+12%" },
  { title: "Ref Data Scan", value: "152", trend: "NEW" },
  { title: "Active Projects", value: "08", trend: "0.2h/avg" },
  { title: "Study Points", value: "4.2", trend: "TOP 5%" }
]
</script>
