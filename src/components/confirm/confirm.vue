<template>
	<!-- <v-dialog
		v-model="show"
		max-width="290"
	>
		<v-card>
			<v-card-title class="headline">
				Use Google's location service?
			</v-card-title>

			<v-card-text>
				Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn
					color="green darken-1"
					text
					@click="show = false"
				>
					Disagree
				</v-btn>

				<v-btn
					color="green darken-1"
					text
					@click="show = false"
				>
					Agree
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog> -->
	<div class="cmp-confirm" v-if="show">
		<div class="overlay"></div>
		<v-card class="wrap">
			<v-card-title>{{options.title}}</v-card-title>
			<v-card-text>
				{{options.content}}
			</v-card-text>
			<v-card-actions>
				<v-btn @click.native="ok">{{options.confirmButtonText || '确定'}}</v-btn>
				<v-btn @click="cancel">{{options.cancelButtonText}}</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				promiseStatus: null,
				show: false,
				options: {}
			}
		},
		methods: {
			confirm(options) {
				this.options = options || {}
				this.show = true
				return new Promise((resolve, reject) => {
					this.promiseStatus = {resolve, reject}
				})
			},
			ok(){
				this.show = false
				this.promiseStatus && this.promiseStatus.resolve()
			},
			cancel(){
				this.show = false
				this.promiseStatus && this.promiseStatus.reject()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.cmp-confirm{
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0px;
		// pointer-events: none;
		position: fixed;
		top: 0px;
		width: 100%;
		z-index: 6;
		transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) 0s, z-index 1ms ease 0s;
		outline: none;

		.wrap {
			min-width: 300px;
		}
		// .v-card::v-deep {
		// 	max-width: initial;
		// }
	}
	// .dialog{
	// 	overflow-y: auto;
	// 	pointer-events: auto;
	// 	width: 100%;
	// 	z-index: inherit;
	// 	box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
	// 	border-radius: 4px;
	// 	margin: 24px;
	// 	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
	// 	max-width:290px;
	// }
	.overlay{
		align-items: center;
		border-radius: inherit;
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: auto;
		background:#000;
		opacity:0.46;
	}
</style>