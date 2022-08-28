<template>
    <section class="size mt--4">
        <h2 class="size__text mb--2">
            Size: <span class="fw--400 fs--5">{{ selectSize ? selectSize : '' }}</span>
        </h2>
        <div class="size-box" @click="
    selectSize = $event.target.value,
    sizeTextColor($event),
    $event.target.tagName === 'INPUT'
        ? $emit('sizeValue', $event.target.value)
        : ''" @mousedown.prevent>
            <label class="size-box__item" v-for="value in changeOrderSize"
                :key="value.id">
                <div class="size-box__border"></div>
                <span class="size-box__num">{{ value[0] }}</span>

                <input class="size-box__input" type="radio" name="size"
                    :disabled="!value[1]" :value="value[0]">
            </label>
        </div>
    </section>

</template>
<script>
export default {
    name: "SizeGrid",
    props: {
        size: Object,
    },
    emits: {
        sizeValue() {
            return true
        },
    },
    data() {
        return {
            sizeTest: this.size,
            selectSize: false,

        }
    },
    computed: {
        changeOrderSize() {
            let arr = Object.entries(this.size)
                .sort((a, b) => a[0] - b[0])
            return arr
        }

    },
    methods: {
        sizeTextColor(e) {
            let checked = document.querySelector('.size-box__num--checked');
            if (e.target.tagName === 'INPUT') {
                if (checked) {
                    checked.classList.remove('size-box__num--checked')
                }
                e.target.previousSibling.classList.add('size-box__num--checked')
            }
        }

    },
    watch: {
        selectSize() {
            // this.selectSize = false
        }
    },
    created() {
        this.selectSize = false
    }
}

</script>
<style lang="scss">
.size{
    &__text{

    }
}
.size-box {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
    grid-template-rows: repeat(auto-fill, 1fr);

    &__input {
        cursor: pointer;
        appearance: none;
        width: 100%;
        height: 100%;
        position: relative;
        color: black;

        &:checked {
            color: white;
            background-color: $color-1;
            border-radius: inherit;
        }

        &:disabled {
            border-radius: inherit;
            background-color: rgb(207, 207, 207);
        }
    }

    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        flex: 0 0 auto;
        min-width: 3rem;
        min-height: 3rem;
        border-radius: 8px;

        outline: none;
        box-shadow: none;
        position: relative;
    }
    &__border {
        border: 2px solid $color-1;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        cursor: pointer

    }
    &__num {
        cursor: pointer;
        position: absolute;
        z-index: 1;
        border-radius: inherit;
        &--checked {
            color: white;
        }
    }

}
</style>
