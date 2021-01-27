<template>
  <div class="up-Text">
    <div class="ui-bar bg-white solid-bottom">
    		<div class="action">
    			<span class="uiIcon-title text-blue"></span>文字大小
    		</div>
    	</div>
    	<div class="bg-white padding-lr">
    		<div class="solids-bottom padding-xs flex align-center">
    			<div class="padding">text-xsl</div>
    			<div class="flex-sub text-center">
    				<div class="solid-bottom text-xsl padding">
    					text-xsl
    				</div>
    			</div>
    		</div>
    		<div class="solids-bottom padding-xs flex align-center">
    			<div class="padding">text-sl</div>
    			<div class="flex-sub text-center">
    				<div class="solid-bottom text-sl padding">
    					text-sl
    				</div>
    			</div>
    		</div>
    		<div class="solids-bottom padding-xs flex align-center">
    			<div class="padding">text-xxl</div>
    			<div class="flex-sub text-center">
    				<div class="solid-bottom text-xxl padding">
    					text-xxl
    				</div>
    			</div>
    		</div>
    		<div class="solids-bottom padding-xs flex align-center">
    			<div class="padding">text-xl</div>
    			<div class="flex-sub text-center">
    				<div class="solid-bottom text-xl padding">
    					text-xl
    				</div>
    			</div>
    		</div>
    		<div class="solids-bottom padding-xs flex align-center">
    			<div class="padding">text-lg</div>
    			<div class="flex-sub text-center">
    				<div class="solid-bottom text-lg padding">
    					text-lg
    				</div>
    			</div>
    		</div>
    		<div class="solids-bottom padding-xs flex align-center">
    			<div class="padding">text-df</div>
    			<div class="flex-sub text-center">
    				<div class="solid-bottom text-df padding">text-df</div>
    			</div>
    		</div>
    		<div class="solids-bottom padding-xs flex align-center">
    			<div class="padding">text-sm</div>
    			<div class="flex-sub text-center">
    				<div class="solid-bottom text-sm padding">
    					text-sm
    				</div>
    			</div>
    		</div>
    		<div class="padding-xs flex align-center">
    			<div class="padding">text-xs</div>
    			<div class="flex-sub text-center">
    				<div class="solid-bottom text-xs padding">
    					text-xs
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="ui-bar bg-white solid-bottom margin-top">
    		<div class="action">
    			<span class="uiIcon-title text-blue"></span>文字颜色
    		</div>
    	</div>
    	<div class="grid col-5 padding-sm bg-white">
    		<div class="padding-sm" v-for="(item,index) in colorList" :key="index">
    			<div class="text-center" :class="'text-' + item.name">
    				{{item.title}}
    			</div>
    		</div>
    	</div>
    	<div class="ui-bar bg-white solid-bottom margin-top">
    		<div class="action">
    			<span class="uiIcon-title text-blue"></span>文字阴影
    		</div>
    	</div>
    	<div class="grid col-5 padding-sm  bg-white">
    		<div class="padding-sm" v-for="(item,index) in colorList" :key="index">
    			<div class="text-center text-shadow" :class="'text-' + item.name">
    				<div class="uiIcon-ellipse text-xxl"></div>
    			</div>
    		</div>
    	</div>
    	<div class="ui-bar bg-white solid-bottom margin-top">
    		<div class="action">
    			<span class="uiIcon-title text-blue"></span>文字截断
    		</div>
    	</div>
    	<div class="padding bg-white">
    		<div class="text-cut padding bg-blue light" style="width:220px">文字截断文字截断文字截断文字截断文字截断文字截断</div>
    	</div>
    	<div class="ui-bar bg-white solid-bottom margin-top">
    		<div class="action">
    			<span class="uiIcon-title text-blue"></span>文字对齐
    		</div>
    	</div>
    	<div class="padding bg-white">
    		<div class="text-left padding">text-left</div>
    		<div class="text-center padding">text-center</div>
    		<div class="text-right padding">text-right</div>
    	</div>
    	<div class="ui-bar bg-white solid-bottom margin-top">
    		<div class="action">
    			<span class="uiIcon-title text-blue"></span>特殊文字
    		</div>
    	</div>
    	<div class="padding text-center bg-white">
    		<div class="padding-lr">
    			<div class="solid-bottom padding">
    				<span class="text-price">80.00</span>
    			</div>
    			<div class="padding">价格文本，利用伪元素添加"¥"符号</div>
    		</div>
    		<div class="padding-lr bg-white margin-top">
    			<div class="solid-bottom padding">
    				<span class="text-Abc">ubms</span>
    			</div>
    			<div class="padding">英文单词首字母大写</div>
    		</div>
    		<div class="padding-lr bg-white margin-top">
    			<div class="solid-bottom padding">
    				<span class="text-ABC">ubms</span>
    			</div>
    			<div class="padding">全部字母大写</div>
    		</div>
    		<div class="padding-lr bg-white margin-top">
    			<div class="solid-bottom padding">
    				<span class="text-abc">ubms</span>
    			</div>
    			<div class="padding">全部字母小写</div>
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
