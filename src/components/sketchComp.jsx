import p5 from "p5";
import React from "react";
const { useRef, useLayoutEffect } = React;

let w = window.innerWidth;
let h = window.innerHeight;
let pals = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff00ff",
    "#ffffff",
    "#ffff00",
    "#FDC00A"
]


export default function SketchComp() {
    let points = []
    let weight = 6;
    let randPal;
    let style = true;
    const containerRef = useRef();

    const Sketch = (p5, canvasParentRef) => {
        p5.setup = () => {

            p5.createCanvas(w, h).parent(canvasParentRef)
            p5.stroke(pals[0])

        }
        p5.draw = () => {
            p5.strokeWeight(weight)
            p5.noFill()
            let x = [p5.mouseX, p5.mouseY]
            points.push(x)
            p5.beginShape()
            for (let i = 0; i < points.length; i++) {
                if (style === true) {
                    p5.curveVertex(points[i][0], points[i][1])
                } else {
                    p5.ellipse(points[i][0], points[i][1], 3)
                }

            }
            p5.endShape()
        }
        p5.windowResized = () => {
            p5.resizeCanvas(window.innerWidth, window.innerHeight);
        }
        p5.keyPressed = () => {
            if (p5.keyCode === 90) {
                randPal = Math.floor(p5.random(7))
                p5.stroke(pals[randPal])
                console.log(randPal)
            }
            if (p5.keyCode === 81) {
                weight++
            }
            if (p5.keyCode === 57) {
                p5.clear()
                points.splice(1, 10)
            }
            if (p5.keyCode === 188) {
                p5.clear()
                style = !style
            }
        }

    }
    useLayoutEffect(
        () => {
            // Make sure the p5.js canvas is a child of the component in the DOM
            let s = new p5(Sketch, containerRef.current);

            // Remove the sketch when the component is removed/replaced
            return () => s.remove();
        },
        // This empty list tells React that this effect never needs to get re-rendered
        []
    );
    return (<div className="sketch-container" ref={containerRef}></div>);
}