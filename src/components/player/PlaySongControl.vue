<template>
  <div class="play-song-control">
    <div class="collect">
      <img src="../../assets/player/musiccollect.png" class="image" />
    </div>
    <div class="share">
      <img src="../../assets/player/musicshare.png" class="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaySongControl",
};
</script>

<style lang="scss" scoped>
.play-song-control {
  display: flex;

  .picture-in-picture {
    margin-left: 30px;
    .image {
      width: 25px;
      height: 25px;
      cursor: pointer;
      margin-top: 12px;
    }
  }

  .collect {
    .image {
      width: 25px;
      height: 25px;
      cursor: pointer;
      margin-top: 12px;
    }
  }

  .share {
    .image {
      width: 20px;
      height: 20px;
      margin-top: 14px;
      margin-left: 5px;
    }
  }
}
</style>