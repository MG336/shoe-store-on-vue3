
<template>
    <div>
        <div class="gallery-box">
            <div class="items" @click="showModal">

                <div class="items__item" v-html="item" :data-index="index"
                    v-for="(item, index) of srcArr" :key="item.id"></div>
            </div>
        </div>
        <div class="modal2" v-if="modal.show">
            <div class="modal2__items">
                <div class="modal2__item" v-html="item" :data-index="index"
                    v-for="(item, index) of srcArr" :key="item.id">
                </div>
            </div>
            <div class="modal2__close" @click="showModal" @mousedown.prevent>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </div>
            <div class="modal2__nav modal2__nav--left" @click="previousImg"
                @mousedown.prevent>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    fill="currentColor" class="bi bi-chevron-compact-left"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                </svg>
            </div>
            <div class="modal2__nav modal2__nav--right" @click="nextImg"
                @mousedown.prevent>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    fill="currentColor" class="bi bi-chevron-compact-right"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                </svg>
            </div>
            <div class="modal2__numbers">
                01
                <span class="modal2__numberLine"></span>
                {{ modal.imgIndex.toString().
                        split('').length == 1 ? '0' + (modal.imgIndex + 1) :
                        modal.imgIndex
                }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PhotoVideo',
    data() {
        return {
            srcArr: this.changeArrImgProps(),
            modalShow: false,

            modal: {
                show: false,
                imgIndex: 0,
                items: [],
            }

        }
    },
    components: {

    },
    props: {
        arrImgProps: Array
    },
    methods: {
        changeArrImgProps() {
            let arr = [...this.arrImgProps]

            arr = arr.map((item) => {
                item = item();
                if (item.search('.webp') != -1) {
                    item = `<img class="items__img" src="${item}" alt="photo">`
                } else if (item.search('.mp4') != -1) {
                    item = `<video class="items__img" 
                    src="${item}"
                    autoplay="autoplay"
                    loop="loop"
                    mute="mute"
                    alt="video">`


                } else {
                    item = null
                }

                return item
            })

            return arr
        },

        showModal(event) {
            if (event.target.matches('.items')) return
            this.modal.show = this.modal.show ? false : true;

            document.body.style.overflowY === 'hidden' ?
                document.body.style.overflowY = '' :
                document.body.style.overflowY = 'hidden'

            if (event.target.parentNode.matches('.items__item')) {
                this.modal.imgIndex = +event.target.parentNode.dataset.index;

                setTimeout(() => {
                    this.modal.items = document.querySelectorAll('.modal2__item');
                    this.modal.items[this.modal.imgIndex].scrollIntoView();
                    this.scrolCounter()
                })
            }
        },







        nextImg(e) {

            if (e.target.closest('.modal2__nav--right') &&
                this.modal.imgIndex + 1 < this.modal.items.length) {
                this.modal.items[++this.modal.imgIndex].scrollIntoView();
            }

        },

        previousImg(e) {
            if (e.target.closest('.modal2__nav--left') &&
                this.modal.imgIndex - 1 >= 0
            ) {
                this.modal.items[--this.modal.imgIndex].scrollIntoView();
            }
        },

        scrolCounter() {
            function onEntry(items) {
                items.forEach(change => {
                    if (change.isIntersecting) {
                        this.modal.imgIndex = +change.target.dataset.index
                    }
                });
            }

            let options = { threshold: [0.5] };
            let observer = new IntersectionObserver(onEntry.bind(this), options);
            let elements = document.querySelectorAll('.modal2__item');
            for (let elm of elements) {
                observer.observe(elm);
            }
        }
    },
}











</script>
<style lang="scss">
.image-gallery-section {
    overflow-x: scroll;
}

.items {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(10, 100%);

    &__item {
        cursor: pointer;
    }

    &__img {
        width: 100%;
    }

}

.gallery-box {
    overflow-x: scroll;
}

.modal2 {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;

    &__items {
        overflow-x: scroll;
        scroll-behavior: smooth;
        display: flex;
        height: 100%;
        width: 100%;
        left: 0;

    }

    &__item {
        display: flex;
        width: 100%;
        flex: 0 0 auto; //flex-grow, flex-shrink, flex-basis
        align-items: center;
        justify-content: center;

        img,
        video {
            display: block;
            align-content: center;
            height: auto;
            max-height: 100vh;
            max-width: 100%;

        }
    }

    &__close {
        width: 40px;
        height: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__nav {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &--left {
            left: 0.8rem;
        }

        &--right {
            right: 0.8rem;
        }
    }

    &__numbers {
        position: absolute;
        display: flex;
        width: 70px;
        bottom: 40px;
        left: 40px;
        justify-content: space-between;
        align-items: center;
    }

    &__numberLine {
        height: 1px;
        width: 20px;
        background-color: black;
    }



}

@media screen and (min-width: 992px) {
    .modal2 {
        &__item {

            img,
            video {
                display: block;
                align-content: center;
                height: 100%;
                max-height: 100vh;
                width: auto;
            }
        }
    }
}

@media screen and (min-width:720px) {
    .items {
        grid-template-columns: 1fr 1fr;

        &__item {
            &--large {
                grid-column: 1/3;
            }

        }

        [data-index="0"] {
            grid-column: 1/3;
        }

    }

    .gallery-box {
        overflow-x: hidden;
    }
}
</style>

            

