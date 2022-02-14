/*
 * @Author: your name
 * @Date: 2022-02-14 09:50:45
 * @LastEditTime: 2022-02-14 16:44:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\utils\operate.js
 */

import store from "@/store";

import { playlistTrackAllApi } from "@/api/playlist.js";
import { albumApi } from "@/api/album.js";
import { playlistSubscribeApi } from "@/api/playlist.js";

// state  store.state.(modules).(name)

// getters  store.getters['(modules)/(name)']
const PLAY_SONGS_COUNT = "player/playSongsCount";

// mutations  store.commit('(modules)/(method)', payload)
const UPDATE_USER_OPERATE_SONG = "user/UPDATE_USER_OPERATE_SONG";
const UPDATE_USER_OPERATE_TYPE_INDEX = "user/UPDATE_USER_OPERATE_TYPE_INDEX";

const ADD_PLAYLIST_SONGS_INFO = "player/ADD_PLAYLIST_SONGS_INFO";
const UPDATE_CURRENT_PLAY_INDEX = "player/UPDATE_CURRENT_PLAY_INDEX";
const UPDATE_AUDIO_SRC = "player/UPDATE_AUDIO_SRC";

const UPDATE_POPUP_TYPE = "UPDATE_POPUP_TYPE";

// actions  store.dispatch('(modules)/(method)', payload)
const GET_USER_PLAYLIST = "user/getUserPlaylist";

export function addSong(songDetail) {
  store.commit(ADD_PLAYLIST_SONGS_INFO, songDetail);
}

export function playSong(index) {
  store.commit(UPDATE_CURRENT_PLAY_INDEX, index);
  store.commit(UPDATE_AUDIO_SRC);
}

export function playSingle(songDetail) {
  addSong(songDetail);
  playSong(store.getters[PLAY_SONGS_COUNT] - 1);
}

export function playPlaylist(playlistId, type = "playlist", limit = 10) {
  let apiFn = type == "playlist" ? playlistTrackAllApi : albumApi;

  apiFn(playlistId)
    .then((response) => {
      if (response["status"] == 200) {
        let allSongs = response["data"]["songs"];
        let addSongs =
          allSongs.length > limit ? allSongs.slice(0, limit) : allSongs;
        addSongs.forEach((element) => {
          addSong(element);
        });
        let playIndex = store.getters[PLAY_SONGS_COUNT] - addSongs.length;
        playSong(playIndex);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function collectPlaylist(playlistId, type) {
  playlistSubscribeApi(playlistId, type)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function collectSong(songDetail, type = "addToPlaylist", typeIndex = 0) {
  store.commit(ADD_PLAYLIST_SONGS_INFO, songDetail);
  store.commit(UPDATE_POPUP_TYPE, type);
  store.dispatch(GET_USER_PLAYLIST);
  store.commit(UPDATE_USER_OPERATE_SONG, songDetail["id"]);
  store.commit(UPDATE_USER_OPERATE_TYPE_INDEX, typeIndex);
}
