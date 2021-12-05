import { useEffect, useState } from "react";

function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function MFormatter(num) {
  return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M' : Math.sign(num)*Math.abs(num)
}

export function numFormatter(num) {
  return num >= 1000000 ? MFormatter(num) : kFormatter(num)
} 

export function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    let computedInterval = Math.floor(interval)
    return `${computedInterval} ${computedInterval > 1 ? " years" : " year"}`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    let computedInterval = Math.floor(interval)
    return `${computedInterval} ${computedInterval > 1 ? " months" : " month"}`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    let computedInterval = Math.floor(interval)
    return `${computedInterval} ${computedInterval > 1 ? " days" : " day"}`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    let computedInterval = Math.floor(interval)
    return `${computedInterval} ${computedInterval > 1 ? " hours" : " hour"}`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    let computedInterval = Math.floor(interval)
    return `${computedInterval} ${computedInterval > 1 ? " minutes" : " minute"}`;
  }
  let computedInterval = Math.floor(seconds)
  return `${computedInterval} ${computedInterval > 1 ? " seconds" : " second"}`;
}

export function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

export const isDescendant = function (parent, child) {
  let node = child.parentNode;
  while (node) {
      if (node === parent) {
          return true;
      }

      // Traverse up to the parent
      node = node.parentNode;
  }

  // Go up until the root but couldn't find the `parent`
  return false;
};