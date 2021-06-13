<template>
	<div>
		<section class="hero is-primary">
			<div class="hero-body">
				<p class="title"><i class="fas fa-dumbbell"></i> 운동 자세</p>
				<p class="subtile">
					운동을 어떻게 할까요?
				</p>
			</div>
		</section>
		<hr />
		<section class="columns"></section>
		<div class="column">
		<table class="table">
			<thead>
				<th>번호</th>
				<th>운동 이름</th>
				<th>운동 자세</th>

			</thead>
			<tbody>
				<template v-for="pos in tableexercisekey.length">
					<tr :key="pos">
						<td>{{ pos }}</td>
						<td>{{ tableexercise[pos - 1] }}</td>
						<td><a :href="tablevideo[pos-1]">{{tablevideo[pos-1]}}</a></td>


					</tr>
				</template>
			</tbody>
		</table>
		<div class="content">
			<p class="tag is-primary">출처</p>
			<a href="https://github.com/Yeowoony/doglove/blob/master/workout.json">My Git</a><br />
		</div>
	</div>
	<div class="column"></div>
	</div>

</template>
<script>
	import axios from 'axios';

	export default {
		async asyncData() {
			const workouthow = await axios.get('https://raw.githubusercontent.com/Yeowoony/doglove/master/workout.json');
			//alert(Object.keys(workouthow));
			console.log(Object.keys(workouthow.data.exercise));

			return {
				tableexercise: workouthow.data.exercise,
				tableexercisekey: Object.keys(workouthow.data.exercise),
				tablevideo: workouthow.data.video

			};

		},
	};
</script>