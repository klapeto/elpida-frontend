<template>
  <div class="container">
    <line-chart :styles="myStyles" :width="300" :height="300"
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
      return {myStyles: {
        height: '100%',
        width: '100%',
        position: 'relative',
      },
        loaded: false,
        chartdata:null, 
        options:null
      }
    },
    mounted () {
      
      setInterval(() => {
          
          this.fillData()
          this.loaded=true
      }, 1000);
      
    },
    methods: {
      fillData () {
        this.chartdata = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',fill:false,
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data Two',
              backgroundColor: '#c5a4e3',fill:false,
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data Three',
              backgroundColor: '#1a3b43',fill:false,
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