import React, { Component } from "react";
import * as d3 from "d3";
import "./styles/styles.css";
import PoliceIcon from "./assets/police-icon.png";
import PoliceUnit from "./assets/police-unit.png";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
	content: {
		border: "1px solid black;",
	},
});

class BarChart extends Component {
	componentDidMount() {
		var params = {
			selector: "#svgChart",
			data: this.props.data,
			chartWidth: this.refs.canvas.clientWidth,
			chartHeight: "100%",
			funcs: {
				showMySelf: null,
				findInTree: null,
				reflectResults: null,
				departmentClick: null,
				back: null,
				toggleFullScreen: null,
				locate: null,
			},
		};
		this.drawOrganizationChart(params);
	}
	drawOrganizationChart(params) {
		params.funcs.showMySelf = showMySelf;
		params.funcs.expandAll = expandAll;
		params.funcs.back = back;
		params.funcs.toggleFullScreen = toggleFullScreen;
		params.funcs.locate = locate;

		var attrs = {
			EXPAND_SYMBOL: "\u002B",
			COLLAPSE_SYMBOL: "\u2212",
			selector: this.refs.canvas,
			root: params.data,
			width: params.chartWidth,
			height: params.chartHeight,
			index: 0,
			nodePadding: 9,
			collapseCircleRadius: 7,
			nodeHeight: 80,
			nodeWidth: 210,
			duration: 750,
			rootNodeTopMargin: 20,
			minMaxZoomProportions: [0.05, 3],
			linkLineSize: 180,
			collapsibleFontSize: "10px",
			userIcon: "\uf007",
			nodeStroke: "#ccc",
			nodeStrokeWidth: "1px",
		};

		var dynamic = {};
		dynamic.nodeImageWidth = (attrs.nodeHeight * 100) / 140;
		dynamic.nodeImageHeight = attrs.nodeHeight - 2 * attrs.nodePadding;
		dynamic.nodeTextLeftMargin = attrs.nodePadding * 2 + dynamic.nodeImageWidth;
		dynamic.rootNodeLeftMargin = attrs.width / 2;
		dynamic.nodePositionNameTopMargin =
			attrs.nodePadding + 8 + (dynamic.nodeImageHeight / 4) * 1;
		dynamic.nodeChildCountTopMargin =
			attrs.nodePadding + 14 + (dynamic.nodeImageHeight / 4) * 3;

		var tree = d3.layout
			.tree()
			.nodeSize([attrs.nodeWidth + 40, attrs.nodeHeight]);

		var diagonal = d3.svg.diagonal().projection(function (d) {
			return [d.x + attrs.nodeWidth / 2, d.y + attrs.nodeHeight / 2];
		});

		var zoomBehaviours = d3.behavior
			.zoom()
			.scaleExtent(attrs.minMaxZoomProportions)
			.on("zoom", redraw);

		var svg = d3
			.select(attrs.selector)
			.append("svg")
			.attr("width", attrs.width)
			.attr("height", attrs.height)
			.call(zoomBehaviours)
			.append("g")
			.attr("transform", "translate(" + attrs.width / 2 + "," + 20 + ")");
		//necessary so that zoom knows where to zoom and unzoom from
		zoomBehaviours.translate([
			dynamic.rootNodeLeftMargin,
			attrs.rootNodeTopMargin,
		]);

		attrs.root.x0 = 0;
		attrs.root.y0 = dynamic.rootNodeLeftMargin;

		if (params.mode != "department") {
			// adding unique values to each node recursively
			var uniq = 1;
			addPropertyRecursive(
				"uniqueIdentifier",
				function (v) {
					return uniq++;
				},
				attrs.root
			);
		}

		expand(attrs.root);
		if (attrs.root.children) {
			attrs.root.children.forEach(collapse);
		}

		update(attrs.root);

		d3.select(attrs.selector).style("height", attrs.height);

		var tooltip = d3
			.select("body")
			.append("div")
			.attr("class", "customTooltip-wrapper");

		function update(source, param) {
			// Compute the new tree layout.
			var nodes = tree.nodes(attrs.root).reverse(),
				links = tree.links(nodes);

			// Normalize for fixed-depth.
			nodes.forEach(function (d) {
				d.y = d.depth * attrs.linkLineSize;
			});

			// Update the nodes…
			var node = svg.selectAll("g.node").data(nodes, function (d) {
				return d.id || (d.id = ++attrs.index);
			});

			// Enter any new nodes at the parent's previous position.
			var nodeEnter = node
				.enter()
				.append("g")
				.attr("class", "node")
				.attr("transform", function (d) {
					return "translate(" + source.x0 + "," + source.y0 + ")";
				});

			var nodeGroup = nodeEnter.append("g").attr("class", "node-group");

			nodeGroup
				.append("rect")
				.attr("width", attrs.nodeWidth)
				.attr("height", attrs.nodeHeight)
				.attr("data-node-group-id", function (d) {
					return d.uniqueIdentifier;
				})
				.attr("class", function (d) {
					var res = "";
					if (d.isLoggedUser) res += "nodeRepresentsCurrentUser ";
					res +=
						d._children || d.children
							? "nodeHasChildren"
							: "nodeDoesNotHaveChildren";
					return res;
				});

			var collapsiblesWrapper = nodeEnter
				.append("g")
				.attr("data-id", function (v) {
					return v.uniqueIdentifier;
				});

			var collapsibleRects = collapsiblesWrapper
				.append("rect")
				.attr("class", "node-collapse-right-rect")
				.attr("height", attrs.collapseCircleRadius)
				.attr("fill", "black")
				.attr("x", attrs.nodeWidth - attrs.collapseCircleRadius)
				.attr("y", attrs.nodeHeight - 7)
				.attr("width", function (d) {
					if (d.children || d._children) return attrs.collapseCircleRadius;
					return 0;
				});

			var collapsibles = collapsiblesWrapper
				.append("circle")
				.attr("class", "node-collapse")
				.attr("cx", attrs.nodeWidth - attrs.collapseCircleRadius)
				.attr("cy", attrs.nodeHeight - 7)
				.attr("", setCollapsibleSymbolProperty);

			//hide collapse rect when node does not have children
			collapsibles
				.attr("r", function (d) {
					if (d.children || d._children) return attrs.collapseCircleRadius;
					return 0;
				})
				.attr("height", attrs.collapseCircleRadius);

			collapsiblesWrapper
				.append("text")
				.attr("class", "text-collapse")
				.attr("x", attrs.nodeWidth - attrs.collapseCircleRadius)
				.attr("y", attrs.nodeHeight - 3)
				.attr("width", attrs.collapseCircleRadius)
				.attr("height", attrs.collapseCircleRadius)
				.style("font-size", attrs.collapsibleFontSize)
				.attr("text-anchor", "middle")
				.style("font-family", "FontAwesome")
				.text(function (d) {
					return d.collapseText;
				});

			collapsiblesWrapper.on("click", click);

			nodeGroup
				.append("text")
				.attr("x", dynamic.nodeTextLeftMargin)
				.attr("y", attrs.nodePadding + 12)
				.style("overflow-wrap", "break-word")
				.attr("class", "emp-name")
				.attr("text-anchor", "left")
				.text(function (d) {
					return d.text.trim();
				})
				.call(wrap, 120);

			nodeGroup
				.append("text")
				.attr("x", dynamic.nodeTextLeftMargin)
				.attr("y", dynamic.nodePositionNameTopMargin)
				.attr("class", "emp-position-name")
				.attr("dy", ".35em")
				.attr("text-anchor", "left")
				.text(function (d) {
					var position = d.positionName.substring(0, 27);
					if (position.length < d.positionName.length) {
						position = position.substring(0, 24) + "...";
					}
					return position;
				});

			nodeGroup
				.append("text")
				.attr("x", dynamic.nodeTextLeftMargin)
				.attr("y", attrs.nodePadding + 10 + (dynamic.nodeImageHeight / 4) * 2)
				.attr("class", "emp-area")
				.attr("dy", "1.6em")
				.attr("text-anchor", "left")

				.text(function (d) {
					return "Fleets - " + d.fleetCount;
				});

			nodeGroup
				.append("defs")
				.append("svg:clipPath")
				.attr("id", "clip")
				.append("svg:rect")
				.attr("id", "clip-rect")
				.attr("rx", 3)
				.attr("x", attrs.nodePadding)
				.attr("y", 2 + attrs.nodePadding)
				.attr("width", dynamic.nodeImageWidth)
				.attr("fill", "none")
				.attr("height", dynamic.nodeImageHeight - 4);

			nodeGroup
				.append("svg:image")
				.attr("y", 2 + attrs.nodePadding)
				.attr("x", attrs.nodePadding)
				.attr("preserveAspectRatio", "none")
				.attr("width", dynamic.nodeImageWidth)
				.attr("height", dynamic.nodeImageHeight - 4)
				.attr("clip-path", "url(#clip)")
				.attr("xlink:href", function (v) {
					if (v.type === "user") return PoliceIcon;
					else if (v.type === "division") {
						return PoliceUnit;
					}
				});

			// Transition nodes to their new position.
			var nodeUpdate = node
				.transition()
				.duration(attrs.duration)
				.attr("transform", function (d) {
					return "translate(" + d.x + "," + d.y + ")";
				});

			//todo replace with attrs object
			nodeUpdate
				.select("rect")
				.attr("width", attrs.nodeWidth)
				.attr("height", attrs.nodeHeight)
				.attr("rx", 3)
				.attr("stroke", function (d) {
					if (param && d.uniqueIdentifier === param.locate) {
						return "#a1ceed";
					}
					return attrs.nodeStroke;
				})
				.attr("stroke-width", function (d) {
					if (param && d.uniqueIdentifiern === param.locate) {
						return 6;
					}
					return attrs.nodeStrokeWidth;
				});

			// Transition exiting nodes to the parent's new position.
			var nodeExit = node
				.exit()
				.transition()
				.duration(attrs.duration)
				.attr("transform", function (d) {
					return "translate(" + source.x + "," + source.y + ")";
				})
				.remove();

			nodeExit
				.select("rect")
				.attr("width", attrs.nodeWidth)
				.attr("height", attrs.nodeHeight);

			// Update the links…
			var link = svg.selectAll("path.link").data(links, function (d) {
				return d.target.id;
			});

			// Enter any new links at the parent's previous position.
			link
				.enter()
				.insert("path", "g")
				.attr("class", "link")
				.attr("x", attrs.nodeWidth / 2)
				.attr("y", attrs.nodeHeight / 2)
				.attr("d", function (d) {
					var o = {
						x: source.x0,
						y: source.y0,
					};
					return diagonal({
						source: o,
						target: o,
					});
				});

			// Transition links to their new position.
			link.transition().duration(attrs.duration).attr("d", diagonal);

			// Transition exiting nodes to the parent's new position.
			link
				.exit()
				.transition()
				.duration(attrs.duration)
				.attr("d", function (d) {
					var o = {
						x: source.x,
						y: source.y,
					};
					return diagonal({
						source: o,
						target: o,
					});
				})
				.remove();

			// Stash the old positions for transition.
			nodes.forEach(function (d) {
				d.x0 = d.x;
				d.y0 = d.y;
			});

			if (param && param.locate) {
				var x;
				var y;

				nodes.forEach(function (d) {
					if (d.uniqueIdentifier === param.locate) {
						x = d.x;
						y = d.y;
					}
				});

				// normalize for width/height
				var new_x = -x + window.innerWidth / 2;
				var new_y = -y + window.innerHeight / 2;

				// move the main container g
				svg.attr("transform", "translate(" + new_x + "," + new_y + ")");
				zoomBehaviours.translate([new_x, new_y]);
				zoomBehaviours.scale(1);
			}

			if (param && param.centerMySelf) {
				var x;
				var y;

				nodes.forEach(function (d) {
					if (d.isLoggedUser) {
						x = d.x;
						y = d.y;
					}
				});

				// normalize for width/height
				var new_x = -x + window.innerWidth / 2;
				var new_y = -y + window.innerHeight / 2;

				// move the main container g
				svg.attr("transform", "translate(" + new_x + "," + new_y + ")");
				zoomBehaviours.translate([new_x, new_y]);
				zoomBehaviours.scale(1);
			}
		}

		// Toggle children on click.
		function click(d) {
			d3.select(this)
				.select("text")
				.text(function (dv) {
					if (dv.collapseText == attrs.EXPAND_SYMBOL) {
						dv.collapseText = attrs.COLLAPSE_SYMBOL;
					} else {
						if (dv.children) {
							dv.collapseText = attrs.EXPAND_SYMBOL;
						}
					}
					return dv.collapseText;
				});

			if (d.children) {
				d._children = d.children;
				d.children = null;
			} else {
				d.children = d._children;
				d._children = null;
			}
			update(d);
		}

		//########################################################

		//Redraw for zoom
		function redraw() {
			//console.log("here", d3.event.translate, d3.event.scale);
			svg.attr(
				"transform",
				"translate(" +
					d3.event.translate +
					")" +
					" scale(" +
					d3.event.scale +
					")"
			);
		}

		// #############################   Function Area #######################
		function wrap(text, width) {
			text.each(function () {
				var text = d3.select(this),
					words = text.text().split(/\s+/).reverse(),
					word,
					line = [],
					lineNumber = 0,
					lineHeight = 1.1, // ems
					x = text.attr("x"),
					y = text.attr("y"),
					dy = 0, //parseFloat(text.attr("dy")),
					tspan = text
						.text(null)
						.append("tspan")
						.attr("x", x)
						.attr("y", y)
						.attr("dy", dy + "em");
				while ((word = words.pop())) {
					line.push(word);
					tspan.text(line.join(" "));
					if (tspan.node().getComputedTextLength() > width) {
						line.pop();
						tspan.text(line.join(" "));
						line = [word];
						tspan = text
							.append("tspan")
							.attr("x", x)
							.attr("y", y)
							.attr("dy", ++lineNumber * lineHeight + dy + "em")
							.text(word);
					}
				}
			});
		}

		function addPropertyRecursive(
			propertyName,
			propertyValueFunction,
			element
		) {
			if (element[propertyName]) {
				element[propertyName] =
					element[propertyName] + " " + propertyValueFunction(element);
			} else {
				element[propertyName] = propertyValueFunction(element);
			}
			if (element.children) {
				element.children.forEach(function (v) {
					addPropertyRecursive(propertyName, propertyValueFunction, v);
				});
			}
			if (element._children) {
				element._children.forEach(function (v) {
					addPropertyRecursive(propertyName, propertyValueFunction, v);
				});
			}
		}

		function back() {
			show([".btn-action"]);
			hide([
				".customTooltip-wrapper",
				".btn-action.btn-back",
				".department-information",
			]);
			clear(params.selector);

			params.mode = "full";
			params.data = deepClone(params.pristinaData);
			//this.drawOrganizationChart(params);
		}

		function expandAll() {
			//expand(root);
			//update(root);
		}

		function expand(d) {
			if (d.children) {
				d.children.forEach(expand);
			}

			if (d._children) {
				d.children = d._children;
				d.children.forEach(expand);
				d._children = null;
			}

			if (d.children) {
				// if node has children and it's expanded, then  display -
				setToggleSymbol(d, attrs.COLLAPSE_SYMBOL);
			}
		}

		function collapse(d) {
			if (d._children) {
				d._children.forEach(collapse);
			}
			if (d.children) {
				d._children = d.children;
				d._children.forEach(collapse);
				d.children = null;
			}

			if (d._children) {
				// if node has children and it's collapsed, then  display +
				setToggleSymbol(d, attrs.EXPAND_SYMBOL);
			}
		}

		function setCollapsibleSymbolProperty(d) {
			if (d._children) {
				d.collapseText = attrs.EXPAND_SYMBOL;
			} else if (d.children) {
				d.collapseText = attrs.COLLAPSE_SYMBOL;
			}
		}

		function setToggleSymbol(d, symbol) {
			d.collapseText = symbol;
			d3.select("*[data-id='" + d.uniqueIdentifier + "']")
				.select("text")
				.text(symbol);
		}

		/* recursively find logged user in subtree */
		function findmySelf(d) {
			if (d.isLoggedUser) {
				expandParents(d);
			} else if (d._children) {
				d._children.forEach(function (ch) {
					ch.parent = d;
					findmySelf(ch);
				});
			} else if (d.children) {
				d.children.forEach(function (ch) {
					ch.parent = d;
					findmySelf(ch);
				});
			}
		}

		function locateRecursive(d, id) {
			if (d.uniqueIdentifier == id) {
				expandParents(d);
			} else if (d._children) {
				d._children.forEach(function (ch) {
					ch.parent = d;
					locateRecursive(ch, id);
				});
			} else if (d.children) {
				d.children.forEach(function (ch) {
					ch.parent = d;
					locateRecursive(ch, id);
				});
			}
		}

		/* expand current nodes collapsed parents */
		function expandParents(d) {
			while (d.parent) {
				d = d.parent;
				if (!d.children) {
					d.children = d._children;
					d._children = null;
					setToggleSymbol(d, attrs.COLLAPSE_SYMBOL);
				}
			}
		}

		function toggleFullScreen() {
			// if ((document.fullScreenElement && document.fullScreenElement !== null) ||
			// (!document.mozFullScreen && !document.webkitIsFullScreen)) {
			// if (document.documentElement.requestFullScreen) {
			//     document.documentElement.requestFullScreen();
			// } else if (document.documentElement.mozRequestFullScreen) {
			//     document.documentElement.mozRequestFullScreen();
			// } else if (document.documentElement.webkitRequestFullScreen) {
			//     document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			// }
			// d3.select(params.selector + ' svg').attr('width', screen.width).attr('height', screen.height);
			// } else {
			// if (document.cancelFullScreen) {
			//     document.cancelFullScreen();
			// } else if (document.mozCancelFullScreen) {
			//     document.mozCancelFullScreen();
			// } else if (document.webkitCancelFullScreen) {
			//     document.webkitCancelFullScreen();
			// }
			// d3.select(params.selector + ' svg').attr('width', params.chartWidth).attr('height', params.chartHeight);
			// }
		}

		function showMySelf() {
			/* collapse all and expand logged user nodes */
			if (!attrs.root.children) {
				if (!attrs.root.isLoggedUser) {
					attrs.root.children = attrs.root._children;
				}
			}
			if (attrs.root.children) {
				attrs.root.children.forEach(collapse);
				attrs.root.children.forEach(findmySelf);
			}

			update(attrs.root, { centerMySelf: true });
		}

		//locateRecursive
		function locate(id) {
			/* collapse all and expand logged user nodes */
			if (!attrs.root.children) {
				if (!attrs.root.uniqueIdentifier == id) {
					attrs.root.children = attrs.root._children;
				}
			}
			if (attrs.root.children) {
				attrs.root.children.forEach(collapse);
				attrs.root.children.forEach(function (ch) {
					locateRecursive(ch, id);
				});
			}

			update(attrs.root, { locate: id });
		}

		function deepClone(item) {
			return JSON.parse(JSON.stringify(item));
		}

		function show(selectors) {
			display(selectors, "initial");
		}

		function hide(selectors) {
			display(selectors, "none");
		}

		function display(selectors, displayProp) {
			selectors.forEach(function (selector) {
				var elements = getAll(selector);
				elements.forEach(function (element) {
					element.style.display = displayProp;
				});
			});
		}

		function clear(selector) {
			// set(selector, '');
		}

		function get(selector) {
			return document.querySelector(selector);
		}

		function getAll(selector) {
			return document.querySelectorAll(selector);
		}
	}
	render() {
		const { classes } = this.props;
		return <div ref="canvas" className={classes.content}></div>;
	}
}
export default withStyles(styles)(BarChart);
