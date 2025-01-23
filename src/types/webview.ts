import type {WebViewMessageEvent} from 'react-native-webview';

export interface DeviceInfo {
  name: 'deviceInfo';
  deviceId: string;
  uniqueId: string;
}

export interface NetworkInfo {
  name: 'networkType';
  type: string;
}

export interface PhoneCall {
  name: 'callPhone';
  number: string;
}

export interface TextMessage {
  name: 'sendTextMessage';
  number: string;
}

export interface ExternalLink {
  name: 'openExternalLink';
  link: string;
}

export interface Haptic {
  name: 'haptic';
}

export interface Share {
  name: 'share';
  link: string;
}

export type WebViewMessage =
  | DeviceInfo
  | NetworkInfo
  | PhoneCall
  | TextMessage
  | ExternalLink
  | Haptic
  | Share;

export type MessageHandler = (event: WebViewMessageEvent) => Promise<void>;
