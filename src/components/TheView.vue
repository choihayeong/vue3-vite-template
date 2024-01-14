<template>
    <main>
        <div class="container py-4">
            <MyButton class="any-class" @click="sayHello" />
            <LabeInput label="이름" data-id="id입니다" />
        </div>
    </main>
</template>

<script setup>
import MyButton from "./MyButton.vue";
import LabeInput from "./LabelInput.vue";

const sayHello = () => {
    alert("안녕하세요.");
}
</script>

<style lang="scss" scoped>

</style>