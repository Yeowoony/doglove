<template>
    <div>
        <section class="hero is-primary">
          <div class="hero-body">
            <p class="title">
              운동(헬스)하는 사람을 위한 웹사이트
            </p>
            <p class="subtitle">
              <i class="fas fa-child"></i>단백질 얼마나 먹어야될까요?<i class="fas fa-child"></i>
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
              <th>몸무게</th>
              <th>1일 단백질 권장량</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="pos in tableweight.length">
              <tr :key="pos">
                <td>{{ pos }}</td>
                <td>{{ tableweight[pos - 1] }}</td>
                <td>{{ tableprotein[pos - 1] }}</td>
              </tr>
            </template>
</tbody>
</table>
<div class="content">
    <span>미국식품의약국(FDA) 권장기준 / 1kg당 1g</span>
</div>
</div>
<div class="column">
    <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>번호</th>
                <th>몸무게</th>
                <th>근력 운동시 단백질양</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="pos in tableweight.length">
              <tr :key="pos">
                <td>{{ pos }}</td>
                <td>{{ tableweight[pos - 1] }}</td>
                <td>{{ tableexercise_protein[pos - 1] }}</td>
              </tr>
            </template>
        </tbody>
    </table>
    <div class="content">
        <span>미국식품의약국(FDA) 권장기준 / 1kg당 1.2g ~ 1.5g</span>
    </div>
</div>
</section>
</div>
</template>

<script>
    import weight from "~/assets/weight.json";
    import protein from "~/assets/protein.json";
    import exercise_protein from "~/assets/exercise_protein.json";
    export default {
        data() {
            return {
                tableweight: weight.names,
                tableprotein: protein.names,
                tableexercise_protein: exercise_protein.names
            };
        }
    };
</script>