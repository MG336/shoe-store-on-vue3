<template>
    <div>
        <div class="colorPicker"
            @click="$emit('onChangeColor', $event.target.dataset.id)">
            <label class="colorPicker__box" for="colorPicker__radio" :src="item"
                v-for="(item, index) in makePickerImges()" :key="item.id">
                <input class="colorPicker__checkbox" type="radio"
                    name="colorPicker" :data-id="index" id="colorPicker__radio"
                    :checked="index === 0 ? true : false">
                <img class="colorPicker__img" :src="item" :alt="colorName">
            </label>
        </div>
    </div>
</template>
<script>
export default {
    name: "СolorPicker",
    emits: {
        onChangeColor: (event => {
            if (event) {
                return true
            } else {
                return []
            }
        })
    },
    data() {
        return {
            title: this.obj.title,
            priсe: this.colorVersion.priсe,
            colorName: this.colorVersion.title,
            colorPickerImg: 1,
            colorPickerId: 0,
            // colorName: this.colorVersion.
        }
    },
    props: {
        obj: Object,
        colorVersion: Object
    },
    methods: {
        makePickerImges() {
            let images = [];
            let imgSrc;
            for (let item in this.obj.colors) {
                imgSrc = this.obj.colors[item].img?.[0]()

                if (imgSrc) {
                    images.push(imgSrc)
                }
            }
            return images
        },
        getPickColorId(e) {
            console.log(1111)
            if (!e.target.matches('.pickerImges__img')) return
            this.colorPickerId = e.target.dataset.id
        }

    },
}

</script>

<style lang="scss">
.colorPicker {
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
    gap: 16px;
    position: relative;

    &__box {

        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__img {
        width: 100%;

        position: relative;
        z-index: 2;
        display: block;

    }

    &__checkbox {
        cursor: pointer;
        width: 100%;
        height: 100%;
        appearance: none;
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        display: block;

        &:checked {
            border-bottom: 5px solid $color-1;
        }
    }
}
</style>















