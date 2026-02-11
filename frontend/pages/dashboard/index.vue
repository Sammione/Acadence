<template>
  <div>
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-midnight-blue mb-2">Welcome back, Scholar!</h2>
      <p class="text-gray-600">Here's what's happening with your studies today.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-royal-blue text-xl">
          📚
        </div>
        <div>
          <p class="text-gray-500 text-sm font-medium">Assignments Solved</p>
          <p class="text-2xl font-bold text-gray-800">12</p>
        </div>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
        <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-teal text-xl">
          ⏱️
        </div>
        <div>
           <p class="text-gray-500 text-sm font-medium">Study Hours</p>
           <p class="text-2xl font-bold text-gray-800">24.5</p>
        </div>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
        <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xl">
          🔥
        </div>
        <div>
           <p class="text-gray-500 text-sm font-medium">Streak</p>
           <p class="text-2xl font-bold text-gray-800">5 Days</p>
        </div>
      </div>
    </div>

    <!-- Recent Activity & Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Recent Activity -->
      <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 class="text-lg font-bold text-midnight-blue mb-4">Recent Activity</h3>
        <div class="space-y-4">
          <div class="flex items-start space-x-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
            <div class="w-10 h-10 rounded-lg bg-blue-50 text-royal-blue flex items-center justify-center flex-shrink-0">
              📝
            </div>
            <div>
              <p class="font-medium text-gray-800">Research on "Climate Change in Nigeria"</p>
              <p class="text-sm text-gray-500">2 hours ago • Research Assistant</p>
            </div>
          </div>
          <div class="flex items-start space-x-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
             <div class="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-teal flex items-center justify-center flex-shrink-0">
              ✅
            </div>
            <div>
              <p class="font-medium text-gray-800">Completed Quiz: Economics 101</p>
              <p class="text-sm text-gray-500">Yesterday • Study Mode</p>
            </div>
          </div>
          <div class="flex items-start space-x-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
             <div class="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
              🛡️
            </div>
            <div>
              <p class="font-medium text-gray-800">Plagiarism Check: Final Thesis Draft</p>
              <p class="text-sm text-gray-500">2 days ago • Passed (98% Unique)</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 class="text-lg font-bold text-midnight-blue mb-4">Quick Actions</h3>
        <div class="space-y-3">
          <NuxtLink to="/dashboard/assignments" class="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors group">
            <span class="font-medium text-gray-700 group-hover:text-royal-blue">New Assignment</span>
          </NuxtLink>
           <NuxtLink to="/dashboard/research" class="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-emerald-50 rounded-xl transition-colors group">
            <span class="font-medium text-gray-700 group-hover:text-emerald-teal">Start Research</span>
          </NuxtLink>
           <NuxtLink to="/dashboard/plagiarism" class="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-purple-50 rounded-xl transition-colors group">
            <span class="font-medium text-gray-700 group-hover:text-purple-600">Check Document</span>
          </NuxtLink>
        </div>
        
        <div class="mt-8 p-4 bg-gradient-to-br from-midnight-blue to-royal-blue rounded-xl text-white">
          <h4 class="font-bold mb-2">Upgrade to Pro</h4>
          <p class="text-sm text-blue-100 mb-3">Unlock unlimited AI queries and advanced research tools.</p>
          <button class="w-full py-2 bg-emerald-teal hover:bg-emerald-500 rounded-lg font-semibold text-sm transition-colors">Upgrade Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>
