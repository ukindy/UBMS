<template>
	<div class="up-background">
		<div class="ui-bar bg-white solid-bottom">
			<div class="action">
				<span class='cuIcon-title text-blue'></span>深色背景
			</div>
		</div>
		<div class="grid col-3 padding-sm">
			<div class="padding-sm" v-for="(item,index) in colorList" :key="index">
				<div class="padding radius text-center shadow-blur" :class="'bg-' + item.name">
					<div class="text-lg">{{item.title}}</div>
					<div class="margin-top-sm text-Abc">{{item.name}}</div>
				</div>
			</div>
		</div>
		<div class="ui-bar bg-white solid-bottom">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>淡色背景
			</div>
		</div>
		<div class="grid col-3 bg-white padding-sm">
			<div class="padding-sm" v-for="(item,index) in colorList" :key="index" v-if="index<12">
				<div class="padding radius text-center light" :class="'bg-' + item.name">
					<div class="text-lg">{{item.title}}</div>
					<div class="margin-top-sm text-Abc">{{item.name}}</div>
				</div>
			</div>
		</div>
		<div class="ui-bar bg-white solid-bottom margin-top">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>渐变背景
			</div>
		</div>
		<div class="grid col-2 padding-sm bg-white">
			<div class="padding-sm">
				<div class="bg-gradual-red padding radius text-center shadow-blur">
					<div class="text-lg">魅红</div>
					<div class="margin-top-sm text-Abc">#f43f3b - #ec008c</div>
				</div>
			</div>
			<div class="padding-sm">
				<div class="bg-gradual-orange padding radius text-center shadow-blur">
					<div class="text-lg">鎏金</div>
					<div class="margin-top-sm text-Abc">#ff9700 - #ed1c24</div>
				</div>
			</div>
			<div class="padding-sm">
				<div class="bg-gradual-green padding radius text-center shadow-blur">
					<div class="text-lg">翠柳</div>
					<div class="margin-top-sm text-Abc">#39b54a - #8dc63f</div>
				</div>
			</div>
			<div class="padding-sm">
				<div class="bg-gradual-blue padding radius text-center shadow-blur">
					<div class="text-lg">靛青</div>
					<div class="margin-top-sm text-Abc">#0081ff - #1cbbb4</div>
				</div>
			</div>
			<div class="padding-sm">
				<div class="bg-gradual-purple padding radius text-center shadow-blur">
					<div class="text-lg">惑紫</div>
					<div class="margin-top-sm text-Abc">#9000ff - #5e00ff</div>
				</div>
			</div>
			<div class="padding-sm">
				<div class="bg-gradual-pink padding radius text-center shadow-blur">
					<div class="text-lg">霞彩</div>
					<div class="margin-top-sm text-Abc">#ec008c - #6739b6</div>
				</div>
			</div>
		</div>
		<div class="ui-bar bg-white margin-top">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>图片背景
			</div>
		</div>
		<div class="bg-img bg-mask flex align-center" style="background-image: url('../../../../static/img/uice.jpg');height: 200px;">
			<div class="padding-xl text-white">
				<div class="padding-xs text-xxl text-bold">
					钢铁之翼
				</div>
				<div class="padding-xs text-lg">
					Only the guilty need fear me.
				</div>
			</div>
		</div>


		<div class="ui-bar bg-white margin-top">
			<div class="action">
				<span class="cuIcon-title text-blue"></span>透明背景(文字层)
			</div>
		</div>
		<div class="grid col-2">
			<div class="bg-img padding-bottom-xl" style="background-image: url('../../../../static/img/uice.jpg');height: 200px;">
				<div class="bg-shadeTop padding padding-bottom-xl">
					上面开始
				</div>
			</div>
			<div class="bg-img padding-top-xl flex align-end" style="background-image: url('../../../../static/img/uice.jpg');height: 200px;">
				<div class="bg-shadeBottom padding padding-top-xl flex-sub">
					下面开始
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
	colorList:this.$store.state.dynamic.colorList
			};
		}
	}
</script>

<style>

</style>
