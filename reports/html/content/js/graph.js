/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 71.0, "minX": 0.0, "maxY": 2139.0, "series": [{"data": [[0.0, 71.0], [0.1, 71.0], [0.2, 71.0], [0.3, 74.0], [0.4, 74.0], [0.5, 74.0], [0.6, 74.0], [0.7, 75.0], [0.8, 75.0], [0.9, 75.0], [1.0, 75.0], [1.1, 75.0], [1.2, 75.0], [1.3, 75.0], [1.4, 75.0], [1.5, 75.0], [1.6, 75.0], [1.7, 75.0], [1.8, 75.0], [1.9, 75.0], [2.0, 75.0], [2.1, 76.0], [2.2, 76.0], [2.3, 76.0], [2.4, 76.0], [2.5, 76.0], [2.6, 76.0], [2.7, 76.0], [2.8, 76.0], [2.9, 76.0], [3.0, 77.0], [3.1, 77.0], [3.2, 77.0], [3.3, 77.0], [3.4, 77.0], [3.5, 77.0], [3.6, 77.0], [3.7, 77.0], [3.8, 77.0], [3.9, 77.0], [4.0, 77.0], [4.1, 77.0], [4.2, 77.0], [4.3, 77.0], [4.4, 77.0], [4.5, 77.0], [4.6, 77.0], [4.7, 77.0], [4.8, 77.0], [4.9, 78.0], [5.0, 78.0], [5.1, 78.0], [5.2, 78.0], [5.3, 78.0], [5.4, 78.0], [5.5, 78.0], [5.6, 78.0], [5.7, 78.0], [5.8, 78.0], [5.9, 78.0], [6.0, 78.0], [6.1, 78.0], [6.2, 78.0], [6.3, 78.0], [6.4, 78.0], [6.5, 78.0], [6.6, 78.0], [6.7, 78.0], [6.8, 78.0], [6.9, 78.0], [7.0, 78.0], [7.1, 78.0], [7.2, 78.0], [7.3, 78.0], [7.4, 78.0], [7.5, 78.0], [7.6, 78.0], [7.7, 78.0], [7.8, 79.0], [7.9, 79.0], [8.0, 79.0], [8.1, 79.0], [8.2, 79.0], [8.3, 79.0], [8.4, 79.0], [8.5, 79.0], [8.6, 79.0], [8.7, 79.0], [8.8, 79.0], [8.9, 79.0], [9.0, 79.0], [9.1, 79.0], [9.2, 79.0], [9.3, 79.0], [9.4, 79.0], [9.5, 79.0], [9.6, 79.0], [9.7, 79.0], [9.8, 79.0], [9.9, 79.0], [10.0, 79.0], [10.1, 79.0], [10.2, 79.0], [10.3, 79.0], [10.4, 79.0], [10.5, 79.0], [10.6, 79.0], [10.7, 79.0], [10.8, 79.0], [10.9, 79.0], [11.0, 79.0], [11.1, 80.0], [11.2, 80.0], [11.3, 80.0], [11.4, 80.0], [11.5, 80.0], [11.6, 80.0], [11.7, 80.0], [11.8, 80.0], [11.9, 80.0], [12.0, 80.0], [12.1, 80.0], [12.2, 80.0], [12.3, 80.0], [12.4, 80.0], [12.5, 80.0], [12.6, 80.0], [12.7, 80.0], [12.8, 80.0], [12.9, 80.0], [13.0, 80.0], [13.1, 80.0], [13.2, 80.0], [13.3, 80.0], [13.4, 80.0], [13.5, 80.0], [13.6, 80.0], [13.7, 80.0], [13.8, 80.0], [13.9, 80.0], [14.0, 80.0], [14.1, 80.0], [14.2, 80.0], [14.3, 80.0], [14.4, 80.0], [14.5, 80.0], [14.6, 80.0], [14.7, 81.0], [14.8, 81.0], [14.9, 81.0], [15.0, 81.0], [15.1, 81.0], [15.2, 81.0], [15.3, 81.0], [15.4, 81.0], [15.5, 81.0], [15.6, 81.0], [15.7, 81.0], [15.8, 81.0], [15.9, 81.0], [16.0, 81.0], [16.1, 81.0], [16.2, 81.0], [16.3, 81.0], [16.4, 81.0], [16.5, 81.0], [16.6, 82.0], [16.7, 82.0], [16.8, 82.0], [16.9, 82.0], [17.0, 82.0], [17.1, 82.0], [17.2, 82.0], [17.3, 82.0], [17.4, 82.0], [17.5, 82.0], [17.6, 82.0], [17.7, 82.0], [17.8, 82.0], [17.9, 82.0], [18.0, 82.0], [18.1, 82.0], [18.2, 82.0], [18.3, 82.0], [18.4, 82.0], [18.5, 82.0], [18.6, 82.0], [18.7, 82.0], [18.8, 82.0], [18.9, 82.0], [19.0, 82.0], [19.1, 82.0], [19.2, 82.0], [19.3, 82.0], [19.4, 82.0], [19.5, 82.0], [19.6, 82.0], [19.7, 82.0], [19.8, 83.0], [19.9, 83.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 83.0], [20.4, 83.0], [20.5, 83.0], [20.6, 83.0], [20.7, 83.0], [20.8, 83.0], [20.9, 83.0], [21.0, 83.0], [21.1, 83.0], [21.2, 83.0], [21.3, 83.0], [21.4, 83.0], [21.5, 83.0], [21.6, 83.0], [21.7, 83.0], [21.8, 83.0], [21.9, 83.0], [22.0, 83.0], [22.1, 83.0], [22.2, 83.0], [22.3, 83.0], [22.4, 83.0], [22.5, 83.0], [22.6, 83.0], [22.7, 83.0], [22.8, 83.0], [22.9, 83.0], [23.0, 83.0], [23.1, 83.0], [23.2, 83.0], [23.3, 83.0], [23.4, 83.0], [23.5, 83.0], [23.6, 83.0], [23.7, 83.0], [23.8, 83.0], [23.9, 83.0], [24.0, 83.0], [24.1, 83.0], [24.2, 83.0], [24.3, 83.0], [24.4, 84.0], [24.5, 84.0], [24.6, 84.0], [24.7, 84.0], [24.8, 84.0], [24.9, 84.0], [25.0, 84.0], [25.1, 84.0], [25.2, 84.0], [25.3, 84.0], [25.4, 84.0], [25.5, 84.0], [25.6, 84.0], [25.7, 84.0], [25.8, 84.0], [25.9, 84.0], [26.0, 84.0], [26.1, 84.0], [26.2, 84.0], [26.3, 84.0], [26.4, 84.0], [26.5, 84.0], [26.6, 84.0], [26.7, 84.0], [26.8, 84.0], [26.9, 84.0], [27.0, 84.0], [27.1, 84.0], [27.2, 84.0], [27.3, 85.0], [27.4, 85.0], [27.5, 85.0], [27.6, 85.0], [27.7, 85.0], [27.8, 85.0], [27.9, 85.0], [28.0, 85.0], [28.1, 85.0], [28.2, 85.0], [28.3, 85.0], [28.4, 85.0], [28.5, 85.0], [28.6, 85.0], [28.7, 85.0], [28.8, 85.0], [28.9, 85.0], [29.0, 85.0], [29.1, 85.0], [29.2, 85.0], [29.3, 85.0], [29.4, 86.0], [29.5, 86.0], [29.6, 86.0], [29.7, 86.0], [29.8, 86.0], [29.9, 86.0], [30.0, 86.0], [30.1, 86.0], [30.2, 86.0], [30.3, 86.0], [30.4, 86.0], [30.5, 86.0], [30.6, 86.0], [30.7, 86.0], [30.8, 86.0], [30.9, 86.0], [31.0, 86.0], [31.1, 86.0], [31.2, 86.0], [31.3, 86.0], [31.4, 86.0], [31.5, 86.0], [31.6, 86.0], [31.7, 86.0], [31.8, 86.0], [31.9, 86.0], [32.0, 86.0], [32.1, 86.0], [32.2, 86.0], [32.3, 86.0], [32.4, 86.0], [32.5, 86.0], [32.6, 87.0], [32.7, 87.0], [32.8, 87.0], [32.9, 87.0], [33.0, 87.0], [33.1, 87.0], [33.2, 87.0], [33.3, 87.0], [33.4, 87.0], [33.5, 87.0], [33.6, 87.0], [33.7, 87.0], [33.8, 87.0], [33.9, 87.0], [34.0, 88.0], [34.1, 88.0], [34.2, 88.0], [34.3, 88.0], [34.4, 88.0], [34.5, 88.0], [34.6, 88.0], [34.7, 88.0], [34.8, 88.0], [34.9, 88.0], [35.0, 88.0], [35.1, 88.0], [35.2, 88.0], [35.3, 88.0], [35.4, 88.0], [35.5, 88.0], [35.6, 88.0], [35.7, 88.0], [35.8, 88.0], [35.9, 88.0], [36.0, 88.0], [36.1, 88.0], [36.2, 88.0], [36.3, 88.0], [36.4, 88.0], [36.5, 88.0], [36.6, 88.0], [36.7, 89.0], [36.8, 89.0], [36.9, 89.0], [37.0, 89.0], [37.1, 89.0], [37.2, 89.0], [37.3, 89.0], [37.4, 89.0], [37.5, 89.0], [37.6, 89.0], [37.7, 89.0], [37.8, 89.0], [37.9, 89.0], [38.0, 89.0], [38.1, 89.0], [38.2, 89.0], [38.3, 89.0], [38.4, 89.0], [38.5, 89.0], [38.6, 89.0], [38.7, 89.0], [38.8, 89.0], [38.9, 89.0], [39.0, 89.0], [39.1, 89.0], [39.2, 89.0], [39.3, 90.0], [39.4, 90.0], [39.5, 90.0], [39.6, 90.0], [39.7, 90.0], [39.8, 90.0], [39.9, 90.0], [40.0, 90.0], [40.1, 90.0], [40.2, 90.0], [40.3, 90.0], [40.4, 90.0], [40.5, 90.0], [40.6, 90.0], [40.7, 90.0], [40.8, 90.0], [40.9, 91.0], [41.0, 91.0], [41.1, 91.0], [41.2, 91.0], [41.3, 91.0], [41.4, 91.0], [41.5, 91.0], [41.6, 91.0], [41.7, 91.0], [41.8, 91.0], [41.9, 91.0], [42.0, 91.0], [42.1, 91.0], [42.2, 91.0], [42.3, 91.0], [42.4, 91.0], [42.5, 91.0], [42.6, 91.0], [42.7, 91.0], [42.8, 91.0], [42.9, 92.0], [43.0, 92.0], [43.1, 92.0], [43.2, 92.0], [43.3, 92.0], [43.4, 92.0], [43.5, 92.0], [43.6, 92.0], [43.7, 92.0], [43.8, 92.0], [43.9, 92.0], [44.0, 92.0], [44.1, 92.0], [44.2, 92.0], [44.3, 93.0], [44.4, 93.0], [44.5, 94.0], [44.6, 94.0], [44.7, 94.0], [44.8, 94.0], [44.9, 94.0], [45.0, 94.0], [45.1, 94.0], [45.2, 94.0], [45.3, 94.0], [45.4, 94.0], [45.5, 94.0], [45.6, 94.0], [45.7, 94.0], [45.8, 94.0], [45.9, 94.0], [46.0, 94.0], [46.1, 94.0], [46.2, 94.0], [46.3, 94.0], [46.4, 94.0], [46.5, 94.0], [46.6, 95.0], [46.7, 95.0], [46.8, 95.0], [46.9, 95.0], [47.0, 95.0], [47.1, 95.0], [47.2, 95.0], [47.3, 96.0], [47.4, 96.0], [47.5, 98.0], [47.6, 98.0], [47.7, 98.0], [47.8, 100.0], [47.9, 100.0], [48.0, 100.0], [48.1, 100.0], [48.2, 101.0], [48.3, 101.0], [48.4, 102.0], [48.5, 102.0], [48.6, 102.0], [48.7, 102.0], [48.8, 102.0], [48.9, 103.0], [49.0, 103.0], [49.1, 103.0], [49.2, 103.0], [49.3, 103.0], [49.4, 104.0], [49.5, 104.0], [49.6, 105.0], [49.7, 105.0], [49.8, 110.0], [49.9, 110.0], [50.0, 113.0], [50.1, 113.0], [50.2, 113.0], [50.3, 117.0], [50.4, 117.0], [50.5, 120.0], [50.6, 120.0], [50.7, 121.0], [50.8, 121.0], [50.9, 121.0], [51.0, 138.0], [51.1, 138.0], [51.2, 141.0], [51.3, 141.0], [51.4, 143.0], [51.5, 143.0], [51.6, 143.0], [51.7, 143.0], [51.8, 143.0], [51.9, 152.0], [52.0, 152.0], [52.1, 154.0], [52.2, 154.0], [52.3, 158.0], [52.4, 158.0], [52.5, 158.0], [52.6, 159.0], [52.7, 159.0], [52.8, 160.0], [52.9, 160.0], [53.0, 160.0], [53.1, 160.0], [53.2, 160.0], [53.3, 163.0], [53.4, 163.0], [53.5, 164.0], [53.6, 164.0], [53.7, 170.0], [53.8, 170.0], [53.9, 170.0], [54.0, 170.0], [54.1, 170.0], [54.2, 171.0], [54.3, 171.0], [54.4, 172.0], [54.5, 172.0], [54.6, 173.0], [54.7, 173.0], [54.8, 173.0], [54.9, 173.0], [55.0, 173.0], [55.1, 177.0], [55.2, 177.0], [55.3, 177.0], [55.4, 177.0], [55.5, 177.0], [55.6, 177.0], [55.7, 177.0], [55.8, 178.0], [55.9, 178.0], [56.0, 179.0], [56.1, 179.0], [56.2, 179.0], [56.3, 179.0], [56.4, 179.0], [56.5, 180.0], [56.6, 180.0], [56.7, 181.0], [56.8, 181.0], [56.9, 182.0], [57.0, 182.0], [57.1, 182.0], [57.2, 183.0], [57.3, 183.0], [57.4, 184.0], [57.5, 184.0], [57.6, 185.0], [57.7, 185.0], [57.8, 185.0], [57.9, 185.0], [58.0, 185.0], [58.1, 185.0], [58.2, 185.0], [58.3, 186.0], [58.4, 186.0], [58.5, 187.0], [58.6, 187.0], [58.7, 187.0], [58.8, 188.0], [58.9, 188.0], [59.0, 189.0], [59.1, 189.0], [59.2, 190.0], [59.3, 190.0], [59.4, 190.0], [59.5, 191.0], [59.6, 191.0], [59.7, 192.0], [59.8, 192.0], [59.9, 193.0], [60.0, 193.0], [60.1, 194.0], [60.2, 194.0], [60.3, 194.0], [60.4, 194.0], [60.5, 194.0], [60.6, 194.0], [60.7, 194.0], [60.8, 195.0], [60.9, 195.0], [61.0, 195.0], [61.1, 195.0], [61.2, 195.0], [61.3, 196.0], [61.4, 196.0], [61.5, 197.0], [61.6, 197.0], [61.7, 197.0], [61.8, 197.0], [61.9, 197.0], [62.0, 200.0], [62.1, 200.0], [62.2, 200.0], [62.3, 200.0], [62.4, 201.0], [62.5, 201.0], [62.6, 201.0], [62.7, 201.0], [62.8, 201.0], [62.9, 203.0], [63.0, 203.0], [63.1, 203.0], [63.2, 203.0], [63.3, 203.0], [63.4, 204.0], [63.5, 204.0], [63.6, 205.0], [63.7, 205.0], [63.8, 205.0], [63.9, 205.0], [64.0, 205.0], [64.1, 205.0], [64.2, 205.0], [64.3, 208.0], [64.4, 208.0], [64.5, 209.0], [64.6, 209.0], [64.7, 209.0], [64.8, 209.0], [64.9, 209.0], [65.0, 209.0], [65.1, 209.0], [65.2, 210.0], [65.3, 210.0], [65.4, 211.0], [65.5, 211.0], [65.6, 211.0], [65.7, 211.0], [65.8, 211.0], [65.9, 211.0], [66.0, 211.0], [66.1, 212.0], [66.2, 212.0], [66.3, 212.0], [66.4, 212.0], [66.5, 212.0], [66.6, 212.0], [66.7, 212.0], [66.8, 212.0], [66.9, 212.0], [67.0, 213.0], [67.1, 213.0], [67.2, 213.0], [67.3, 214.0], [67.4, 214.0], [67.5, 214.0], [67.6, 214.0], [67.7, 215.0], [67.8, 215.0], [67.9, 215.0], [68.0, 215.0], [68.1, 215.0], [68.2, 217.0], [68.3, 217.0], [68.4, 218.0], [68.5, 218.0], [68.6, 218.0], [68.7, 218.0], [68.8, 218.0], [68.9, 218.0], [69.0, 218.0], [69.1, 219.0], [69.2, 219.0], [69.3, 220.0], [69.4, 220.0], [69.5, 220.0], [69.6, 220.0], [69.7, 220.0], [69.8, 220.0], [69.9, 220.0], [70.0, 223.0], [70.1, 223.0], [70.2, 223.0], [70.3, 223.0], [70.4, 223.0], [70.5, 224.0], [70.6, 224.0], [70.7, 225.0], [70.8, 225.0], [70.9, 226.0], [71.0, 226.0], [71.1, 226.0], [71.2, 227.0], [71.3, 227.0], [71.4, 228.0], [71.5, 228.0], [71.6, 229.0], [71.7, 229.0], [71.8, 229.0], [71.9, 229.0], [72.0, 229.0], [72.1, 230.0], [72.2, 230.0], [72.3, 230.0], [72.4, 230.0], [72.5, 230.0], [72.6, 230.0], [72.7, 230.0], [72.8, 230.0], [72.9, 230.0], [73.0, 230.0], [73.1, 230.0], [73.2, 231.0], [73.3, 231.0], [73.4, 231.0], [73.5, 231.0], [73.6, 231.0], [73.7, 231.0], [73.8, 231.0], [73.9, 232.0], [74.0, 232.0], [74.1, 232.0], [74.2, 232.0], [74.3, 232.0], [74.4, 232.0], [74.5, 232.0], [74.6, 232.0], [74.7, 232.0], [74.8, 233.0], [74.9, 233.0], [75.0, 233.0], [75.1, 234.0], [75.2, 234.0], [75.3, 234.0], [75.4, 234.0], [75.5, 234.0], [75.6, 234.0], [75.7, 234.0], [75.8, 234.0], [75.9, 234.0], [76.0, 235.0], [76.1, 235.0], [76.2, 235.0], [76.3, 235.0], [76.4, 235.0], [76.5, 235.0], [76.6, 235.0], [76.7, 235.0], [76.8, 235.0], [76.9, 237.0], [77.0, 237.0], [77.1, 237.0], [77.2, 237.0], [77.3, 238.0], [77.4, 238.0], [77.5, 238.0], [77.6, 238.0], [77.7, 238.0], [77.8, 239.0], [77.9, 239.0], [78.0, 239.0], [78.1, 239.0], [78.2, 239.0], [78.3, 239.0], [78.4, 239.0], [78.5, 239.0], [78.6, 239.0], [78.7, 239.0], [78.8, 239.0], [78.9, 240.0], [79.0, 240.0], [79.1, 240.0], [79.2, 240.0], [79.3, 240.0], [79.4, 240.0], [79.5, 240.0], [79.6, 240.0], [79.7, 240.0], [79.8, 240.0], [79.9, 240.0], [80.0, 240.0], [80.1, 240.0], [80.2, 240.0], [80.3, 240.0], [80.4, 240.0], [80.5, 240.0], [80.6, 240.0], [80.7, 240.0], [80.8, 241.0], [80.9, 241.0], [81.0, 241.0], [81.1, 241.0], [81.2, 241.0], [81.3, 241.0], [81.4, 241.0], [81.5, 242.0], [81.6, 242.0], [81.7, 242.0], [81.8, 242.0], [81.9, 242.0], [82.0, 242.0], [82.1, 242.0], [82.2, 243.0], [82.3, 243.0], [82.4, 243.0], [82.5, 243.0], [82.6, 243.0], [82.7, 243.0], [82.8, 244.0], [82.9, 244.0], [83.0, 244.0], [83.1, 244.0], [83.2, 244.0], [83.3, 244.0], [83.4, 244.0], [83.5, 245.0], [83.6, 245.0], [83.7, 245.0], [83.8, 245.0], [83.9, 245.0], [84.0, 246.0], [84.1, 246.0], [84.2, 246.0], [84.3, 246.0], [84.4, 246.0], [84.5, 248.0], [84.6, 248.0], [84.7, 250.0], [84.8, 250.0], [84.9, 252.0], [85.0, 252.0], [85.1, 254.0], [85.2, 254.0], [85.3, 254.0], [85.4, 258.0], [85.5, 258.0], [85.6, 261.0], [85.7, 261.0], [85.8, 264.0], [85.9, 264.0], [86.0, 264.0], [86.1, 270.0], [86.2, 270.0], [86.3, 276.0], [86.4, 276.0], [86.5, 332.0], [86.6, 332.0], [86.7, 355.0], [86.8, 355.0], [86.9, 355.0], [87.0, 357.0], [87.1, 357.0], [87.2, 359.0], [87.3, 359.0], [87.4, 365.0], [87.5, 365.0], [87.6, 365.0], [87.7, 365.0], [87.8, 365.0], [87.9, 368.0], [88.0, 368.0], [88.1, 368.0], [88.2, 368.0], [88.3, 368.0], [88.4, 375.0], [88.5, 375.0], [88.6, 376.0], [88.7, 376.0], [88.8, 391.0], [88.9, 391.0], [89.0, 394.0], [89.1, 394.0], [89.2, 394.0], [89.3, 400.0], [89.4, 400.0], [89.5, 404.0], [89.6, 404.0], [89.7, 420.0], [89.8, 420.0], [89.9, 420.0], [90.0, 434.0], [90.1, 434.0], [90.2, 438.0], [90.3, 438.0], [90.4, 441.0], [90.5, 441.0], [90.6, 468.0], [90.7, 468.0], [90.8, 468.0], [90.9, 479.0], [91.0, 479.0], [91.1, 504.0], [91.2, 504.0], [91.3, 504.0], [91.4, 504.0], [91.5, 504.0], [91.6, 508.0], [91.7, 508.0], [91.8, 509.0], [91.9, 509.0], [92.0, 510.0], [92.1, 510.0], [92.2, 510.0], [92.3, 552.0], [92.4, 552.0], [92.5, 569.0], [92.6, 569.0], [92.7, 572.0], [92.8, 572.0], [92.9, 672.0], [93.0, 672.0], [93.1, 672.0], [93.2, 680.0], [93.3, 680.0], [93.4, 686.0], [93.5, 686.0], [93.6, 706.0], [93.7, 706.0], [93.8, 706.0], [93.9, 710.0], [94.0, 710.0], [94.1, 724.0], [94.2, 724.0], [94.3, 816.0], [94.4, 816.0], [94.5, 833.0], [94.6, 833.0], [94.7, 833.0], [94.8, 841.0], [94.9, 841.0], [95.0, 843.0], [95.1, 843.0], [95.2, 844.0], [95.3, 844.0], [95.4, 844.0], [95.5, 879.0], [95.6, 879.0], [95.7, 882.0], [95.8, 882.0], [95.9, 924.0], [96.0, 924.0], [96.1, 924.0], [96.2, 1002.0], [96.3, 1002.0], [96.4, 1037.0], [96.5, 1037.0], [96.6, 1116.0], [96.7, 1116.0], [96.8, 1245.0], [96.9, 1245.0], [97.0, 1245.0], [97.1, 1305.0], [97.2, 1305.0], [97.3, 1320.0], [97.4, 1320.0], [97.5, 1354.0], [97.6, 1354.0], [97.7, 1354.0], [97.8, 1360.0], [97.9, 1360.0], [98.0, 1448.0], [98.1, 1448.0], [98.2, 1490.0], [98.3, 1490.0], [98.4, 1514.0], [98.5, 1514.0], [98.6, 1514.0], [98.7, 1606.0], [98.8, 1606.0], [98.9, 1712.0], [99.0, 1712.0], [99.1, 1734.0], [99.2, 1734.0], [99.3, 1734.0], [99.4, 1888.0], [99.5, 1888.0], [99.6, 2120.0], [99.7, 2120.0], [99.8, 2139.0], [99.9, 2139.0], [100.0, 2139.0]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 208.0, "series": [{"data": [[0.0, 208.0], [2100.0, 2.0], [600.0, 3.0], [700.0, 3.0], [200.0, 107.0], [800.0, 7.0], [900.0, 1.0], [1000.0, 2.0], [1100.0, 1.0], [300.0, 12.0], [1200.0, 1.0], [1300.0, 4.0], [1400.0, 2.0], [1500.0, 1.0], [100.0, 62.0], [1600.0, 1.0], [400.0, 8.0], [1700.0, 2.0], [1800.0, 1.0], [500.0, 8.0]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 397.0, "series": [{"data": [[0.0, 397.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 32.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.899082568807342, "minX": 1.75785666E12, "maxY": 9.899082568807342, "series": [{"data": [[1.75785666E12, 9.899082568807342]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75785666E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 102.0, "minX": 1.0, "maxY": 2139.0, "series": [{"data": [[8.0, 102.0], [2.0, 1354.0], [1.0, 2139.0], [9.0, 172.0], [10.0, 216.43091334894623], [5.0, 1566.5], [6.0, 241.0], [3.0, 816.0], [7.0, 209.0]], "isOverall": false, "label": "GET Posts", "isController": false}, {"data": [[9.899082568807342, 230.69266055045884]], "isOverall": false, "label": "GET Posts-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1002.8, "minX": 1.75785666E12, "maxY": 208844.31666666668, "series": [{"data": [[1.75785666E12, 208844.31666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75785666E12, 1002.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75785666E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 230.69266055045884, "minX": 1.75785666E12, "maxY": 230.69266055045884, "series": [{"data": [[1.75785666E12, 230.69266055045884]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75785666E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 215.65137614678895, "minX": 1.75785666E12, "maxY": 215.65137614678895, "series": [{"data": [[1.75785666E12, 215.65137614678895]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75785666E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 21.37844036697246, "minX": 1.75785666E12, "maxY": 21.37844036697246, "series": [{"data": [[1.75785666E12, 21.37844036697246]], "isOverall": false, "label": "GET Posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75785666E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 71.0, "minX": 1.75785666E12, "maxY": 2139.0, "series": [{"data": [[1.75785666E12, 2139.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75785666E12, 435.20000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75785666E12, 1725.86]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75785666E12, 843.15]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.75785666E12, 71.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75785666E12, 111.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75785666E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 88.0, "minX": 1.0, "maxY": 2139.0, "series": [{"data": [[8.0, 93.5], [4.0, 1299.5], [1.0, 2139.0], [42.0, 88.0], [47.0, 94.0], [49.0, 164.0], [50.0, 170.0], [51.0, 109.0], [52.0, 166.5], [31.0, 94.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 86.5, "minX": 1.0, "maxY": 2137.0, "series": [{"data": [[8.0, 87.0], [4.0, 1024.5], [1.0, 2137.0], [42.0, 86.5], [47.0, 93.0], [49.0, 163.0], [50.0, 167.0], [51.0, 104.5], [52.0, 163.0], [31.0, 91.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 7.266666666666667, "minX": 1.75785666E12, "maxY": 7.266666666666667, "series": [{"data": [[1.75785666E12, 7.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75785666E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 7.266666666666667, "minX": 1.75785666E12, "maxY": 7.266666666666667, "series": [{"data": [[1.75785666E12, 7.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75785666E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 7.266666666666667, "minX": 1.75785666E12, "maxY": 7.266666666666667, "series": [{"data": [[1.75785666E12, 7.266666666666667]], "isOverall": false, "label": "GET Posts-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75785666E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 7.266666666666667, "minX": 1.75785666E12, "maxY": 7.266666666666667, "series": [{"data": [[1.75785666E12, 7.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75785666E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

