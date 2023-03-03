<template>
  <main>
    <div class="container py-4">
      <div class="row g-3">
        <div v-for="(item, index) in projectList" :key="index" class="col col-4">
          <div class="card">
            <img src="https://dummyimage.com/600x400/d9e3ff/555358" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.contents }}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup () {
    const projectList = reactive([
      {
        title: '원익 큐엔씨',
        typeName: '기업 사이트',
        contents: '반응형 기업 사이트 구축',
      },
      {
        title: 'YH MALL',
        typeName: '쇼핑몰',
        contents: '유한양행 자사몰 반응형 쇼핑몰 구축 (고도몰 솔루션 이용)',
      },
      {
        title: '리만코리아',
        typeName: '기업 사이트',
        contents: '반응형 기업 사이트 구축',
      },
      {
        title: '에스크 컴퍼니',
        typeName: '기업 사이트',
        contents: '반응형 기업 사이트 구축',
      },
      {
        title: '폴메이드',
        typeName: '쇼핑몰',
        contents: '반응형 쇼핑몰 구축 (고도몰 솔루션 이용)',
      },
    ])

    return {
      projectList
    }
  }
}
</script>

<style lang="scss" scoped>

</style>