/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/* eslint no-unused-vars: [2, {"args": "none"}] */

/* eslint-disable no-unused-vars */
import {MDCTabScrollerAdapter, MDCTabScrollerAnimation} from './adapter';
/* eslint-enable no-unused-vars */

/**
 * @abstract
 */
class MDCTabScrollerRTL {
  /** @param {!MDCTabScrollerAdapter} adapter */
  constructor(adapter) {
    /** @private */
    this.adapter_ = adapter;
  }

  /**
   * @param {number} translateX The current translateX position
   * @return {number}
   * @abstract
   */
  computeCurrentScrollPositionRTL(translateX) {}

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   * @abstract
   */
  scrollToRTL(scrollX) {}

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   * @abstract
   */
  incrementScrollRTL(scrollX) {}
}

export default MDCTabScrollerRTL;