require.config({
    paths:{
        index:'index',
        scale:'scale',
        drag:'drag'
    }
});


require(['index'],function(index){
    index.init();
})