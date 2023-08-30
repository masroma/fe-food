<template>
  <div class="bg-white shadow-lg p-5 py-10">
    <p class="text-lg font-semibold">Dashboard</p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
      <div class="bg-white shadow-lg radius p-5 flex gap-2 items-center">
        <div class="bg-yellow-100 p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  class="w-8 h-8 text-yellow-900" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
          </svg>

        </div>
        <h2 class="text-lg">{{statistic.pending}} Pending</h2>
      </div>
      <div class="bg-white shadow-lg radius p-5 flex gap-2 items-center">
        <div class="bg-green-100 p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-green-900">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>


        </div>
        <h2 class="text-lg">{{statistic.success}} Success</h2>
      </div>
      <div class="bg-white shadow-lg radius p-5 flex gap-2 items-center">
        <div class="bg-blue-100 p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-blue-900">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>



        </div>
        <h2 class="text-lg">{{statistic.success}} Expired</h2>
      </div>
      <div class="bg-white shadow-lg radius p-5 flex gap-2 items-center">
        <div class="bg-red-100 p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-red-900">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </div>
        <h2 class="text-lg">{{statistic.success}} Failed</h2>
      </div>
    </div>

    <div class="mt-20 grid-cols-1 md:grid-cols-1">
      <client-only>
        <line-chart :data="chart.chartData"></line-chart>
    </client-only>
    </div>
  </div>
</template>


<script>
  export default {

    //layout
    layout: 'admin',

    //meta
    head() {
      return {
        title: 'Dashboard - Administrator',
      }
    },

    async asyncData({ $axios }) {

      //fetching dashboard
      const dashboard = await $axios.$get('/api/admin/dashboard')

      //statistic
      const statistic = {
        'pending': dashboard.data.count.pending,
        'success': dashboard.data.count.success,
        'expired': dashboard.data.count.expired,
        'failed': dashboard.data.count.failed,
      }

      //cart
      const chart = {
        chartData: {
          labels: dashboard.data.chart.month_name,
          datasets: [
            {
              label: `STATISTIK PENDAPATAN : ${new Date().getFullYear()}`,
              backgroundColor: '#bccad8',
              data: dashboard.data.chart.grand_total
            },
          ]
        }
      }

      return {
        statistic,
        chart
      }
    },

  }
</script>

<style>

</style>
