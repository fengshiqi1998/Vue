<template>
    <div>
        <component-a></component-a>  
    </div>
</template>
<script>
    // 在模块系统中局部注册
    import ComponentA from './ComponentA';
    export default {
        name: 'ComponentB',
        components: {
            ComponentA
        }
    }
</script>