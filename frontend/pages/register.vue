<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
      <div class="text-center">
         <div class="mx-auto h-12 w-12 bg-gradient-to-br from-royal-blue to-emerald-teal rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4">
          S
        </div>
        <h2 class="mt-6 text-3xl font-extrabold text-midnight-blue">Create your account</h2>
        <p class="mt-2 text-sm text-gray-600">
          Or
          <NuxtLink to="/login" class="font-medium text-royal-blue hover:text-blue-500">
            sign in to existing account
          </NuxtLink>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-royal-blue focus:border-royal-blue focus:z-10 sm:text-sm" placeholder="John Doe">
          </div>
          <div class="mb-4">
            <label for="email-address" class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-royal-blue focus:border-royal-blue focus:z-10 sm:text-sm" placeholder="john@example.com">
          </div>
          <div class="mb-4">
             <label for="level" class="block text-sm font-medium text-gray-700 mb-1">Academic Level</label>
             <select id="level" name="level" required class="appearance-none relative block w-full px-3 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-royal-blue focus:border-royal-blue focus:z-10 sm:text-sm">
                <option value="" disabled selected>Select your level</option>
                <option value="secondary">Secondary School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="researcher">Researcher</option>
             </select>
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" autocomplete="new-password" required class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-royal-blue focus:border-royal-blue focus:z-10 sm:text-sm" placeholder="••••••••">
          </div>
        </div>

        <div>
           <button type="button" @click="$router.push('/dashboard')" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-royal-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-blue shadow-lg transition-transform hover:-translate-y-0.5">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-blue-300 group-hover:text-blue-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
              </svg>
            </span>
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>
