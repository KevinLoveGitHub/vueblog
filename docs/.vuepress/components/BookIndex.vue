<template>
<div>
    <!-- <input type="button" value="show the post" @click="toggle"> -->
    <!-- <input type="button" value="toggle" @click="flag=!flag"> -->
    <transition-group appear enter-active-class="fadeInUp">
        <div v-for="post in posts" :key=post.title v-show=true class="animated">
            <!-- <p :class="['thin', 'color']"> {{ timestampToTime(post.lastUpdated) }} -->
            <h2>
                <router-link :to="post.path"> {{ post.title }} : {{ post.frontmatter.description }}</router-link>
            </h2>
            <div v-html="post.excerpt"></div>
            <p style="color: #C0C0C0; font-size:14px; text-align:right;">{{ post.lastUpdated }}</p>
        </div>
    </transition-group>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            flag: false
        }
    },
    methods: {
        timestampToTime(timestamp) {
            var date = new Date(timestamp);
            var dt = date.toDateString();
            return dt;
        }
    },
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/books/") && !x.frontmatter.blog_index)
                .sort((a, b) => b.lastUpdated - a.lastUpdated);
        }
    },
    filters: {
        dateFormat: function (dateStr) {
            var dt = new Date(dateStr)
            var y = dt.getFullYear()
            var m = (dt.getMonth() + 1).toString().padStart(2, '0')
            var d = dt.getDate().toString().padStart(2, '0')
            var hh = dt.getHours().toString().padStart(2, '0')
            var mm = dt.getMinutes().toString().padStart(2, '0')
            var ss = dt.getSeconds().toString().padStart(2, '0')
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
        }
    }
};
</script>

<style>
.thin {
    font-weight: 300;
}

.size {
    font-size: 0.83em;
}

.color {
    color: black;
    /* color: dodgerblue; */
}

.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translateX(50px);
}

.v-enter-active,
.v-leave-active {
    transition: all 0.6s ease;
}

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
