<template>
  <div class="min-h-screen bg-off-white flex items-center justify-center p-4">
    <div class="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md">
      <h2 class="text-3xl font-extrabold text-midnight-blue tracking-tighter mb-2">Welcome Back</h2>
      <p class="text-gray-400 text-sm mb-8 font-medium italic">Access your ScholarAI command center.</p>
      
      <div class="space-y-4">
        <div>
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Institutional ID</label>
          <input type="email" placeholder="student@university.edu" class="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:border-royal-blue outline-none transition-all" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Key Phrase</label>
          <input type="password" placeholder="••••••••" class="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:border-royal-blue outline-none transition-all" />
        </div>
      </div>
      
      <router-link to="/dashboard" class="w-full py-4 bg-midnight-blue hover:bg-black text-white font-bold rounded-xl mt-8 shadow-lg hover:shadow-2xl transition-all flex items-center justify-center space-x-2">
        <span>AUTHORIZE ACCESS</span>
      </router-link>
      
      <p class="text-center text-xs text-gray-400 mt-8 font-medium">
        First time? <router-link to="/register" class="text-royal-blue font-bold">Initialize Account</router-link>
      </p>
    </div>
  </div>
</template>
