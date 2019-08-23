import React, { PureComponent } from 'react'

import FastImage from 'react-native-fast-image'

import Proptypes from 'prop-types'
import { config } from './config';

class CachedImage extends PureComponent {
  identifyRadius = () => {
    const {
      rounded,
      height,
    } = this.props;
    if (rounded) {
      return { borderRadius: height / 2 };
    }

    return { borderRadius: 0 };
  }

  identifyMode = () => {
    const { resize } = this.props;
    if (resize === 'cover') {
      return FastImage.resizeMode.cover;
    }
    if (resize === 'stretch') {
      return FastImage.resizeMode.stretch;
    }
    if (resize === 'center') {
      return FastImage.resizeMode.center;
    }
    return FastImage.resizeMode.contain;
  }

  checkPriority = priority => {
    if (priority === 'normal') {
      return FastImage.priority.normal;
    }
    if (priority === 'high') {
      return FastImage.priority.high;
    }
    return FastImage.priority.low;
  }

  checkCache = cache => {
    if (cache === 'immutable') {
      return FastImage.cacheControl.immutable;
    }

    if (cache === 'cacheOnly') {
      return FastImage.cacheControl.cacheOnly;
    }

    return FastImage.cacheControl.web;
  }

  defineUri = () => {
    const { uri } = this.props;
    if (typeof uri === 'string') {
      return {
        uri,
        headers: { Authorization: config.defaultImageToken },
        priority: this.checkPriority(config.defaultImagePriority),
        cache: this.checkCache(config.defaultImageCache),
      }
    }

    if (typeof uri === 'object') {
      return {
        uri: uri.uri,
        headers: { Authorization: uri.token },
        priority: this.checkPriority(typeof uri.priority !== 'undefined' ? uri.priority : config.defaultImagePriority),
        cache: this.checkCache(typeof uri.cache !== 'undefined' ? uri.cache : config.defaultImageCache),
      }
    }

    return uri
  }

  render() {
    const {
      width,
      height,
      imageStyle,
      ...props
    } = this.props;
    return (
      <FastImage
        source={this.defineUri()}
        style={{
          width,
          height,
          ...this.identifyRadius(),
          ...imageStyle,
        }}
        resizeMode={this.identifyMode()}
        {...props}
      />
    )
  }
}

CachedImage.propTypes = {
  uri: Proptypes.any.isRequired,
  width: Proptypes.number,
  height: Proptypes.number,
  rounded: Proptypes.bool,
  imageStyle: Proptypes.object,
  resize: Proptypes.string,
}

CachedImage.defaultProps = {
  width: config.defaultImageWidth,
  height: config.defaultImageHeight,
  rounded: config.defaultImageRounded,
  imageStyle: config.defaultImageStyle,
  resize: config.defaultImageResize,
}

export default CachedImage;
