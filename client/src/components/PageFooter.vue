<template>
    <div>

        <div id="navigation-links">

            <span class="nav-link">
                <router-link to="/">Home</router-link>
            </span>

            <span class="nav-link">
                <router-link to="/about">About this site</router-link>
            </span>

            <span class="nav-link">
                <router-link to="/designer">About this Designer</router-link>
            </span>

            <span class="nav-link">

                <router-link to="/visited">States you have visited</router-link>
            </span>
            
        </div>

        <p>Header image by 
            <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrislawton on Unsplash</a>
        </p>

        <p> <a target="_blank" href="undefined/icons/set/map">Map icon</a> icon by <a target="_blank" href="">Icons8</a></p>
        
    </div>
</template>

<script>

export default {
    name: 'PageFooter'
}
</script>
<!-- http://w3schools.com/cssref/css_units.asp for reference on Relative Lengths -->
<style scoped>
    .nav-link {
        margin: 1rem;                   
    }
</style>



