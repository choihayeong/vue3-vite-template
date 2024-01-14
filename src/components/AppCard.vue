<template>
    <div class="card">
        <div v-if="$slots.header" class="card-header">
            <slot name="header" header-message="헤더 메시지"></slot>
        </div>
        <div v-if="$slots.default" class="card-body">
            <slot :child-message="childMessage" hello-message="안뇽">#Body</slot>
        </div>
        <div v-if="hasFooter" class="card-footer text-body-secondary">
            <slot name="footer" footer-message="푸터 메시지"></slot>
        </div>
    </div>
</template>

<script>
import {ref, computed} from "vue";

export default {
    setup(props, {slots}) {
        const childMessage = ref("Child Message");

        // context.slots
        const hasFooter = computed(() => !!slots.footer);

        return {
            childMessage,
            hasFooter
        }
    }
}
</script>
