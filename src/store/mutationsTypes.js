/*
 * @Author: your name
 * @Date: 2021-11-16 17:56:55
 * @LastEditTime: 2021-12-22 12:07:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\mutationsTypes.js
 */

// 自动登录
const UPDATE_AUTO_LOGIN = "UPDATE_AUTO_LOGIN";

// 登录窗口显示
const UPDATE_LOGIN_WINDOW_SHOW = "UPDATE_LOGIN_WINDOW_SHOW";

// 登录窗口移动
const UPDATE_LOGIN_WINDOW_MOVE = "UPDATE_LOGIN_WINDOW_MOVE";

// 登录方式
const UPDATE_LOGIN_MODE = "UPDATE_LOGIN_MODE";

// 登录是否同意政策
const UPDATE_LOGIN_POLICY = "UPDATE_LOGIN_POLICY";

// 登录发送验证码数量
const INCREASE_LOGIN_CAPTCHA_COUNT = "INCREASE_LOGIN_CAPTCHA_COUNT";

// 用户登录信息
const UPDATE_USER_LOGIN_INFO = "UPDATE_USER_LOGIN_INFO";

// 登录手机号
const UPDATE_LOGIN_PHONE = "UPDATE_LOGIN_PHONE";

// 登录密码
const UPDATE_LOGIN_PASSWORD = "UPDATE_LOGIN_PASSWORD";

// 用户是否登录
const UPDATE_USER_LOGIN = "UPDATE_USER_LOGIN";

// 用户账号
const UPDATE_USER_ACCOUNT = "UPDATE_USER_ACCOUNT";

// 用户详情
const UPDATE_USER_DETAIL = "UPDATE_USER_DETAIL";

// 用户信息
const UPDATE_USER_SUBCOUNT = "UPDATE_USER_SUBCOUNT";

// 用户歌单
const UPDATE_USER_PLAYLIST = "UPDATE_USER_PLAYLIST";

// 用户操作歌单
const UPDATE_USER_OPERATE_SONG = "UPDATE_USER_OPERATE_SONG";

// 用户私信
const UPDATE_USER_MSG_PRIVATE = "UPDATE_USER_MSG_PRIVATE";

// 音频播放器
const INIT_PLAYER_AUDIO = "INIT_PLAYER_AUDIO";

// 音频播放器配置
const UPDATE_PLAYER_AUDIO_CONFIG = "UPDATE_PLAYER_AUDIO_CONFIG";

// 音频播放器SRC
const UPDATE_AUDIO_SRC = "UPDATE_AUDIO_SRC";

// 当前音乐播放时间
const UPDATE_AUDIO_CURRENT_TIME = "UPDATE_AUDIO_CURRENT_TIME";

// 音乐播放Interval
const UPDATE_AUDIO_INTERVAL = "UPDATE_AUDIO_INTERVAL";

// 增加歌曲信息
const ADD_PLAYLIST_SONGS_INFO = "ADD_PLAYLIST_SONGS_INFO";

//删除歌曲信息
const DELETE_PLAYLIST_SONGS_INFO = "DELETE_PLAYLIST_SONGS_INFO";

// 歌单展示
const UPDATE_PLAYLIST_SHOW = "UPDATE_PLAYLIST_SHOW";

// 播放模式
const SWITCH_PLAY_MODE = "SWITCH_PLAY_MODE";

// 播放历史
const UPDATE_PLAY_INDEX_HISTORY = "UPDATE_PLAY_INDEX_HISTORY";

// 当前播放索引
const UPDATE_CURRENT_PLAY_INDEX = "UPDATE_CURRENT_PLAY_INDEX";

// 当前播放状态
const SWITCH_PLAY_STATUS = "SWITCH_PLAY_STATUS";

// 歌词
const UPDATE_PLAYLIST_SONGS_LYRIC = "UPDATE_PLAYLIST_SONGS_LYRIC";

// 提示
const UPDATE_MESSAGE_TIP_INFO = "UPDATE_MESSAGE_TIP_INFO";

// 下载弹窗
const UPDATE_POPUP_DOWNLOAD_SHOW = "UPDATE_POPUP_DOWNLOAD_SHOW";

// 添加到歌单弹窗
const UPDATE_POPUP_ADD_TO_PLAYLIST = "UPDATE_POPUP_ADD_TO_PLAYLIST";

// 创建歌单弹窗
const UPDATE_POPUP_CREATE_PLAYLIST = "UPDATE_POPUP_CREATE_PLAYLIST";

// 歌单详情
const UPDATE_PLAYLIST_DETAIL = "UPDATE_PLAYLIST_DETAIL";



export {
  UPDATE_AUTO_LOGIN,
  UPDATE_LOGIN_WINDOW_SHOW,
  UPDATE_LOGIN_WINDOW_MOVE,
  UPDATE_LOGIN_MODE,
  UPDATE_LOGIN_POLICY,
  INCREASE_LOGIN_CAPTCHA_COUNT,
  UPDATE_USER_LOGIN_INFO,
  UPDATE_LOGIN_PHONE,
  UPDATE_LOGIN_PASSWORD,
  UPDATE_USER_LOGIN,
  UPDATE_USER_ACCOUNT,
  UPDATE_USER_DETAIL,
  UPDATE_USER_SUBCOUNT,
  UPDATE_USER_PLAYLIST,
  UPDATE_USER_OPERATE_SONG,
  UPDATE_USER_MSG_PRIVATE,
  ADD_PLAYLIST_SONGS_INFO,
  DELETE_PLAYLIST_SONGS_INFO,
  INIT_PLAYER_AUDIO,
  UPDATE_PLAYER_AUDIO_CONFIG,
  UPDATE_AUDIO_CURRENT_TIME,
  UPDATE_AUDIO_INTERVAL,
  UPDATE_AUDIO_SRC,
  UPDATE_PLAYLIST_SHOW,
  SWITCH_PLAY_MODE,
  UPDATE_PLAY_INDEX_HISTORY,
  UPDATE_CURRENT_PLAY_INDEX,
  SWITCH_PLAY_STATUS,
  UPDATE_PLAYLIST_SONGS_LYRIC,
  UPDATE_MESSAGE_TIP_INFO,
  UPDATE_POPUP_DOWNLOAD_SHOW,
  UPDATE_POPUP_ADD_TO_PLAYLIST,
  UPDATE_POPUP_CREATE_PLAYLIST,
  UPDATE_PLAYLIST_DETAIL,
};
