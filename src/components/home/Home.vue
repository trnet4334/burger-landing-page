<template>
    <section>
        <div class="home__container">
<!--            TODO: Finish all the style-->
            <div class="home__content--main util__flex--row">
                <div>
                    <figure style="width: 30vw; height: 40vh; background-color: grey;">
                        <img src="" alt="pic1">
                    </figure>
                </div>
                <div style="width: 50%">
                    <span style="text-transform: uppercase; font-size: 4.25vw; width: 45vw; line-height: 1;">
                        <span>Share moments</span>
                        <span>,</span>
                        <span>share burger</span>
                    </span>
                    <div>
                        <div>
                            <font-awesome-icon icon="map-pin"/>
                            <span>address: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, id.</span>
                        </div>
                        <div>
                            <font-awesome-icon icon="clock"/>
                            <span>
                            hour: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facilis illo ipsa magnam necessitatibus perferendis quasi quos tenetur ut voluptatem?
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home__content--sub util__flex--row">
                <div>
                    <span/>
                    <span>EST 2020</span>
                    <span/>
                </div>
                <figure style="background-color: grey; width: 40vw; height: 50vh;">
                    <img src="" alt="pic2">
                </figure>
            </div>
        </div>
    </section>
</template>
<script></script>
<style lang="scss" scoped>
    .home__container {
        padding: 0 6.75vw;
    }
    .home__content--main {
        position: relative;
    }
    .util__flex--row {
        display: flex;
        flex-wrap: nowrap;
    }
</style>
