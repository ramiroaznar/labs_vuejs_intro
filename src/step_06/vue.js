const loadVue = function () {
    console.log('Loading vue instance...');

    // Ignore airship tags
    Vue.config.ignoredElements = [/as-\w+/];

    const formatter = new Intl.NumberFormat('en-EN', {
        maximumFractionDigits: 2
    });
    

    // Vue instance
    const app = new Vue({
        el: '#app',
        data: {
            step: 6,
            longitude: 0,
            latitude: 0,
            zoomLevel: 10,
            totalCount: null,
            totalPop: null,
            map: null
        },
        computed:{
            avgPop: function(){
                if (this.totalCount){
                    return this.totalPop / this.totalCount;
                } else {
                    return null;
                }
            },
            noCities: function(){
                return this.totalCount == 0;
            }
        },
        methods: {
            formatNumber: function(value){
                return formatter.format(value);
            }
        }
    });

    console.log('Vue instance loaded!');
    return app;
};