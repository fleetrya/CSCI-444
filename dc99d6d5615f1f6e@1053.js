function _1(md){return(
md`# Project 4`
)}

function _2(md){return(
md`## Introduction`
)}

function _3(md){return(
md`### Hypothesis: There is No Bipartisanship in the Senate`
)}

function _4(md){return(
md`With election day last Tuesday, politics has been on the mind of every American, whether they want it to be or not. In recent years, many people have perceived a rise partisanship and an overall decrease in bipartisanship in government. I want to see if this is true and if the United States Senate still works across party lines to pass laws.`
)}

function _5(md){return(
md`## Citations`
)}

function _6(md){return(
md`### Sources`
)}

function _7(md){return(
md`Library of Congress. (n.d.). Public Laws. Statutes at Large and Public Laws. https://www.congress.gov/public-laws/117th-congress `
)}

function _8(md){return(
md`### Tools`
)}

function _9(md){return(
md`- Bostock, M. (2024, September 23). Force-directed graph component. Observable. https://observablehq.com/@d3/force-directed-graph-component 
- D3. (2023, August 1). Force-directed graph. Observable. https://observablehq.com/@d3/force-directed-graph/2 
- Johnson, J. (2024, October 9). Köppen-Geiger climate classification. Observable. https://observablehq.com/d/c53692a3dda5253e
- Staats, B. (2018, July 10). Graph visualization introduction. Observable. https://observablehq.com/@bstaats/graph-visualization-introduction `
)}

function _10(md){return(
md`### Acknowledgements`
)}

function _11(md){return(
md`Special Acknowledgement to Dr. Jesse Johnson and Jake Bova for their examples in Observable Plot and assistance in the development of this visualization. OpenAI's ChatGPT was used to aid in the development of these visualizations.`
)}

function _12(md){return(
md`## Final Plots`
)}

function _13(force,legend,project4_color,htl){return(
htl.html`<html
 <head>
 </head>
 <body>
    <div class="container" style="display: flex; height: 600px;">
        <div style="width: 70%">
            ${force}
        </div>
        <div style="width: 30%">
            ${legend}
            <div style="transform: scale(.31); transform-origin: top left;">
                ${project4_color}
            </div>
        </div>
    </div>
 </body>
</html>
`
)}

function _14(graph,htl){return(
htl.html`<html
 <head>
 </head>
 <body>
    <div class="container" style="display: flex; height: 450px;">
        <div style="width: 100%">
            ${graph}
        </div>
    </div>
 </body>
</html>
`
)}

function _15(md){return(
md`## Conclusions `
)}

function _16(md){return(
md`** Congress is more bipartisan than we are led to believe ** 

My network displays two very distinct groupings. The Democrats (and Independents that caucus with them) and the Republicans. We see, however, that there is some agreement between the two sides. Many Democrats and Republicans vote in agreement, which is displayed through the center of these two groupings. We can also see the Democrats were pushing a pretty partisan agenda at the time. The Inflation Reduction Act was a 51-50 Vote (with the Vice President casting the tie breaking vote) and the American Rescue Plan Act was a 50-49 Vote. We also see, however, a lot of bipartisanship with the COVID-19 Hate Crimes Act and the NDAA FY 22.

What this network plot does not display, however, is the amount of named bills that actually go to a recorded vote. In the 1st Session of the 117th Congress, 7 named bills went to a recorded vote. They are represented above in the legend. 43 named bills did not go to recorded vote. This means that the bill was either passed by unanimous consent or voice vote. While this does not indicate total agreement, it typically does not indicate profound disagreement. Any bill that is controversial or completely partisan would not be passed in this method, with Republicans most likely forcing a vote on it. As such, I believe it is fair to conclude that the Senate is not as partisan as we are led to believe by the media or even politicians themselves. There tends to be a fair bit of agreement, and crossover, between party lines. 

It is important to acknowledge, however, that the final vote on a bill is dependent a large number of different factors. As such, bills are highly vetted, passed through Committees, amended, and sometimes already passed in the House of Representatives before making it to the Senate. So, this may not be an accurate characterization for ALL legislation in Congress. I believe, however, it is a fair characterization for final bill votes.`
)}

function _17(md){return(
md`## Color`
)}

function _18(md){return(
md`My use of color in this project was carefully selected. I chose a traditional blue color for the Democratic Party and a traditional red for the Republican Party. This was to keep with party branding and common perceptions. I was also presented with the two Independents in the United States Senate. Yellow is a very common color that is used with Independents, so I chose it. I then put the hex values in the OpenAI's ChatGPT and asked it to desaturate the values, which led me to the colors that are seen above. 

For my bar graph, I asked ChatGPT to find the center of the red and blue values. I chose this purple to represented bipartisanship, as that is one of the conclusions of this visualization. This was a purposeful move, as I wanted the color to indicate a little more context to the reader. 

Lastly, I included my legend which I encoded with color. I chose a blue to purple to represent the variance between partisan and bipartisan bill. I chose blue as the partisan bills because the Democrats were the Senate Majority in the 117th Congress. As such, the partisan bills that were passed were favored by Democrats, which was represented as blue. Inversely, purple is used to represent bipartisanship, as it is a mix of blue and red. I used ChatGPT to create this color spectrum between the two values. I then gave it the proportion of Democrat to Republican votes and had it assign a value based on that. What I ended up with was the lighter blue representing very partisan votes and the purple representing very bipartisan votes.

The color choices do extremely well with the different types of color blindness, being easily distinguishable for all but complete color blindness. The blue and red are similar with complete color blindness, but the tooltip (which allows you to see party) and the distinctive grouping in the visualization help reduce the accessibility impact. The different in lightness of the legend allows it to still be pretty accessible. `
)}

function _19(md){return(
md`## Drafts`
)}

function _20(md){return(
md`This was my first attempt at the legend. I took this legend from my Project 3, which was derived from Jesse's Koppen Plots. I brought this in then assigned and edited the color scheme (described above). To improve this, I expanded all of the bars to ensure that the full bill name was included in each plot. I also added a .png of the color spectrum in the final plot as a sort-of legend for the legend.`
)}

function _legend1(Plot,colors,Bills){return(
Plot.plot({
  title: "Vote Type on Bills in the 1st Session of the 117th Congress",
  marginLeft: 80,
  width: 500,
  color: {
    range: colors.values(), // Using "colors" for bills data
    legend: "Colors" // Label for the colors section
  },
  x: { 
    grid: false, 
    label: "", 
    ticks: "" 
  },
  y: {
    grid: false,
    label: "",
    tickPadding: -10,
    tickSize: 0
  },
  marks: [
    Plot.barX([...Bills.keys()].map(bill => ({ bill })), {
      y: d => d.bill,
      x: new Array(Bills.size).fill(1),
      fill: d => colors.get(d.bill)
    }),

    Plot.text([...Bills.entries()].map(([bill, description]) => ({ bill, description })), {
      y: d => d.bill,
      x: new Array(Bills.size).fill(0),
      text: d => Bills.get(d.bill),
      textAnchor: "start",
      dx: 15,
      fill: "black",
      stroke: "white",
      fontSize: 14
    }),

    Plot.text([...Bills.keys()].map(bill => ({ bill })), {
      y: d => d.bill,
      x: new Array(Bills.size).fill(0),
      text: d => d.bill,
      textAnchor: "end",
      dx: -10,
      fontWeight: "bold"
    }),

    Plot.ruleX([0])
  ]
})
)}

function _22(md){return(
md`This was my first attempt at the bar graph. I made a few updates, I first added a title. I then decided to change the color of the graph from this very saturated blue to the middle point between my saturated blue and saturated red, to represent the more bipartisan understanding of this graph. Lastly, I added a grid on the y-axis to help the viewer more easily define the percentage.`
)}

function _graph1(Plot,csv){return(
Plot.plot({
  marks: [
    Plot.ruleY([0]),
    Plot.barY(
      csv, 
      {x: "Vote Type", 
       y: "Percentage of Bills",
       fill: "blue",
       stroke: "black",
       strokeWidth: 1,
       inset: 0.5}
    )
  ],
  x: {
    label: "Vote Type",
    domain: ["No Recorded Votes", "Recorded Vote"],
  },
  y: {
    grid: false,
    percent: false,
    domain: [0, 100],
    ticks: 10,
    label: "Percentage of Bills",
  }
})
)}

function _24(md){return(
md`** Draft 5 **`
)}

function _25(md){return(
md`On the edits between my last draft and final product, I decided to change the purple coloration for independents to the more commonly used yellow. I once again put the original Yellow (not pictured) into ChatGPT and asked it to desaturate it. I also continued to work on the physics of the force graphs to better display the topology. This mainly meant increasing the charge to spread the nodes further apart. This resulted in smaller nodes. At the same time, I increased the link strength and created a centering force I also made small adjustments to the font size.`
)}

function _chart5(d3,data,invalidation)
{
  const width = 928;
  const height = 600;

  const color = d3.scaleOrdinal()
      .domain(["D", "R", "I"])
      .range(["#6A8DFF", "#FF6A6A", "#d095f9"]);

  const links = data.links.map(d => ({...d}));
  const nodes = data.nodes.map(d => ({...d}));

  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).strength(0.02))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height + 40)
      .attr("viewBox", [0, 0, width, height + 40])
      .attr("style", "max-width: 100%; height: auto; background-color: #f0f0f0;");

  svg.append("text")
      .attr("x", 10)
      .attr("y", 30)
      .attr("font-size", "20px")
      .attr("font-weight", "bold")
      .attr("fill", "#000")
      .text("Bipartisanship in the 1st Session of the 117th Congress");

  svg.append("text")
      .attr("x", 10)
      .attr("y", height + 30)
      .attr("font-size", "14px")
      .attr("fill", "#000")
      .text("Results based on Laws with an Offical 'Short Title' and a Recorded Vote.");

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
      .attr("stroke", "#000")
      .attr("stroke-width", 0.5)
    .selectAll()
    .data(nodes)
    .join("circle")
      .attr("r", 5)
      .attr("fill", d => color(d.group));

  const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("border", "1px solid #999")
      .style("padding", "5px")
      .style("pointer-events", "none")
      .style("opacity", 0);

  node.on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip.html(`Senator: ${d.id}<br>Party: ${d.group}`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0);
      });

  node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  }

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  invalidation.then(() => simulation.stop());

  return svg.node();
}


function _27(md){return(
md`** Draft 4 **`
)}

function _28(md){return(
md`This looked far better. In addition to the updates described below, I changed the outline to a thin black line. This was far more visually appealing than the large white one. I then wanted to add the final touches, which included the title and caption. I also started to play with the physics of the force graph to try and represent the topology better.`
)}

function _chart4(d3,data,invalidation)
{
  const width = 928;
  const height = 600;

  const color = d3.scaleOrdinal()
      .domain(["D", "R", "I"])
      .range(["#6A8DFF", "#FF6A6A", "#d095f9"]);

  const links = data.links.map(d => ({...d}));
  const nodes = data.nodes.map(d => ({...d}));

  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; background-color: #f0f0f0;");

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
      .attr("stroke", "#000")
      .attr("stroke-width", 0.5)
    .selectAll()
    .data(nodes)
    .join("circle")
      .attr("r", 5)
      .attr("fill", d => color(d.group));

  const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("border", "1px solid #999")
      .style("padding", "5px")
      .style("pointer-events", "none")
      .style("opacity", 0);

  node.on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip.html(`Senator: ${d.id}<br>Party: ${d.group}`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0);
      });

  node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  }

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  invalidation.then(() => simulation.stop());

  return svg.node();
}


function _30(md){return(
md`** Draft 3 **`
)}

function _31(md){return(
md`This started to take the form I wanted, but the colors were off. Both the blue and red were too saturated and the purple was not right. I decided that I wanted desaturate all of the colors to make it more visually appealing. I also wanted to add a grey background because I thought it would have nicer contrast with the colors.`
)}

function _chart3(d3,data,invalidation)
{
  const width = 928;
  const height = 600;

  const color = d3.scaleOrdinal()
      .domain(["D", "R", "I"])
      .range(["#0000FF", "#FF0000", "#800080"]);

  const links = data.links.map(d => ({...d}));
  const nodes = data.nodes.map(d => ({...d}));

  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
    .selectAll()
    .data(nodes)
    .join("circle")
      .attr("r", 5)
      .attr("fill", d => color(d.group));

  const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("border", "1px solid #999")
      .style("padding", "5px")
      .style("pointer-events", "none")
      .style("opacity", 0);

  node.on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip.html(`Senator: ${d.id}<br>Party: ${d.group}`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0);
      });

  node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  }

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  invalidation.then(() => simulation.stop());

  return svg.node();
}


function _33(md){return(
md`** Draft 2 **`
)}

function _34(md){return(
md`I successfully added an interactive tool tip into this plot. When you hover over the node, it will show which Senator it is and their party. My next priority was fixing the color scheme. I justify the color more above, but I went for a basic blue for Democrats, Red for Republicans, and I initially picked purple for Independents (both of whom caucus with the Democrats).`
)}

function _chart2(d3,data,invalidation)
{
  const width = 928;
  const height = 600;

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const links = data.links.map(d => ({...d}));
  const nodes = data.nodes.map(d => ({...d}));

  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
    .selectAll()
    .data(nodes)
    .join("circle")
      .attr("r", 5)
      .attr("fill", d => color(d.group));

  const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("border", "1px solid #999")
      .style("padding", "5px")
      .style("pointer-events", "none")
      .style("opacity", 0);

  node.on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip.html(`Senator: ${d.id}<br>Party: ${d.group}`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0);
      });

  node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  }

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  invalidation.then(() => simulation.stop());

  return svg.node();
}


function _36(md){return(
md`** Draft 1 **`
)}

function _37(md){return(
md`This what my first attempt at the network visualization. I was just working to get it properly plotted. It took multiple attempts, but this what I came up with. The first thing I wanted to do was get a tool tip working, so I could easily identify each Senator.`
)}

function _chart1(d3,data,invalidation)
{
  const width = 928;
  const height = 600;

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const links = data.links.map(d => ({...d}));
  const nodes = data.nodes.map(d => ({...d}));

  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
    .selectAll()
    .data(nodes)
    .join("circle")
      .attr("r", 5)
      .attr("fill", d => color(d.group));

  node.append("title")
      .text(d => d.id);

  node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  }

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  invalidation.then(() => simulation.stop());

  return svg.node();
}


function _39(md){return(
md`## Data`
)}

function _40(md){return(
md`** This is all of the final plots **`
)}

function _force(d3,data,invalidation)
{
  const width = 1400;
  const height = 1000;

  const color = d3.scaleOrdinal()
      .domain(["D", "R", "I"])
      .range(["#6A8DFF", "#FF6A6A", "#E4D064"]);

  const links = data.links.map(d => ({...d}));
  const nodes = data.nodes.map(d => ({...d}));

  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).strength(0.05))
      .force("charge", d3.forceManyBody().strength(-1000))
      .force("center", d3.forceCenter(width / 2, height / 2).strength(0.005))
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height + 40)
      .attr("viewBox", [0, 0, width, height + 40])
      .attr("style", "max-width: 100%; height: auto; background-color: #f0f0f0;");

  svg.append("text")
      .attr("x", 10)
      .attr("y", 30)
      .attr("font-size", "36px")
      .attr("font-weight", "bold")
      .attr("fill", "#000")
      .text("Bipartisanship in the 1st Session of the 117th Congress (2021-2023)");

  svg.append("text")
      .attr("x", 10)
      .attr("y", height + 30)
      .attr("font-size", "18px")
      .attr("fill", "#000")
      .text("Results based on Laws with an Offical 'Short Title' and a Recorded Vote.");

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.9)
    .selectAll()
    .data(links)
    .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value) * 2);

  const node = svg.append("g")
      .attr("stroke", "#000")
      .attr("stroke-width", 0.5)
    .selectAll()
    .data(nodes)
    .join("circle")
      .attr("r", 5)
      .attr("fill", d => color(d.group));

  const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("border", "1px solid #999")
      .style("padding", "5px")
      .style("pointer-events", "none")
      .style("opacity", 0);

  node.on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip.html(`Senator: ${d.id}<br>Party: ${d.group}`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0);
      });

  node.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  }

  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  invalidation.then(() => simulation.stop());

  return svg.node();
}


function _legend(Plot,colors,Bills){return(
Plot.plot({
  title: "Vote Type on Bills in the 1st Session of the 117th Congress",
  marginLeft: 80,
  width: 600,
  color: {
    range: colors.values(),
    legend: "Colors"
  },
  x: { 
    grid: false, 
    label: "", 
    ticks: "" 
  },
  y: {
    grid: false,
    label: "",
    tickPadding: -10,
    tickSize: 0
  },
  marks: [
    Plot.barX([...Bills.keys()].map(bill => ({ bill })), {
      y: d => d.bill,
      x: new Array(Bills.size).fill(1),
      fill: d => colors.get(d.bill)
    }),

    Plot.text([...Bills.entries()].map(([bill, description]) => ({ bill, description })), {
      y: d => d.bill,
      x: new Array(Bills.size).fill(0),
      text: d => Bills.get(d.bill),
      textAnchor: "start",
      dx: 15,
      fill: "black",
      stroke: "white",
      fontSize: 14
    }),

    Plot.text([...Bills.keys()].map(bill => ({ bill })), {
      y: d => d.bill,
      x: new Array(Bills.size).fill(0),
      text: d => d.bill,
      textAnchor: "end",
      dx: -10,
      fontWeight: "bold"
    }),

    Plot.ruleX([0])
  ]
})
)}

function _graph(Plot,csv){return(
Plot.plot({
  title: 'Vote Type in the 1st Session of the 117th Congress',
  marks: [
    Plot.ruleY([0]),
    Plot.barY(
      csv, 
      {x: "Vote Type", 
       y: "Percentage of Bills",
       fill: "#B57CB5",
       stroke: "black",
       strokeWidth: 1,
       inset: 0.5}
    )
  ],
  x: {
    label: "Vote Type",
    domain: ["No Recorded Votes", "Recorded Vote"],
  },
  y: {
    grid: true,
    percent: false,
    domain: [0, 100],
    ticks: 10,
    label: "Percentage of Bills (%)",
  }
})
)}

async function _project4_color(FileAttachment){return(
await FileAttachment("Project4_Color@1.png").image()
)}

function _45(md){return(
md`### Data Discussion`
)}

function _46(md){return(
md`I created my own data set using ChatGPT and Congress.gov. I iterated through all named bills that had recorded votes. I compiled the list. I then found the vote records on each of them. I then asked ChatGPT to compile the votes for me. I had it assign a 1 to a yes vote, a 0 to a no vote, and a .5 to any other type of vote. I then exported this as a csv. I then used the R code below to make it a json. This is the data seen.`
)}

function _47(md){return(
md`My choice of data, that being bills with an official "Short Name" and Recorded Vote was very intentional. The Senate passes a lot of legislation and it would have taken a significant amount of time to go through each bill, figure out if it has a recorded vote, find the recorded vote, and then map those votes in a csv using ChatGPT. There was also both the technical limitations of ObservablePlot with large, complex data and Jesse's recommendation to not use too large of a data set. As such, I decided to go into the 117th Congress (the last full Congress), pick a session (I chose the 1st session), and iterate through that data. Again, I then looked at ones with only an official "Short Name". Bills with an official "Short Name" also tend to be more well-known to the average viewer. The Inflation Reduction Act, American Rescue Act, and NDAA ring a bill to more Americans than Bills without a short name. `
)}

function _48(md){return(
md`### Data and Objects`
)}

function _Bills(){return(
new Map([
  [1, "Inflation Reduction Act of 2022"],
  [2, "Infrastructure Investment and Jobs Act"],
  [3, "American Rescue Plan Act of 2021"],
  [4, "COVID-19 Hate Crimes Act"],
  [5, "Extending Government Funding and Delivering Emergency Assistance Act"],
  [6, "Further Extending Government Funding Act"],
  [7, "National Defense Authorization Act for Fiscal Year 2022"]
])
)}

function _colors(){return(
new Map([
  [1, "#6B8EFF"],  // 50/50 - more blue (kept for 1 and 3)
  [2, "#5A7CE6"],  // 69/30 - distinct from 1, still blue-leaning
  [3, "#6B8EFF"],  // 50/49 - same as 1 for similar split
  [4, "#C080B5"],  // 94/1 - more purple, noticeable difference from 2
  [5, "#8C83DA"],  // 65/35 - similar but slightly less blue than 2
  [6, "#5A7CE6"],  // 69/28 - same as 2 for consistency
  [7, "#A074C8"],  // 88/11 - distinct, leaning purple but different from 4
])
)}

async function _csv(FileAttachment){return(
await FileAttachment("117_Bill_Percentage.csv").csv()
)}

function _data(FileAttachment){return(
FileAttachment("117th_congress3.json").json()
)}

function _d3(require){return(
require("d3@7")
)}

function _54(md){return(
md`### Tables`
)}

function __bill_percentage(__query,FileAttachment,invalidation){return(
__query(FileAttachment("117_Bill_Percentage.csv"),{from:{table:"117_Bill_Percentage"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _th_congress3(__query,FileAttachment,invalidation){return(
__query(FileAttachment("117th_congress3.csv"),{from:{table:"117th_congress3"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _57(md){return(
md`## R Code`
)}

function _58(md){return(
md`library(jsonlite)
library(dplyr)


df <- read.csv("117th_congress3.csv") 


nodes <- df %>%
  select(name, party) %>%
  rename(id = name, group = party) %>%
  distinct()  


bill_columns <- grep("^Bill_", names(df), value = TRUE)
links <- data.frame()

for (i in 1:(nrow(df) - 1)) {
  for (j in (i + 1):nrow(df)) {
    memberA <- df[i, ]
    memberB <- df[j, ]
    

    shared_votes <- sum(memberA[bill_columns] == memberB[bill_columns] & 
                          (memberA[bill_columns] %in% c(1, 0, 0.5)), na.rm = TRUE)
    total_votes <- sum((memberA[bill_columns] %in% c(1, 0, 0.5)) & 
                         (memberB[bill_columns] %in% c(1, 0, 0.5)), na.rm = TRUE)
    
    if (total_votes > 0) {
      similarity <- shared_votes / total_votes
      if (similarity > 0.5) {
        links <- rbind(links, data.frame(source = memberA$name, target = memberB$name, value = similarity))
      }
    }
  }
}

output_data <- list(nodes = nodes, links = links)

json_output_path <- "117th_congress3.json"  
write_json(output_data, json_output_path, pretty = TRUE)`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["117th_congress3.csv", {url: new URL("./files/30984d19cefabd474db44aa055a2879462275f4acd956fdb77e630e3b231abdabfc9a7326512c6e25d672bef50b5840d6f8b3c7510dccc6d362256f454ded1b5.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["117th_congress3.json", {url: new URL("./files/c8500a6fbf414f3e56fc112f13a488a3acab862e58f48732b3aa14b38ee0ebdf3a2f2a16cecd7b9d3cfab03d816c1f9e961cd7f71674bbf6d747a8388cf6f2ba.json", import.meta.url), mimeType: "application/json", toString}],
    ["117_Bill_Percentage.csv", {url: new URL("./files/e57e23f7d87a0ea51afeb4d727138d8febf55cff74c5e6d33788c636142422ed89b9d7f0ec7e3873bcd651a7f55d1c1a5ebb12ef47208784834a13cb8b32c83c.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["Project4_Color@1.png", {url: new URL("./files/1055b68f321e38df4d2ec4b9927529058133de2461eb791eb957a4afef89f4d4d7653cbaec8879ca895a73b86bfc81b3a6f694db2e53d14e7974eea845aa0935.png", import.meta.url), mimeType: "image/png", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["force","legend","project4_color","htl"], _13);
  main.variable(observer()).define(["graph","htl"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer("legend1")).define("legend1", ["Plot","colors","Bills"], _legend1);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer("graph1")).define("graph1", ["Plot","csv"], _graph1);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer("chart5")).define("chart5", ["d3","data","invalidation"], _chart5);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer("chart4")).define("chart4", ["d3","data","invalidation"], _chart4);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer("chart3")).define("chart3", ["d3","data","invalidation"], _chart3);
  main.variable(observer()).define(["md"], _33);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer("chart2")).define("chart2", ["d3","data","invalidation"], _chart2);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer("chart1")).define("chart1", ["d3","data","invalidation"], _chart1);
  main.variable(observer()).define(["md"], _39);
  main.variable(observer()).define(["md"], _40);
  main.variable(observer("force")).define("force", ["d3","data","invalidation"], _force);
  main.variable(observer("legend")).define("legend", ["Plot","colors","Bills"], _legend);
  main.variable(observer("graph")).define("graph", ["Plot","csv"], _graph);
  main.variable(observer("project4_color")).define("project4_color", ["FileAttachment"], _project4_color);
  main.variable(observer()).define(["md"], _45);
  main.variable(observer()).define(["md"], _46);
  main.variable(observer()).define(["md"], _47);
  main.variable(observer()).define(["md"], _48);
  main.variable(observer("Bills")).define("Bills", _Bills);
  main.variable(observer("colors")).define("colors", _colors);
  main.variable(observer("csv")).define("csv", ["FileAttachment"], _csv);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer()).define(["md"], _54);
  main.variable(observer("_bill_percentage")).define("_bill_percentage", ["__query","FileAttachment","invalidation"], __bill_percentage);
  main.variable(observer("th_congress3")).define("th_congress3", ["__query","FileAttachment","invalidation"], _th_congress3);
  main.variable(observer()).define(["md"], _57);
  main.variable(observer()).define(["md"], _58);
  return main;
}
