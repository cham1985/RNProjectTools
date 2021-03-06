// index.js

import baseTimer from "./tools/baseTimer";
import arrayUtils from "./tools/arrayTools";
import EventListener, { sendEvent } from "./tools/EventListener";
import * as stringTools from "./tools/stringTools";
import * as screenTools from "./tools/screenTools";
import appStyle from "./styles/appStyle";
import ViewPropTypes from "./components/ViewPropTypes";
import Text from "./components/Text/Text";
import Button from "./components/Button";
import PureComponent from "./components/PureComponent";
import tool from "./tools/tool";
import HttpManager from "./api/HttpManager";
import * as netwrokCode from "./api/netwrokCode";
import FlatList from "./components/FlatList";
import constant from "./constant/constant";
import SectionList from "./components/SectionList";
import homeSpringBoxQueue from "./tools/homeSpringBoxQueue";
import Toast from "./components/Toast"; //
import * as teaset from "teaset"; //
import SearchInput from "./components/SearchInput";
import VerificationCodeBt from "./components/VerificationCodeBt";
import TextBt from "./components/TextBt";
import ImgBt from "./components/ImgBt";
import clipboardTools from "./tools/clipboardTools";
import BasePureComponent from "./components/BasePureComponent";
import Banner from "./components/Banner";
import GridView from "./components/GridView";
import FullScreenLoading from "./components/FullScreenLoading";
import dateTools from "./tools/dateTools";
import * as Math from "./tools/Math";
// import md5 from './tools/md5'
import md5 from "./tools/blueimp_md5";
import ScrollView from "./components/ScrollView";
import useAppStateListener from "./components/CustomHooks/useAppStateListener";
import useAndroidBackHandler from "./components/CustomHooks/useAndroidBackHandler";
import useSubscribeKeyboard from "./components/CustomHooks/useSubscribeKeyboard";
import asyncStorage from "./tools/asyncStorage";
import objTools from "./tools/objTools";
import dva from "./dva/dva";
import baseModel from "./dva/baseModel";
import models from "./dva/models";
import modelTools from "./dva/modelTools";
import HttpConfig from "./api/HttpConfig"; //创建默认的 HTTP配置实例
import {
  XHttp,
  XImage,
  XText,
  XView,
  XWidget,
  XSize /*取代dp*/,
  XTSize /*适配不同屏幕的字体,等比例缩放之*/,
  ResetStyle,
} from "react-native-easy-app";
import ahooks from "./tools/ahooks";

const RNProjectTools = {
  baseTimer,
  constant,
  ScrollView,
  arrayUtils,
  SectionList,
  EventListener,
  sendEvent,
  FullScreenLoading,
  Banner,
  stringTools,
  GridView,
  screenTools,
  Math,
  appStyle,
  ImgBt,
  ViewPropTypes,
  md5,
  Text,
  SearchInput,
  Button,
  Toast,
  TextBt,
  PureComponent,
  dateTools,
  tool,
  homeSpringBoxQueue,
  BasePureComponent,
  HttpManager,
  teaset,
  VerificationCodeBt,
  netwrokCode,
  FlatList,
  clipboardTools,
  useAppStateListener,
  useSubscribeKeyboard,
  useAndroidBackHandler,
  asyncStorage,
  objTools,
  dva,
  baseModel,
  models,
  modelTools,
  HttpConfig,
  XHttp,
  XView,
  XImage,
  XText,
  XWidget,
  XSize,
  XTSize,
  ResetStyle,
  ahooks,
};

module.exports = RNProjectTools;
