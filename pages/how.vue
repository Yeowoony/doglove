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
					<th>운동 자세</th>
				</thead>
				<tbody>
					<template V-for="pos in tableexercisehow.length">
						<tr :key="pos">
							<td>{{ pos }}</td>
							<td>{{ tableexercisehow [pos - 1] }}</td>
							
						</tr>
					</template>
</tbody>
</table>
<div class="column"></div>
</div>

</template>
<script>
    import axios from 'axios';

    export default {
        async asyncData() {
            const workouthow = await axios.get('https://raw.githubusercontent.com/Yeowoony/doglove/master/assets/weight.json');
            //alert(Object.keys(workouthow));
            return {
                tableexercisehow: Object.keys(workouthow.data.exercises.names)

            };

        },
    };
</script>