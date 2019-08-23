
import React, { PureComponent } from 'react'

import * as ReactNative from 'react-native'

type resizeModeType = "contain" | "cover" | "stretch" | "center"

type priorityType = "low" | "normal" | "high"

type uriObjectType = {
  uri: string
  /**
   * Token for caching access.
   */
  token: string
  priority?: priorityType
  cache?: "immutable" | "web" | "cacheOnly"
}

interface ImageStyling extends ReactNative.FlexStyle, ReactNative.TransformsStyle, ReactNative.ShadowStyleIOS {
  backfaceVisibility?: 'visible' | 'hidden'
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  backgroundColor?: string
  borderColor?: string
  borderWidth?: number
  borderRadius?: number
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  overlayColor?: string
  tintColor?: string
  opacity?: number
}

interface CachedImageProps {
  /**
   * Can be object, string or asset.
   * 
   * if object you need to pass
   * uri: string,
   * token: string,
   * [optional]priority: string,
   */
  uri: uriObjectType | string | number
  width?: number
  height?: number
  rounded?: boolean
  imageStyle?: ReactNative.StyleProp<ImageStyling>
  resize?: resizeModeType
}

/**
 * CachedImage
 * 
 * Image component that caches the images automatically.
 */
export default class CachedImage extends PureComponent<CachedImageProps> { }
