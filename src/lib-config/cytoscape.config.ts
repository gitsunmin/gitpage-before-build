/* eslint-disable no-underscore-dangle */
// const device = window.navigator.appVersion.split(' ')[1].slice(1);
function wh(size: any) {
  return `${size * 10}`;
}
function reacteByDevice([phone, pablet, tablet, desktop]: number[]) {
  const { width } = window.screen;
  if (width > 1024) return desktop;
  if (width <= 1024 && width > 600) return pablet;
  if (width <= 1024 && width > 400) return tablet;
  if (width <= 400) return phone;
  return desktop;
}

// function calculateWidth() {
//   const { width } = window.screen;
//   if (width > 1024) {
//     return width;
//   } if (width <= 1024 && width > 400) {
//     return width / 2;
//     // return tablet;
//   } if (width <= 400) {
//     return width;
//   }
// }

const initPosX = reacteByDevice([200, 300, 450, 450]);
const initPosY = reacteByDevice([200, 300, 430, 400]);
const initZoom = reacteByDevice([0.5, 0.6, 0.8, 0.8]);

export default {
  config: {
    style: [
      {
        selector: 'node' /* node */,
        style: {
          width: (e: any) => wh(e._private.data.size),
          height: (e: any) => wh(e._private.data.size),
          'background-color': (e: any) => {
            if (!e._private.data.bgColor) {
              // return '#F4A896';
              return '#A62648';
            }
            return e._private.data.bgColor;
          },
          label: 'data(name)',
        },
      },
      {
        selector: 'edge' /* line */,
        style: {
          width: 1,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style':
            'bezier' /* haystack, straight, bezier, unbundled-bezier ,segments, taxi, ellipse, rectangle, triangle */,
        },
      },
    ],
    layout: {
      name: 'grid',
      rows: 1,
    },
    wheelSensitivity: 0.3,
    zoom: initZoom,
    minZoom: 1e-1 /* zoom 할 수 있는 최대 최소값 */,
    maxZoom: 1e1,
    pan: {
      x: initPosX,
      y: initPosY,
    } /* 처음 보여지는 위치 */,
    pixelRatio: 'auto',
  },
  elements: [
    {
      data: {
        id: 'HTML',
        name: 'HTML & Internet',
        size: 5,
        url:
          'https://sitmin.tistory.com/entry/momentjs-%ED%95%9C%EA%B8%80%ED%99%94-%EC%98%A4%EC%A0%84-%EC%98%A4%ED%9B%84-AM-PM',
      },
      position: { x: -150, y: -130 },
    },
    {
      data: {
        id: 'javascript',
        name: 'Javascript',
        size: 3,
      },
      position: { x: -150, y: -30 },
    },
    {
      data: {
        id: 'css',
        name: 'CSS',
        size: 3,
      },
      position: { x: -240, y: -60 },
    },
    {
      data: {
        id: 'typescript',
        name: 'TypeScript',
        size: 3,
      },
      position: { x: -30, y: -50 },
    },
    {
      data: {
        id: 'vue',
        name: 'Vue',
        size: 3,
      },
      position: { x: -10, y: -100 },
    },
    {
      data: {
        id: 'quasar',
        name: 'Quasar Framework',
        size: 3,
      },
      position: { x: 100, y: -135 },
    },
    {
      data: {
        id: 'scss',
        name: 'SCSS',
        size: 3,
      },
      position: { x: -310, y: 0 },
    },
    {
      data: {
        id: 'electron',
        name: 'Electron',
        size: 3,
      },
      position: { x: 200, y: -170 },
    },
    {
      data: {
        id: 'nodejs',
        name: 'node.js',
        size: 3,
      },
      position: { x: 30, y: -5 },
    },
    {
      data: {
        id: 'webcomponent',
        name: 'Web Component',
        size: 3,
      },
      position: { x: -100, y: -200 },
    },
    // {
    //   data: {
    //     id: 'microfrontend',
    //     name: 'Micro FrontEnd',
    //     size: 3,
    //   },
    //   position: { x: -126, y: -328 },
    // },
    // {
    //   data: {
    //     id: 'serviceworker',
    //     name: 'Service Worker',
    //     size: 3,
    //   },
    //   position: { x: -100, y: -280 },
    // },
    {
      data: {
        id: 'aws',
        name: 'AWS',
        size: 3,
      },
      position: { x: -250, y: -220 },
    },
    {
      data: {
        id: 'linux',
        name: 'Linux',
        size: 3,
      },
      position: { x: 120, y: -330 },
    },
    {
      data: {
        id: 'git',
        name: 'GIT',
        size: 3,
      },
      position: { x: 190, y: -330 },
    },
    {
      data: {
        id: 'indexeddb',
        name: 'IndexedDB',
        size: 3,
      },
      position: { x: -210, y: -300 },
    },
    {
      data: {
        id: 'react',
        name: 'React',
        size: 3,
      },
      position: { x: -110, y: 50 },
    },
    {
      data: {
        id: 'husky',
        name: 'Husky',
        size: 3,
      },
      position: { x: 250, y: -330 },
    },
    /** @@@@@@@@@@@@@@@@@@@@@@@@ */
    /* 밑에는 선을 정의 하는 부분 */
    /** @@@@@@@@@@@@@@@@@@@@@@@@ */
    {
      data: {
        id: 'HTML-javascript',
        source: 'HTML',
        target: 'javascript',
      },
    },
    {
      data: {
        id: 'HTML-css',
        source: 'HTML',
        target: 'css',
      },
    },
    {
      data: {
        id: 'javascript-typescript',
        source: 'javascript',
        target: 'typescript',
      },
    },
    {
      data: {
        id: 'javascript-vue',
        source: 'javascript',
        target: 'vue',
      },
    },
    {
      data: {
        id: 'vue-quasar',
        source: 'vue',
        target: 'quasar',
      },
    },
    {
      data: {
        id: 'vue-typescript',
        source: 'vue',
        target: 'typescript',
      },
    },
    {
      data: {
        id: 'css-scss',
        source: 'css',
        target: 'scss',
      },
    },
    {
      data: {
        id: 'javascript-nodejs',
        source: 'javascript',
        target: 'nodejs',
      },
    },
    {
      data: {
        id: 'quasar-electron',
        source: 'quasar',
        target: 'electron',
      },
    },
    {
      data: {
        id: 'nodejs-electron',
        source: 'nodejs',
        target: 'electron',
      },
    },
    {
      data: {
        id: 'HTML-webcomponent',
        source: 'HTML',
        target: 'webcomponent',
      },
    },
    // {
    //   data: {
    //     id: 'webcomponent-microfrontend',
    //     source: 'webcomponent',
    //     target: 'microfrontend',
    //   },
    // },
    {
      data: {
        id: 'HTML-aws',
        source: 'HTML',
        target: 'aws',
      },
      position: { x: -225, y: -245 },
    },
    {
      data: {
        id: 'css-vue',
        source: 'css',
        target: 'vue',
      },
    },
    {
      data: {
        id: 'vue-webcomponent',
        source: 'vue',
        target: 'webcomponent',
      },
    },
    {
      data: {
        id: 'HTML-indexeddb',
        source: 'HTML',
        target: 'indexeddb',
      },
    },
    {
      data: {
        id: 'javascript-react',
        source: 'javascript',
        target: 'react',
      },
    },
    {
      data: {
        id: 'git-husky',
        source: 'git',
        target: 'husky',
      },
    },
  ],
};
