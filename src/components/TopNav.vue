<template>
    <div class="nav bg--p">
        <div class="container nav__con">
            <a class="nav__logo fw--700 fs--4 fc--s">MG</a>
            <!-- <ul class="nav__items">
                <li class="nav__item">
                    <a href="#" class="nav__link">item</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">item</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">item</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">item</a>
                </li>
            </ul> -->
            <a class="nav__iconLink" href="#">
                <svg width="1.6rem" viewBox="0 0 38 33"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M34.3116 2.25642C30.2445 -1.18347 24.1958 -0.564732 20.4626 3.25819L19.0005 4.75347L17.5385 3.25819C13.8128 -0.564732 7.75662 -1.18347 3.68951 2.25642C-0.971336 6.20456 -1.21625 13.2906 2.95476 17.5702L17.3158 32.2873C18.2435 33.2376 19.7501 33.2376 20.6779 32.2873L35.0389 17.5702C39.2173 13.2906 38.9724 6.20456 34.3116 2.25642V2.25642Z"
                        fill="#ffffff" />
                </svg>


                <samp class="nav__basketNum bg--s"
                    v-if="favorites">{{ favorites }}</samp>
            </a>
            <a class="nav__iconLink" href="#">
                <svg width="1.6rem" viewBox="0 0 29 26" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.4461 14.7913L28.7441 4.64603C28.91 3.91352 28.3551 3.21598 27.6064 3.21598H8.51284L8.06727 1.03036C7.95624 0.485587 7.47849 0.0943604 6.92428 0.0943604H1.94023C1.29589 0.0943604 0.77356 0.618451 0.77356 1.26497V2.04537C0.77356 2.69189 1.29589 3.21598 1.94023 3.21598H5.33732L8.75215 19.9671C7.93519 20.4386 7.38467 21.3225 7.38467 22.3359C7.38467 23.8444 8.60345 25.0673 10.1069 25.0673C11.6103 25.0673 12.8291 23.8444 12.8291 22.3359C12.8291 21.5714 12.5157 20.8807 12.0113 20.3849H22.2025C21.6981 20.8807 21.3847 21.5714 21.3847 22.3359C21.3847 23.8444 22.6035 25.0673 24.1069 25.0673C25.6103 25.0673 26.8291 23.8444 26.8291 22.3359C26.8291 21.2545 26.2026 20.3199 25.294 19.8774L25.5622 18.6933C25.7281 17.9608 25.1732 17.2633 24.4246 17.2633H11.3765L11.0583 15.7025H25.3084C25.8532 15.7025 26.3254 15.3243 26.4461 14.7913Z"
                        fill="white" />
                </svg>

                <samp class="nav__basketNum bg--s"
                    v-if="basketNum">{{ basketNum }}</samp>
            </a>

        </div>
    </div>
</template>
<script>
export default {

    props: {
        basketNum: Number,
        favorites: Number
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
.nav {
    z-index: 3;
    top: 0;
    position: sticky;

    &__con {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
    }

    &__logo {
        margin-right: auto;

    }

    &__items {

        display: flex;
        flex-direction: row;
    }

    &__link {
        margin-right: 16px;
        color: white;
    }

    &__iconLink {
        position: relative;
        margin-right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__basketNum {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: block;

        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -3px;
        left: 15px;
    }
}
</style>
            