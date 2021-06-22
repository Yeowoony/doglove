<template>
	<div>
		<section class="hero is-success">
			<div class="hero-body">
				<p class="title">
					<i class="fas fa-dumbbell"></i> 운동을 하는 이유
					<i class="fas fa-dumbbell"></i> 
				</p>
				<p class="subtile">
					우리나라 사람들의 비만율의 심각성과 운동목적 알아보기
				</p>
			</div>
		</section>
		<hr />
		<section class="columns">
			<div class="column">
				<article class="message">
					<div class="message-header">
						성인 비만율 현황
					</div>
					<div class="message-body">
						<div
							id="lineChart"
							:style="`width:100%;height:${chartHeight}px`"
						></div>
						<div class="content">
							<p class="tag is-danger">출처</p>
							<a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=fitnea&logNo=220602200194">
								헬스나라(블로그)</a
							>
						</div>
					</div>
				</article>
			</div>
			<div class="column">
				<article class="message">
					<div class="message-header">
						운동 목적
					</div>
					<div class="message-body">
						<div id="pieChart" style="width:100%;height:400px"></div>
						<div class="content">
							<p class="tag is-danger">출처</p>
							<a href="https://www.mk.co.kr/news/society/view/2019/03/142874/">
								매일경제</a
							>
						</div>
					</div>
				</article>
			</div>
		</section>
	</div>
</template>
<script>
    import toastuiChart from '~/plugins/toastuiChart';
    let showChart = false;
    const dogCaringMoney = {
        categories: [
            '1998년',
            '2005년',
            '2007년',
            '2009년',
            '2010년',
        ], // y-axis
        series: [
            // x-axis
            {
                name: '평균(%)',
                data: [25.7, 31.0, 31.3, 30.9, 30.6],
            }, {
                name: '남자(%)',
                data: [25.1, 34.7, 36.2, 35.8, 36.3],
            }, {
                name: '여자(%)',
                data: [26.2, 27.3, 26.3, 26.0, 24.8],
            },
        ],
    };
    const dogStartYear = {
        categories: ['사례 수'],
        series: [{
            name: '체중조절, 다이어트를 위해서',
            data: 40.6,
        }, {
            name: '근육량 증대를 위해서',
            data: 12.5,
        }, {
            name: '체형, 바디라인 교정을 위해서',
            data: 15.1,
        }, {
            name: '재활 및 치유를 위해서',
            data: 4.2,
        }, {
            name: '사람들과 교류를 위해서',
            data: 2.9,
        }, ],
    };
    export default {
        data() {
            return {
                chartHeight: 400
            };
        },
        mounted() {
            if (!showChart && process.client) {
                if (!toastuiChart('bar', 'lineChart', dogCaringMoney)) return;
                if (!toastuiChart('pie', 'pieChart', dogStartYear)) return;
                showChart = true;
            }
        },
        destroyed() {
            showChart = false;
        },
    };
</script>