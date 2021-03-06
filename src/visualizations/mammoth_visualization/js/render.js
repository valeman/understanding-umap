  /* Copyright 2019 Google LLC All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  ==============================================================================*/
  
import { COLORS } from "../js/colors";

export function render2d(canvas, dimensions, points, colorIndices) {
  const { width, height } = dimensions;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const [x, y] = point;
    const colorIndex = colorIndices[i];

    ctx.fillStyle = COLORS[colorIndex];
    ctx.fillRect(x, y, 3, 3);
  }
}
