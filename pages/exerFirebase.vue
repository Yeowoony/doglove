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
                <div class="field">
					<label class="checkbox">
						<input type="checkbox" v-model="mouSort" @change="sortmouNames" />
						무산소 운동을
						<strong>정렬하기</strong>
					</label>
				</div>
				<table class="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>번호</th>
							<th>무산소 운동</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="pos in mouNamesSort.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ mouNamesSort[pos - 1] }}</td>
							</tr>
						</template>
</tbody>
</table>
<section class="box">
    <form @submit.prevent="submitmouName">
        <div class="field">
            <label class="label">새로운 무산소 운동</label>
            <div class="control">
                <input type="text" v-model="newmouName" />
                <button class="button is-link" type="submit">추천하기</button>
            </div>
            <p class="help is-success">
                무산소 운동 Firebase에 소개할 운동을 입력하세요.
            </p>
        </div>
    </form>
</section>
</div>
<div class="column">
    <div class="field">
        <label class="checkbox">
            <input type="checkbox" v-model="youSort" @change="sortyouNames" />
            유산소 운동을
            <strong>정렬하기</strong>
        </label>
    </div>
    <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>번호</th>
                <th>유산소 운동</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="pos in youNamesSort.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ youNamesSort[pos - 1] }}</td>
							</tr>
						</template>
        </tbody>
    </table>
    <section class="box">
        <form @submit.prevent="submityouName">
            <div class="field">
                <label class="label">새로운 유산소 운동</label>
                <div class="control">
                    <input type="text" v-model="newyouName" />
                    <button class="button is-link" type="submit">추천하기</button>
                </div>
                <p class="help is-success">
                    유산소 Firebase에 소개할 운동을 입력하세요.
                </p>
            </div>
        </form>
    </section>
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
                mouNamesSort: [],
                mouSort: false,
                newmouName: '',
                youNames: [],
                youNamesSort: [],
                youSort: false,
                newyouName: '',
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
                            if (refName === 'you') {
                                this.youNames = snapshot.val();
                                this.sortyouNames();
                            } else if (refName === 'mou') {
                                this.mouNames = snapshot.val();
                                this.sortmouNames();
                            }
                        }
                    });
            },
            onFbDbNames(refName) {
                fbDb
                    .ref(refName)
                    .child('names')
                    .on('value', (snapshot) => {
                        if (snapshot.exists()) {
                            if (refName === 'you') {
                                this.youNames = snapshot.val();
                                this.sortyouNames();
                            } else if (refName === 'mou') {
                                this.mouNames = snapshot.val();
                                this.sortmouNames();
                            }
                        }
                    });
            },
            sortmouNames() {
                this.mouNamesSort = this.mouNames.slice(); // copy
                if (this.mouSort) this.mouNamesSort.sort();
            },
            sortyouNames() {
                this.youNamesSort = this.youNames.slice(); // copy
                if (this.youSort) this.youNamesSort.sort();
            },
            submitmouName() {
                let newmouNames = this.mouNames.slice(); // copy
                newmouNames.push(this.newmouName);
                fbDb
                    .ref('mou')
                    .child('names')
                    .set(newmouNames); // overwrite
                fbDb
                    .ref('mou')
                    .child('size')
                    .set(newmouNames.length);
            },
            submityouName() {
                let newyouNames = this.youNames.slice(); // copy
                newyouNames.push(this.newyouName);
                fbDb
                    .ref('you')
                    .child('names')
                    .set(newyouNames); // overwrite
                fbDb
                    .ref('you')
                    .child('size')
                    .set(newyouNames.length);
            },
        },
    };
</script>