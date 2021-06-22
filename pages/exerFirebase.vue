<template>
	<div>
		<section class="hero is-light">
			<div class="hero-body">
                <p class="title"><i class="fas fa-dumbbell"></i> 운동 종류</p>
				<p class="subtile">
					무산소운동과 유산소 운동은 어떤것이 있을까요?
				</p>
			</div>
		</section>
		<hr />
        <section class="columns">
			<div class="column">
				<table class="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>번호</th>
							<th>무산소 운동</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="pos in mouNames.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ mouNames[pos - 1] }}</td>
							</tr>
						</template>
</tbody>
</table>
</div>
<div class="column">
    <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>번호</th>
                <th>유산소 운동</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="pos in youNames.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ youNames[pos - 1] }}</td>
							</tr>
						</template>
        </tbody>
    </table>
</div>
</section>
</div>
</template>
<script>
    import fbDb from '~/plugins/firebaseDb';
    export default {
        data() {
            return {
                mouNames: [],
                youNames: []
            };
        },
        mounted() {
            this.onFbDbNames('you');
            this.onFbDbNames('mou');
        },
        methods: {
            getFbDbNames(refName) {
                fbDb
                    .ref(refName)
                    .child('names')
                    .get()
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            if (refName === 'you') this.youNames = snapshot.val();
                            else if (refName === 'mou') this.mouNames = snapshot.val();
                        }
                    });
            },
            onFbDbNames(refName) {
                fbDb
                    .ref(refName)
                    .child('names')
                    .on('value', (snapshot) => {
                        if (snapshot.exists()) {
                            if (refName === 'you') this.youNames = snapshot.val();
                            else if (refName === 'mou') this.mouNames = snapshot.val();
                        }
                    });
            },
        },
    };
</script>