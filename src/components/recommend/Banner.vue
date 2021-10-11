<template>
  <div class="banner">
    <div class="banner-display">
      <div>
        <div class="banner-images">
          <img
            :src="value.imageUrl"
            v-for="(value, index) in banners"
            :key="index"
            :class="elementIsActive(currentBannerIndex, index)"
          />
        </div>
        <div class="download">
          <img src="../../assets/recommend/download.png" />
        </div>
      </div>
    </div>

    <div class="banner-background">
      <img
        :src="value.imageUrl"
        v-for="(value, index) in banners"
        :key="index"
        :class="elementIsActive(currentBannerIndex, index)"
      />
    </div>

    <div class="banner-index-point">
      <span
        v-for="(value, index) in banners"
        :key="index"
        :class="elementIsActive(currentBannerIndex, index)"
        @click="pointChange(index)"
      >
      </span>
    </div>

    <div class="banner-arrow">
      <div class="banner-arrow-left" @click="changeImageIndex(-1)">
        <img src="../../assets/recommend/left.png" />
      </div>
      <div class="banner-arrow-right" @click="changeImageIndex(1)">
        <img src="../../assets/recommend/right.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { banner } from "@/api/recommend.js";
import { elementIsActive } from "@/utils/elementIsActive.js";
export default {
  name: "Banner",
  data() {
    return {
      currentBannerIndex: 0,
      auto: true,
      autoInterval: null,
      banners: {},
    };
  },
  created() {
    this.getBanners();
  },
  methods: {
    getBanners() {
      banner().then((response) => {
        console.log(response.data);
        this.banners = response.data.banners;
        this.bannerImageChange();
      });
    },
    elementIsActive(current, self) {
      return elementIsActive(current, self);
    },
    changeImageIndex(count) {
      this.currentBannerIndex += count;
      if (this.currentBannerIndex < 0) {
        this.currentBannerIndex = 8;
      }
      if (this.currentBannerIndex > 8) {
        this.currentBannerIndex = 0;
      }
      this.bannerImageChange();
    },
    pointChange(index) {
      this.currentBannerIndex = index;
      this.bannerImageChange();
    },
    bannerImageChange() {
      if (this.autoInterval) {
        clearInterval(this.autoInterval);
      }
      this.autoInterval = setInterval(() => {
        if (this.currentBannerIndex == 8) {
          this.currentBannerIndex = 0;
        } else {
          this.currentBannerIndex++;
        }
      }, 5000);
    },
  },
};
</script>

<style lang='scss' scoped>
.banner {
  position: relative;
  height: 283px;
  width: 100vw;
  overflow: hidden;
}

.banner-display {
  $banner-image-width: 730px;
  display: flex;
  justify-content: center;

  .banner-images {
    img {
      height: 283px;
      width: $banner-image-width;
      transition: 0.3s;
      opacity: 0;
      position: absolute;

      &.active {
        opacity: 1;
      }
    }
  }

  .download {
    img {
      height: 283px;
      width: 250px;
      opacity: 1;
      margin-left: $banner-image-width;
      box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.32);

      &:hover {
        cursor: pointer;
      }
    }
  }
}

.banner-background {
  img {
    position: absolute;
    filter: blur(100px);
    height: 283px;
    width: 150vw;
    left: -1000px;
    top: -50px;
    z-index: -2;
    &.active {
      z-index: -1;
    }
  }
}

.banner-index-point {
  height: 20px;
  width: 220px;
  position: absolute;
  top: 94%;
  z-index: 99;
  left: 41%;
  display: flex;
  justify-content: center;

  span {
    height: 6px;
    width: 6px;
    background-color: #fff;
    border-radius: 3px;
    margin-right: 15px;
    float: left;
    transition: 0.3s;
    cursor: pointer;

    &.active {
      background-color: #c20c0c;
    }

    &:hover {
      background-color: #c20c0c;
    }
  }
}

.banner-arrow {
  @mixin arrow($left) {
    height: 63px;
    width: 37px;
    position: relative;
    left: $left;
    top: -142px - 32px;
    cursor: pointer;
  }
  @mixin arrow-hover {
    background-color: rgb(51, 51, 51);
    opacity: 0.5;
  }
  @mixin arrow-image {
    position: relative;
    left: -5px;
    top: 7px;
  }

  display: flex;
  justify-content: center;
  align-self: center;
  z-index: 99;

  .banner-arrow-left {
    @include arrow(-530px);
  }

  .banner-arrow-right {
    @include arrow(530px);
  }
  .banner-arrow-left,
  .banner-arrow-right {
    &:hover {
      @include arrow-hover();
    }

    img {
      @include arrow-image();
    }
  }
}
</style>