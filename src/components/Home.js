import React, { Component } from 'react';
import EngagementBar from './EngagementBar.js';
import Navbar from "./Navbar.js";
import Video from './Video.js';

function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed milliseconds since start of scrolling.
    var time = timestamp - start;
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  })
}

function getElementY(query) {
  doScrolling((window.pageYOffset + document.querySelector(query).getBoundingClientRect().top), 2);
}

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function inViewportCall(dir) {
  var fullELem = document.getElementsByClassName('videoItem');
  for (var i = 0; i < fullELem.length; i++) {
    if (isInViewport(fullELem[i])) {
        if (dir) {
          if ((fullELem[i] - 1) < 0) {
            getElementY(fullELem[i - 1]);
          }
        } else {
          if (fullELem[i] < (fullELem.length - 1)) {
            getElementY(fullELem[i + 1]);
          }
        }

    }

  }
}



document.onkeydown = function (e) {
  var keyCode = e.keyCode;
  if(keyCode == 38) {
    inViewportCall(true);
  } else if(keyCode == 40) {
    inViewportCall(false);
    console.log('going down')
  }
};



class Home extends Component
{
  render()
  {
    return(
      <div className="videoContainer">
      <Navbar/>
      <span className="videoItem"><Video/></span>
      <span className="videoItem"><Video/></span>
      <span className="videoItem"><Video/></span>
      <span className="videoItem"><Video/></span>
      <span className="videoItem"><Video/></span>
      </div>
    )
  }
}

export default Home;

