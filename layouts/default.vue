<template>
  <div>
    <nav class="breadcrumb">
      <ul>
        <li>
          <nuxt-link to="/"><i class="fas fa-home"></i> 홈으로</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/protein"><i class="fas fa-search"></i>&nbsp;단백질 섭취량</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <i class="fas fa-copyright"></i> 2020-2021, 모든 저작권은 <strong>윤여운</strong>에 있습니다. 
      </div>
    </footer>
  </div>
</template>