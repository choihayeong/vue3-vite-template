<template>
    <div id="wrap" class="wrap">
        <TheHeader></TheHeader>	
		<!--<transition name="fade-transform">-->
			<router-view :key="key"></router-view>
		<!--</transition>-->
        <TheFooter></TheFooter>
    </div>
</template>

<script>
    import { TheHeader, TheFooter } from '../components/';

    export default {
        name: 'DefaultLayout',
        components: {
            TheHeader,
            TheFooter
        },
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>