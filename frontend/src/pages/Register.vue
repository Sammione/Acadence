<template>
  <div class="min-h-screen bg-off-white flex items-center justify-center p-4">
    <div class="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 w-full max-w-md animate-fade-in">
      <h2 class="text-4xl font-black text-midnight-blue tracking-tighter mb-2">New <span class="text-accent-teal italic">Scholar</span></h2>
      <p class="text-gray-400 text-sm mb-8 font-medium">Join the global academic intelligence network.</p>
      
      <form @submit.prevent="handleRegister" class="space-y-6">
        <div>
          <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-4">Full Name</label>
          <input 
            v-model="name" 
            type="text" 
            required
            placeholder="Dr. John Doe" 
            class="w-full px-8 py-5 rounded-2xl border-2 border-gray-50 bg-gray-50/50 focus:border-royal-blue/30 outline-none transition-all font-bold text-midnight-blue" 
          />
        </div>
        <div>
          <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-4">Email Address</label>
          <input 
            v-model="email" 
            type="email" 
            required
            placeholder="scholar@university.edu" 
            class="w-full px-8 py-5 rounded-2xl border-2 border-gray-50 bg-gray-50/50 focus:border-royal-blue/30 outline-none transition-all font-bold text-midnight-blue" 
          />
        </div>
        <div>
          <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-4">Create Secret Key</label>
          <input 
            v-model="password" 
            type="password" 
            required
            placeholder="••••••••" 
            class="w-full px-8 py-5 rounded-2xl border-2 border-gray-50 bg-gray-50/50 focus:border-royal-blue/30 outline-none transition-all font-bold text-midnight-blue" 
          />
        </div>

        <div v-if="error" class="p-4 bg-red-50 text-red-600 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-red-100 italic">
          {{ error }}
        </div>

        <button 
          type="submit" 
          :disabled="loading"
          class="w-full py-5 bg-royal-blue hover:bg-blue-700 text-white font-black rounded-2xl mt-4 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-3 active:scale-95 disabled:grayscale"
        >
          <span v-if="loading" class="animate-spin h-5 w-5 border-3 border-white border-t-transparent rounded-full"></span>
          <span class="text-[11px] uppercase tracking-[0.2em]">{{ loading ? 'Provisioning...' : 'Provision Scholar ID' }}</span>
        </button>
      </form>
      
      <p class="text-center text-[10px] font-black text-gray-400 mt-10 uppercase tracking-widest">
        Existing Node? <router-link to="/login" class="text-royal-blue hover:underline">Secure Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const name = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await axios.post('http://localhost:8080/api/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value
    })
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('user', JSON.stringify(res.data.user))
    router.push('/dashboard')
  } catch (err: any) {
    error.value = err.response?.data?.error || 'Registry Failed: Protocol Error'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>
