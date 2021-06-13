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
		<div class="column"></div>
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
							<td>{{ tablevideo[pos - 1] }}</td>

							
						</tr>
					</template>
</tbody>
</table>
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