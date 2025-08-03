let currentScene = 0;

let dataset = [];

const sceneInfo = [
  {
    title: "Streaming in 2024",
    subtitle: "",
    takeaway: `As we reach the midpoint of 2024, one thing is clear: no single platform defines a hit song. Today’s music success is shaped by a vibrant, interconnected ecosystem — where Spotify streaming, YouTube virality, and TikTok trends all play distinct but powerful roles. This story explores how artists rise across these platforms, how trends evolve month by month, and how content characteristics like explicit lyrics factor into the mix. Using data from multiple sources, we unpack the multi-platform forces driving global popularity. Let’s begin by looking at the top 10 artists who have made the biggest impact so far this year.`
  },
  {
    title: "Scene 1: Top 10 Artists of 2024",
    subtitle: "These artists dominated the streaming charts this year.",
    takeaway: ""
  },
  {
    title: "Scene 2: Monthly Streaming Trends & Top Platform",
    subtitle: "How did total streams evolve monthly and which platform led?",
    takeaway: "Streaming activity varied month to month, with different platforms rising to prominence."
  },
  {
    title: "Scene 3: Explicit vs Clean Songs",
    subtitle: "Content preferences among top streamed songs in 2024.",
    takeaway: "Listeners showed clear content preferences, regardless of platform — with lyrical tone playing a role in popularity."
  },
  {
    title: "Explore More: Dive into Your Favorite Artist's Tracks",
    subtitle: "Select an artist to explore their top tracks and stats.",
    takeaway: "Explore detailed, platform-specific performance for your favorite artists — revealing how success differs across Spotify, YouTube, and TikTok."
  }
];


// Purpose: Format a number using D3 shorthand, replacing "G" with "B" for billions
// Input: A number (e.g., 1200000000)
// Output: A formatted string (e.g., "1.2B")
function formatWithBillion(d) {
  const formatted = d3.format(".2s")(d);
  return formatted.replace("G", "B");
}


// Purpose: Load and clean the dataset, parse numbers and booleans
// Input: Path to CSV and a row parser
// Output: Populates global 'dataset' variable with cleaned data
d3.csv("Most Streamed Spotify Songs 2024.csv", (d) => {
  d["Spotify Streams"] = +d["Spotify Streams"].replace(/,/g, "");
  d["YouTube Views"] = +d["YouTube Views"].replace(/,/g, "");
  d["TikTok Views"] = +d["TikTok Views"].replace(/,/g, "");
  d["Explicit Track"] = +d["Explicit Track"] === 1; // Convert 1/0 to true/false
  return d;
}).then((data) => {
  dataset = data;
  renderScene(0); // Show intro scene on load
});


// Purpose: Display the correct visualization scene based on user navigation
// Input: sceneIndex (number, e.g., 0 to 4)
// Output: DOM update (scene title, takeaway, visualization)
function renderScene(sceneIndex) {
  if (sceneIndex !== 0) {
    d3.select("#scene-title").text(sceneInfo[sceneIndex].title);
  } else {
    d3.select("#scene-title").text("");  // Clear it for Scene 0
  }

  d3.select("#scene-subtitle").text(sceneInfo[sceneIndex].subtitle);
  if (sceneIndex === 0) {
    d3.select("#scene-takeaway").style("display", "none");
  } else {
    d3.select("#scene-takeaway")
      .style("display", "block")
      .text(sceneInfo[sceneIndex].takeaway);
  }

  d3.select("#scene-progress")
    .text(`Scene ${sceneIndex + 1} of ${sceneInfo.length}`);
  d3.select("#viz").html("");

  if (sceneIndex === 0) {
    d3.select("#viz").html(""); // Clear existing content

    // Create styled container for intro
    const container = d3.select("#viz")
      .append("div")
      .attr("class", "scene0-container");

    container.append("p")
      .attr("class", "intro-label")
      .text("Introduction");

    container.append("p")
      .attr("class", "scene0-takeaway")
      .text(sceneInfo[sceneIndex].takeaway);

  } else if (sceneIndex === 1) {
    scene1();
  } else if (sceneIndex === 2) {
    scene2();
  } else if (sceneIndex === 3) {
    scene3();
  } else if (sceneIndex === 4) {
    scene4();
  }
}

// Purpose: Render horizontal bar chart of top 10 artists by Spotify streams
// Input: None (uses global dataset)
// Output: D3 bar chart + annotation for top artist
function scene1() {
  const margin = { top: 60, right: 120, bottom: 40, left: 150 };
  const width = 800 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const svg = d3
    .select("#viz")
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .classed("responsive-svg", true)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Group by artist and sum Spotify Streams
  const artistStreamCounts = d3.rollups(
    dataset,
    (v) => d3.sum(v, (d) => d["Spotify Streams"]),
    (d) => d.Artist
  );

  // Sort and get top 10
  const topArtists = artistStreamCounts
    .sort((a, b) => d3.descending(a[1], b[1]))
    .slice(0, 10);

  // console.log("Top artist annotation:", topArtists[0]);

  const x = d3
    .scaleLinear()
    .domain([0, d3.max(topArtists, (d) => d[1])])
    .range([0, width]);

  const y = d3
    .scaleBand()
    .domain(topArtists.map((d) => d[0]))
    .range([0, height])
    .padding(0.1);

  const tooltip = d3.select("#tooltip");

  svg
    .selectAll("rect")
    .data(topArtists)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d) => y(d[0]))
    .attr("width", (d) => x(d[1]))
    .attr("height", y.bandwidth())
    .attr("fill", "#286FB4")
    .on("mouseover", function (event, d) {
      d3.select(this).attr("fill", "#DFAC73");
      tooltip
        .html(`<strong>${d[0]}</strong><br/>${d3.format(",")(d[1])} streams`)
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 28 + "px")
        .classed("hidden", false);
    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function () {
      d3.select(this).attr("fill", "#286FB4");
      tooltip.classed("hidden", true);
    });

  // Axes
  svg.append("g").call(d3.axisLeft(y));

  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(5).tickFormat(formatWithBillion));

  // Chart title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "#286FB4")
    .text("Top 10 Artists by Total Spotify Streams in 2024");

  const annotations = [
    {
      note: {
        label: `#1 with ${d3.format(".2s")(topArtists[0][1]).replace("G", "B")} streams`,
        title: topArtists[0][0],
        wrap: 150,
        align: "middle"
      },
      x: x(topArtists[0][1]) + 10,
      y: y(topArtists[0][0]) + y.bandwidth() / 2,
      dy: -20,
      dx: 70,
      color: "#DFAC73",
      subject: {
        radius: 8,
        radiusPadding: 5
      }
    }
  ];

  const makeAnnotations = d3.annotation()
    .type(d3.annotationLabel)
    .annotations(annotations)
    .notePadding(10);

  svg.append("g")
    .call(makeAnnotations)
    .attr("class", "annotation-group")
    .style("opacity", 0)
    .transition()
    .duration(1000)
    .style("opacity", 1)
    .selectAll("text")
    .style("font-size", "12px")
    .style("text-anchor", "middle")
}

// Purpose: Show streaming trends over months, identify top platform monthly
// Input: None (uses global dataset)
// Output: Line chart with tooltips, platform labels, and peak annotation
function scene2() {
  const margin = { top: 60, right: 40, bottom: 70, left: 80 };
  const width = 700 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  const svg = d3
    .select("#viz")
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom + 30}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .classed("responsive-svg", true)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const parseDate = d3.timeParse("%m/%d/%Y");

  // Aggregate streams by month and platform
  const monthlyPlatformMap = new Map();

  dataset.forEach(d => {
    const date = parseDate(d["Release Date"]);
    if (!date || date.getFullYear() !== 2024) return;

    const monthYear = d3.timeFormat("%Y-%m")(date);
    const platform = d.Platform || "Spotify";

    if (!monthlyPlatformMap.has(monthYear)) {
      monthlyPlatformMap.set(monthYear, new Map());
    }
    const platformMap = monthlyPlatformMap.get(monthYear);
    platformMap.set(platform, (platformMap.get(platform) || 0) + d["Spotify Streams"]);
  });

  // Convert monthlyPlatformMap to an array with top platform info
  const monthlyData = Array.from(monthlyPlatformMap, ([monthYear, platformMap]) => {
    const date = d3.timeParse("%Y-%m")(monthYear);
    let topPlatform = null;
    let maxStreams = 0;
    for (const [platform, streams] of platformMap.entries()) {
      if (streams > maxStreams) {
        maxStreams = streams;
        topPlatform = platform;
      }
    }
    const totalStreams = Array.from(platformMap.values()).reduce((a, b) => a + b, 0);
    return { date, totalStreams, topPlatform };
  }).sort((a, b) => a.date - b.date);

  // Scales
  const x = d3
    .scaleTime()
    .domain(d3.extent(monthlyData, d => d.date))
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(monthlyData, d => d.totalStreams) * 1.1])
    .range([height, 0]);

  // Line generator
  const line = d3
    .line()
    .x(d => x(d.date))
    .y(d => y(d.totalStreams))
    .curve(d3.curveMonotoneX);

  // X axis
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(d3.timeMonth.every(1)).tickFormat(d3.timeFormat("%b")))
    .selectAll("text")
    .attr("transform", "translate(0,0)")
    .style("text-anchor", "middle");

  // Y axis
  svg.append("g").call(d3.axisLeft(y).ticks(6).tickFormat(formatWithBillion));

  // Chart title
  // Static annotation text inside the chart
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + 60) 
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("fill", "#444")
    .style("font-style", "italic")
    .text("Spotify was the lead platform so far through the year.");

  // Draw line path
  svg
    .append("path")
    .datum(monthlyData)
    .attr("fill", "none")
    .attr("stroke", "#286FB4")
    .attr("stroke-width", 3)
    .attr("d", line);

  // Tooltip div
  const tooltip = d3.select("#tooltip");

  // Draw circles for each data point with tooltip interaction
  svg
    .selectAll("circle")
    .data(monthlyData)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.date))
    .attr("cy", d => y(d.totalStreams))
    .attr("r", 5)
    .attr("fill", "#DFAC73")
    .on("mouseover", (event, d) => {
      tooltip
        .html(
          `<strong>${d3.timeFormat("%B %Y")(d.date)}</strong><br/>
           Total Streams: ${d3.format(",")(d.totalStreams)}<br/>
           Top Platform: ${d.topPlatform}`
        )
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 30 + "px")
        .classed("hidden", false);
    })
    .on("mousemove", (event) => {
      tooltip
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 30 + "px");
    })
    .on("mouseout", () => {
      tooltip.classed("hidden", true);
    });

  // Show top platform labels below x-axis ticks
  svg.selectAll(".top-platform-label")
    .data(monthlyData)
    .enter()
    .append("text")
    .attr("class", "top-platform-label")
    .attr("x", d => x(d.date))
    .attr("y", height + 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .attr("fill", "#DFAC73")
    .text(d => d.topPlatform);

  // Identify April peak
  const aprilPeak = monthlyData.reduce((max, d) => {
    return d.totalStreams > max.totalStreams ? d : max;
  }, monthlyData[0]);

  const aprilX = x(aprilPeak.date);
  const aprilY = y(aprilPeak.totalStreams);

  const annotation = d3.annotation()
    .type(d3.annotationLabel)
    .annotations([
      {
        note: {
          title: "Peak Month",
          label: `April saw the highest total streams of ${formatWithBillion(aprilPeak.totalStreams)}`,
          align: "middle",
          wrap: 160
        },
        x: aprilX,
        y: aprilY,
        dy: -40,
        dx: 60,
        subject: { radius: 5, radiusPadding: 4 },
        color: "#DFAC73"
      }
    ])
    .notePadding(10);

  svg.append("g")
    .call(annotation)
    .attr("class", "annotation-group")
    .style("opacity", 0)
    .transition()
    .duration(1000)
    .style("opacity", 1);

  svg.selectAll(".annotation-note-title")
    .style("font-size", "12px");

  svg.selectAll(".annotation-note-label")
    .style("font-size", "11px");
}

// Purpose: Compare counts of explicit vs clean songs in dataset
// Input: None (uses global dataset)
// Output: Vertical bar chart with tooltip + descriptive annotation
function scene3() {
  const margin = { top: 60, right: 30, bottom: 50, left: 60 };
  const width = 500 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Clear previous annotation text if any
  d3.select("#annotation-text").remove();

  const svg = d3.select("#viz")
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .classed("responsive-svg", true)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const explicitCounts = d3.rollups(dataset, v => v.length, d => d["Explicit Track"]).sort((a, b) => d3.ascending(a[0], b[0]));

  const x = d3.scaleBand().domain(explicitCounts.map(d => d[0])).range([0, width]).padding(0.4);
  const y = d3.scaleLinear().domain([0, d3.max(explicitCounts, d => d[1])]).range([height, 0]);

  const tooltip = d3.select("#tooltip");

  svg.selectAll("rect")
    .data(explicitCounts)
    .enter()
    .append("rect")
    .attr("x", d => x(d[0]))
    .attr("y", d => y(d[1]))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d[1]))
    .attr("fill", d => (d[0] ? "#D9534F" : "#5BC0DE"))
    .on("mouseover", (event, d) => {
      tooltip
        .html(`<strong>${d[0] ? "Explicit" : "Clean"}</strong><br/>${d[1]} songs`)
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 30 + "px")
        .classed("hidden", false);
    })
    .on("mousemove", event => {
      tooltip.style("left", event.pageX + 10 + "px").style("top", event.pageY - 30 + "px");
    })
    .on("mouseout", () => tooltip.classed("hidden", true));

  svg.append("g").call(d3.axisLeft(y).ticks(5));
  svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x).tickFormat(d => d ? "Explicit" : "Clean"));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "#286FB4")
    .text("Count of Explicit vs Clean Songs");

  // Append annotation text below the SVG, inside #viz but above buttons
  d3.select("#viz")
    .append("p")
    .attr("id", "annotation-text")
    .style("font-size", "13px")
    .style("color", "#5A5A5A")
    .style("font-style", "italic")
    .style("text-align", "center")
    .style("margin", "10px 0 20px 0")
    .text("Clean songs dominated streaming content in 2024.");
}

// Purpose: Let users explore top 10 tracks for selected artist/platform
// Input: Dropdown selections (artist + platform)
// Output: Interactive bar chart that updates on selection
function scene4() {
  const margin = { top: 80, right: 30, bottom: 60, left: 200 };
  const svgWidth = 800;
  const svgHeight = 600;

  const artistNames = Array.from(new Set(dataset.map(d => d.Artist))).sort();


  // Clear any existing UI
  d3.select("#viz").html("");

  // Container for artist dropdown
  const container = d3.select("#viz")
    .append("div")
    .attr("id", "artist-select-container")
    .style("margin-bottom", "10px")
    .style("display", "flex")
    .style("flex-direction", "column")
    .style("max-width", "350px");

  container.append("label")
    .attr("for", "artistDropdown")
    .style("font-weight", "bold")
    .style("font-size", "16px")
    .style("margin-bottom", "4px")
    .text("Select Artist:");

  const artistDropdown = container.append("select")
    .attr("id", "artistDropdown")
    .style("font-size", "16px")
    .style("padding", "6px 12px")
    .style("border-radius", "6px")
    .style("border", "1px solid #ccc")
    .style("box-shadow", "0 2px 5px rgba(0,0,0,0.1)")
    .style("width", "250px")
    .style("max-width", "90%")
    .selectAll("option")
    .data(artistNames)
    .enter()
    .append("option")
    .text(d => d)
    .attr("value", d => d);

  // Platform dropdown
  const platformOptions = [
    { label: "Spotify Streams", value: "Spotify Streams" },
    { label: "YouTube Views", value: "YouTube Views" },
    { label: "TikTok Views", value: "TikTok Views" },
    // Add more platforms here if you want
  ];

  const platformContainer = container.append("div")
    .style("margin-top", "10px");

  platformContainer.append("label")
    .attr("for", "platformDropdown")
    .style("font-weight", "bold")
    .style("font-size", "16px")
    .style("margin-bottom", "4px")
    .text("Select Platform:");

  const platformDropdown = platformContainer.append("select")
    .attr("id", "platformDropdown")
    .style("font-size", "16px")
    .style("padding", "6px 12px")
    .style("border-radius", "6px")
    .style("border", "1px solid #ccc")
    .style("box-shadow", "0 2px 5px rgba(0,0,0,0.1)")
    .style("width", "250px")
    .style("max-width", "90%")
    .selectAll("option")
    .data(platformOptions)
    .enter()
    .append("option")
    .text(d => d.label)
    .attr("value", d => d.value);

  // Create SVG for bar chart
  const svg = d3.select("#viz")
    .append("svg")
    .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .classed("responsive-svg", true);

  const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  // Title
  const title = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", "20px")
    .attr("fill", "#286FB4");

  // Function to update chart based on selections
  function updateChart(artist, platform) {
    const filtered = dataset.filter(d => d.Artist === artist);

    // Sort by selected platform metric (convert to number, remove commas)
    const topTracks = filtered
      .sort((a, b) =>
        +b[platform].toString().replace(/,/g, '') - +a[platform].toString().replace(/,/g, '')
      )
      .slice(0, 10);

    const x = d3.scaleLinear()
      .domain([0, d3.max(topTracks, d => +d[platform].toString().replace(/,/g, ''))])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(topTracks.map(d => d.Track))
      .range([0, height])
      .padding(0.2);

    title.text(`Top 10 Tracks for ${artist} (${platform})`);

    // Clear previous chart elements
    chartGroup.selectAll(".x-axis").remove();
    chartGroup.selectAll(".y-axis").remove();
    chartGroup.selectAll(".x-label").remove();
    chartGroup.selectAll(".y-label").remove();
    chartGroup.selectAll(".bar-label").remove();

    // Axes
    chartGroup.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("font-weight", "bold")
      .style("font-size", "14px")
      .call(g => g.each(function () {
        const el = d3.select(this);
        const text = el.text();
        if (text.length > 30) {
          el.text(text.slice(0, 27) + "…");
          el.append("title").text(text);
        }
      }));

    chartGroup.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5).tickFormat(formatWithBillion))
      .selectAll("text")
      .style("font-weight", "bold")
      .style("font-size", "14px");

    // Axis labels
    chartGroup.append("text")
      .attr("class", "x-label")
      .attr("x", width / 2)
      .attr("y", height + 50)
      .attr("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("fill", "#286FB4")
      .text(platform);

    chartGroup.append("text")
      .attr("class", "y-label")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 20)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("fill", "#286FB4")
      .text("Track");

    // Bars
    const bars = chartGroup.selectAll("rect").data(topTracks, d => d.Track);

    bars.exit()
      .transition()
      .duration(600)
      .attr("width", 0)
      .remove();

    bars.transition()
      .duration(800)
      .attr("y", d => y(d.Track))
      .attr("height", y.bandwidth())
      .attr("width", d => x(+d[platform].toString().replace(/,/g, '')))
      .attr("fill", "#286FB4");

    bars.enter()
      .append("rect")
      .attr("y", d => y(d.Track))
      .attr("height", y.bandwidth())
      .attr("x", 0)
      .attr("width", 0)
      .attr("fill", "#286FB4")
      .on("mouseover", function (event, d) {
        d3.select(this).attr("fill", "#DFAC73");
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "#286FB4");
      })
      .transition()
      .duration(800)
      .attr("width", d => x(+d[platform].toString().replace(/,/g, '')));

    // Labels inside bars
    chartGroup.selectAll(".bar-label")
      .data(topTracks, d => d.Track)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr("y", d => y(d.Track) + y.bandwidth() / 2 + 5)
      .attr("x", d => {
        const width = x(+d[platform].toString().replace(/,/g, ''));
        return width > 60 ? width - 10 : width + 5;
      })
      .attr("text-anchor", d => x(+d[platform].toString().replace(/,/g, '')) > 60 ? "end" : "start")
      .style("fill", d => x(+d[platform].toString().replace(/,/g, '')) > 60 ? "white" : "#333")
      .style("font-weight", "bold")
      .style("font-size", "13px")
      .text(d => d3.format(",")(d[platform]));
  }

  // Initialize with default values
  const initialArtist = artistNames.includes("Rihanna") ? "Rihanna" : artistNames[0];
  const initialPlatform = platformOptions[0].value;

  updateChart(initialArtist, initialPlatform);

  // Event listeners on dropdowns
  d3.select("#artistDropdown").on("change", function () {
    const selectedArtist = d3.select(this).property("value");
    const selectedPlatform = d3.select("#platformDropdown").property("value");
    updateChart(selectedArtist, selectedPlatform);
  });

  d3.select("#platformDropdown").on("change", function () {
    const selectedPlatform = d3.select(this).property("value");
    const selectedArtist = d3.select("#artistDropdown").property("value");
    updateChart(selectedArtist, selectedPlatform);
  });
}

// Purpose: Move forward one scene
function nextScene() {
  if (currentScene < sceneInfo.length - 1) {
    currentScene++;
    renderScene(currentScene);
  }
}

// Purpose: Move backward one scene
function previousScene() {
  if (currentScene > 0) {
    currentScene--;
    renderScene(currentScene);
  }
}

// Initial render
renderScene(currentScene);

// Setup button handlers
d3.select("#nextBtn").on("click", nextScene);
d3.select("#prevBtn").on("click", previousScene);
