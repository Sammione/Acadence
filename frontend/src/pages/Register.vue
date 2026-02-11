<template>
  <div class="min-h-screen bg-off-white flex items-center justify-center p-4">
    <div class="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md">
      <h2 class="text-3xl font-extrabold text-midnight-blue tracking-tighter mb-2">Initialize Account</h2>
      <p class="text-gray-400 text-sm mb-8 font-medium italic">Join the global academic AI network.</p>
      
      <div class="space-y-4">
        <div>
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Full Legal Name</label>
          <input type="text" placeholder="John Doe" class="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:border-royal-blue outline-none transition-all" />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Educational Email</label>
          <input type="email" placeholder="student@university.edu" class="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:border-royal-blue outline-none transition-all" />
        </div>
      </div>
      
      <router-link to="/dashboard" class="w-full py-4 bg-royal-blue hover:bg-blue-700 text-white font-bold rounded-xl mt-8 shadow-lg hover:shadow-2xl transition-all flex items-center justify-center space-x-2">
        <span>CREATE SCHOLAR ID</span>
      </router-link>
      
      <p class="text-center text-xs text-gray-400 mt-8 font-medium">
        Already registered? <router-link to="/login" class="text-royal-blue font-bold">Secure Login</router-link>
      </p>
    </div>
  </div>
</template>
