<template>
	<div class="container">
		<div v-for="(item,index) of playlist" :key="index">

		{{item.name}}
		</div>
	</div>
</template>
<style scoped>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.container{
		font-size: 0.16rem;
	}
</style>
<script>
import axios from 'axios'
export default {
	data(){
		return {
			playlist:[]
		}
	},
	method:{},
	created(){
		console.log(this.$route.query.id)
		let id = this.$route.query.id
		axios.get('api/playlist/detail?id='+id).then((res)=>{
			console.log(res.data.playlist.tracks)
			let data = res.data.playlist.tracks
			data.forEach((item)=>{
				this.playlist.push(item)
			})

		})
	},
	mounted(){},
}
</script>