<template>
	<div id="app">
		<!-- 可以放自己的路由,也可以放子应用 -->
		<el-menu :router="true" mode="horizontal">
			<el-menu-item index="/"></el-menu-item>
			<el-menu-item index="/vue"></el-menu-item>
			<el-menu-item index="/react"></el-menu-item>
		</el-menu>
		<div></div>
		<router-view></router-view>
		<div id="vue"></div>
		<div id="react"></div>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
