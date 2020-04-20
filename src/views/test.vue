<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartData="chartdata"
      :options="options"/>
  </div>
</template>

<script>
  import LineChart from '../components/linechart.vue'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        loaded: false,
        chartdata:null,
        options:null
      }
    },
    mounted () {
      
      setInterval(() => {
          
          this.fillData()
          this.loaded=true
      }, 5000);
      
    },
    methods: {
      fillData () {
        this.chartdata = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>