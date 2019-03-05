<template>
  <div id="app">
    <div id="nav">
      <img class="headerLogo" src="./assets/penguin_logo.jpeg" alt="Penguin Logo">
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin Area</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	width:80%;
	margin-left:auto;
	margin-right: auto;
}

.headerLogo {
  width: 40px;
  height: 60px;
  justify: left;
}
#nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 20px;


  background-color: #FFA00B;
}


#nav a:hover {
background-color: #5888C1;
}

#nav a.router-link-exact-active {
  color: #155CAF;
}

button, .button {
padding: 5px 10px;
font-size: 18px;
text-align: center;
cursor: pointer;
outline: none;
color: #fff;
background-color: #0820d4;
border: none;
border-radius: 15px;
box-shadow: 0 9px 5px #999;
margin-left: 10px;
text-decoration: none;
transition: box-shadow 400ms ease, background-color 600ms ease;
}

button:hover, .button:hover {
  background-color: #ff0000;
  box-shadow: 0 0 0 #fff;
}

button:active, .button:active {
background-color: #3e8e41;
box-shadow: 0 5px 5px #666;
transform: translateY(4px);
}

#nav a  {
 float: left;
 padding: 16px;
 color: white;
 text-decoration: none;
 font-size: 17px;
 font-weight: bold;
 margin-bottom: 0px;
 overflow: auto;
 background-color: #FFA00B;
 margin-left: 20px;
}

.active {
 background-color: #FFA00B;
}

@media screen and (max-width: 500px) {
#nav a {
   float: none;
   display: block;
 }
}
</style>
