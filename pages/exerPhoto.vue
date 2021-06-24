<template>
	<div>
		<section class="hero is-success">
			<div class="hero-body">
				<p class="title"><i class="fas fa-camera"></i> 운동 자극 사진 <i class="fas fa-camera"></i></p>
				<p class="subtile">
					몸 만들어야죠??
				</p>
			</div>
		</section>
        <hr>
        <div class="columns">

          <template v-for="pos in tablemenphotokey.length">
            <tr :key="pos">
              <td><img :src="tablemenphoto[pos-1]"></td>
            </tr>
          </template>

</div>

<div class="columns">
    <template v-for="pos in tablegirlphotokey.length">
    <tr :key="pos">
      <td><img :src="tablegirlphoto[pos-1]"></td>
    </tr>
  </template>
</div>


</div>
</template>

<script>
    import axios from 'axios';

    export default {
        async asyncData() {
            const workouthow = await axios.get('https://raw.githubusercontent.com/Yeowoony/doglove/master/photo.json');
            console.log(Object.keys(workouthow.data.menphoto));

            return {
                tablemenphoto: workouthow.data.menphoto,
                tablemenphotokey: Object.keys(workouthow.data.menphoto),
                tablegirlphoto: workouthow.data.girlphoto,
                tablegirlphotokey: Object.keys(workouthow.data.girlphoto)

            };

        },
    };
</script>