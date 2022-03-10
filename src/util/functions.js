import { useState, useEffect, useLayoutEffect } from "react";

const body = document.body;
let scrollPosition = 0;

export const getCookie = name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts
      .pop()
      .split(";")
      .shift();
  }
  return "en";
};

export const getCookieWithPromise = async name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return new Promise(resolve => {
    if (parts.length === 2) {
      resolve(
        parts
          .pop()
          .split(";")
          .shift()
      );
    } else {
      resolve("en");
    }
  });
};

export function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export const createID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const areArraysEqual = (a1, a2) => {
  if (a1?.length !== a2?.length) return false;
  const objectIteration = object => {
    const result = [];
    const objectReduce = obj => {
      for (let i in obj) {
        if (typeof obj[i] !== "object") {
          result.push(`${i}${obj[i]}`);
        } else {
          objectReduce(obj[i]);
        }
      }
    };
    objectReduce(object);
    return result;
  };
  const reduceArray1 = a1.map(item => {
    if (typeof item !== "object") return item;
    return objectIteration(item).join("");
  });
  const reduceArray2 = a2.map(item => {
    if (typeof item !== "object") return item;
    return objectIteration(item).join("");
  });
  const compare = reduceArray1?.map(item => reduceArray2.includes(item));
  return compare?.reduce((acc, item) => acc + Number(item), 0) === a1?.length;
};

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export const getNameFromList = (lists, listName, id) => {
  let finalName = "";
  lists?.data?.forEach(listItem => {
    if (Object.keys(listItem)[0] === listName) {
      const name = Object.values(listItem)[0].filter(item => item.id === id)[0];
      finalName = name?.text;
    }
  });
  return finalName;
};

export const enableScroll = () => {
  body.style.removeProperty("overflow");
  body.style.removeProperty("position");
  body.style.removeProperty("top");
  body.style.removeProperty("width");
  if(detectMi())
  {
    document.getElementById("display").style.overflowX="hidden"

  }
  //window.scrollTo(0, scrollPosition);
};

export const disableScroll = () => {
  scrollPosition = window.pageYOffset;
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollPosition}px`;
  body.style.width = "100%";
  if(detectMi())
  {
    document.getElementById("display").style.overflowX="unset"
  }
};

export const detectSafari = () => {
  let userAgentString = navigator.userAgent;
  let chromeAgent = userAgentString.indexOf("Chrome") > -1;
  let safariAgent = userAgentString.indexOf("Safari") > -1;
  if (chromeAgent && safariAgent) safariAgent = false;
  return safariAgent;
};

export const detectMi = () => {
  let userAgentString = navigator.userAgent;
  let miAgent = userAgentString.indexOf("Mi") != -1 ? true:false
  return miAgent
}
