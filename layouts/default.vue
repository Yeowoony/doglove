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
        <li>
					<nuxt-link to="/how"
						><i class="fas fa-globe-americas"></i>&nbsp;운동 자세</nuxt-link
					>
				</li>
        <li>
					<nuxt-link to="/exerFirebase"
						><i class="fas fa-database"></i>&nbsp;운동 Firebase</nuxt-link
					>
				</li>
        <li>
					<nuxt-link to="/exerChart"
						><i class="fas fa-chart-bar"></i>&nbsp;운동 통계</nuxt-link
					>
				</li>
        <li>
					<nuxt-link to="/exerPhoto"
						><i class="fas fa-camera"></i>&nbsp;운동자극사진</nuxt-link
					>
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