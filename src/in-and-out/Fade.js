/*
 * Fade React Component
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { bool, string } from 'prop-types';
import Reveal from '../Reveal';
import { animation } from '../lib/globals';

const
  propTypes = {
    out: bool,
    left: bool,
    right: bool,
    top: bool,
    bottom: bool,
    amount: string,
    opposite: bool,
  },
  defaultProps = {

  };

function Fade({out, left, right, up, down, top, bottom, amount, opposite, ...props}, context) {

  function factory(reverse) {

    function make() {
      const transform = left||right||up||down||top||bottom;
      let x, y;
      if (transform) {
        const dist = amount || '100%', change = opposite && reverse;
        x = left ? (change ? '':'-') + dist : ( right ? (change ? '-':'') + dist : '0' );
        y = down || top ? (change ? '':'-') + dist : ( up || bottom ? (change ? '-':'') + dist : '0' ) ;
      }
      return animation(
        `${!reverse?'from':'to'} {opacity: 0;${ transform ? ` transform: translate3d(${x}, ${y}, 0);` : ''}}
         ${ reverse?'from':'to'} {opacity: 1;transform: none;} `
      );
    }
    return { reverse: left, make };
  }

  return context
    ? <Reveal {...props} in={factory(false)} out={factory(true)} />
    : factory(out)
  ;
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
export default Fade;
