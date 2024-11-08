import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7.0.0/dist/d3.min.js";

// Define the visualization
export default function define(runtime, observer) {
  const main = runtime.module();

  main.variable(observer()).define(["md"], () => md`# Project 4`);

  main.variable(observer("graph")).define("graph", ["Plot", "csvData"], (Plot, csvData) =>
    Plot.plot({
      title: 'Vote Type in the 1st Session of the 117th Congress',
      marks: [
        Plot.ruleY([0]),
        Plot.barY(
          csvData, 
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
  );

  main.variable(observer("force")).define("force", ["d3", "jsonData", "invalidation"], (d3, jsonData, invalidation) => {
    const width = 1400;
    const height = 1000;

    const color = d3.scaleOrdinal()
        .domain(["D", "R", "I"])
        .range(["#6A8DFF", "#FF6A6A", "#E4D064"]);

    const links = jsonData.links.map(d => ({...d}));
    const nodes = jsonData.nodes.map(d => ({...d}));

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
  });

  main.variable(observer("csvData")).define("csvData", async () => await d3.csv("117_Bill_Percentage.csv"));
  main.variable(observer("jsonData")).define("jsonData", async () => await d3.json("117th_congress3.json"));

  return main;
}
