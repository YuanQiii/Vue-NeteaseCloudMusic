<template>
  <div>
    <div class="song-image">
      <img src="../../assets/player/note.png" class="image" />
    </div>
    <div class="play-progress-bar">
      <div class="info" v-if="musicAudioId">
        <div class="title">
          <!-- <span class='song-name'>{{ musicAudioDetail.songs[0].name }}</span> -->
        </div>
        <div class="artist">
          <!-- <span class='artist-name'>{{ musicAudioDetail.songs[0].ar[0].name }}</span> -->
        </div>
        <div class="link">
          <img src="../../assets/player/link.png" class="image" />
        </div>
      </div>
      <div class="point">
        <img src="../../assets/player/progress.png" class="image" />
      </div>
    </div>
    <div class="duration-time">
      <span class="elapsed">{{ elapsedTime }}</span>
      <span class="duration">/ {{ durationTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayProgressBar",
};
</script>

<style lang="scss" scoped>
.song-image {
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: transparent;
  border: solid 1px;
  border-radius: 3px;
  margin-left: 30px;
  margin-top: 7px;
  margin-right: 10px;

  .image {
    width: 35px;
    height: 35px;
    opacity: 1;
    cursor: default;
  }
}

.play-progress-bar {
  width: 500px;
  height: 10px;
  background-color: #131414;
  border-radius: 10px;
  margin-top: -15px;
  margin-left: 75px;

  .info {
    position: absolute;
    top: 3px;
    left: 720px;
    display: flex;
    color: #e8e8e8;
    font-size: 12px;
  }

  .title {
    margin-right: 15px;
    &:hover {
      .song-name {
        border-bottom: solid 1px;
        cursor: pointer;
      }
    }
  }
  .artist {
    color: #989898;
    &:hover {
      .artist-name {
        border-bottom: solid 1px;
        cursor: pointer;
      }
    }
  }

  .link {
    .image {
      position: relative;
      top: 1px;
      width: 15px;
      height: 15px;
      margin-left: 15px;
    }
  }
}

.duration-time {
  font-size: 12px;
  margin-left: 25px;
  margin-top: 25px;

  .elapsed {
    color: #a1a1a1;
  }
  .duration {
    color: #797979;
  }
}

.point {
  width: 0px;
  margin-left: 0px;
  height: 10px;
  z-index: 99;
  background-color: #c70c0c;
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  .image {
    margin-top: -5px;
    width: 22px;
    height: 18px;
    opacity: 1;
  }
}
</style>