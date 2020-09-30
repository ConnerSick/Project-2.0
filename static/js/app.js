// d3.csv("../../data/topics_count_list.csv").then(function(topicData) {

//   console.log(topicData);

//   // log a list of names
//   var topics = topicData.map(data => data.topic);
//   var counts = topicData.map(data => data.count);
//   console.log("topics", topics);
//   console.log("count", counts);

//   // Cast each hours value in tvData as a number using the unary + operator
//   topicData.forEach(function(data) {
//     data.topic = +data.topic;
//     data.count = +data.count;
//     console.log("Topics:", data.topic);
//     console.log("Count:", data.count);
//   });
// // }).catch(function(error) {
// //   console.log(error);
// });




var barSvgWidth = 960;
var barSvgHeight = 660;

// Define the chart's margins as an object
var barChartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var barChartWidth = barSvgWidth - barChartMargin.left - barChartMargin.right;
var barChartHeight = barSvgHeight - barChartMargin.top - barChartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var barSvg = d3
  .select("body")
  .append("svg")
  .attr("height", barSvgHeight)
  .attr("width", barSvgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var barChartGroup = barSvg.append("g")
  .attr("transform", `translate(${barChartMargin.left}, ${barChartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("../../data/topics_count_list.csv").then(function(barData) {

  // Print the tvData
  console.log(barData);

  // Cast the count value to a number for each piece of tvData
  barData.forEach(function(data) {
    data.count = +data.count;
  });

  var barSpacing = 10; // desired space between each bar
  var scaleY = 10; // 10x scale on rect height

  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  var barWidth = (barChartWidth - (barSpacing * (barData.length - 1))) / barData.length;

  // @TODO
  // Create code to build the bar chart using the tvData.
  barChartGroup.selectAll("bar")
    .data(barData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", d => barWidth)
    .attr("height", d => d.count * scaleY)
    .attr("x", (d, i) => i * (barWidth + barSpacing))
    .attr("y", d => barChartHeight - d.count * scaleY);
// }).catch(function(error) {
//   console.log(error);
});
