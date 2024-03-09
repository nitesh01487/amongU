// for run

import * as coordinate from './mapCoordinateResize.js'

const x = [
  [-3.18088, -0.162027, -0.162027, 3.18088, 309.858, 308.71], // for 1st image
  [-3.18088, -0.162027, -0.162027, 3.18088, 309.841, 279.551],
  [-3.18127, -0.15415, -0.15415, 3.18127, 310.778, 277.553],
  [-3.18327, -0.105008, -0.105008, 3.18327, 314.46, 296.716],
  [-3.18487, -0.02845, -0.02845, 3.18487, 319.408, 324.445],
  [-3.18487, -0.02845, -0.02845, 3.18487, 319.408, 324.445],
  [-3.185, 0, 0, 3.185, 321.285, 334.763], //
  [-3.18472, -0.0420399, -0.0420399, 3.18472, 318.547, 319.551],
  [-3.18274, -0.120027, -0.120027, 3.18274, 313.408, 291.154],
  [-3.18088, -0.162027, -0.162027, 3.18088, 310.334, 273.906],
  [-3.18088, -0.162027, -0.162027, 3.18088, 309.669, 287.879],
  [-3.18088, -0.162027, -0.162027, 3.18088, 309.962, 313.682],
  [-3.18088, -0.162027, -0.162027, 3.18088, 310.334, 327.596],
];

const y = [
  [-2.1753, -2.13573, -2.13573, 2.1753, 295.64, 381.956], // for 1nd image
  [1.27912, -2.76716, -2.76716, -1.27912, 287.968, 416.361],
  [1.61695, -2.58433, -2.58433, -1.61695, 289.083, 419.615],
  [-0.36459, -3.02661, -3.02661, 0.36459, 321.117, 400.779],
  [-2.81519, -1.16962, -1.16962, 2.81519, 319.125, 377.705],
  [-2.81519, -1.16962, -1.16962, 2.81519, 319.125, 377.705],
  [-3.04849, -0.00308596, -0.00308596, 3.04849, 307.434, 381.56], //
  [-3.0089, 0.489687, 0.489687, 3.0089, 313.499, 369.134],
  [-2.7281, 1.36044, 1.36044, 2.7281, 325.17, 350.261],
  [-2.47233, 1.7835, 1.7835, 2.47233, 331.219, 341.846],
  [-2.72118, 1.37422, 1.37422, 2.72118, 313.333, 350.98],
  [-3.00152, 0.53308, 0.53308, 3.00152, 281.205, 372.393],
  [-3.04797, 0.0563422, 0.0563422, 3.04797, 263.937, 386.994],
];

const z = [
  [-3.185, 0, 0, 3.185, 322.878, 361.179], // 1
  [-3.185, 0, 0, 3.185, 322.878, 320.103],
  [-3.185, 0, 0, 3.185, 322.878, 315.119],
  [-3.185, 0, 0, 3.185, 322.878, 333.066],
  [-3.185, 0, 0, 3.185, 322.878, 361.009],
  [-3.185, 0, 0, 3.185, 322.878, 361.009],
  [-3.185, 0, 0, 3.185, 322.878, 371.391], //
  [-3.185, 0, 0, 3.185, 322.878, 356.05],
  [-3.185, 0, 0, 3.185, 322.878, 327.582],
  [-3.185, 0, 0, 3.185, 322.878, 312.241],
  [-3.185, 0, 0, 3.185, 322.878, 331.83],
  [-3.185, 0, 0, 3.185, 322.878, 368.181],
  [-3.185, 0, 0, 3.185, 322.878, 387.771],
];

const s = [
  [-1.37124, -2.72268, -2.72268, 1.37124, 393.192, 390.651], // 1
  [-1.89295, -2.38956, -2.38956, 1.89295, 401.9, 333.704],
  [-2.07432, -2.23395, -2.23395, 2.07432, 401.235, 326.65],
  [-2.55626, -1.66098, -1.66098, 2.55626, 385.781, 341.836],
  [-2.99198, -0.584267, -0.584267, 2.99198, 352.803, 378.34],
  [-2.99198, -0.584267, -0.584267, 2.99198, 352.803, 378.34],
  [-3.04462, -0.153648, -0.153648, 3.04462, 340.076, 395.567], //
  [-2.65596, -1.49639, -1.49639, 2.65596, 348.372, 381.583],
  [-0.603193, -2.98822, -2.98822, 0.603193, 338.326, 403.092],
  [0.79394, -2.94329, -2.94329, -0.79394, 307.608, 425.719],
  [0.329469, -3.03063, -3.03063, -0.329469, 329.144, 423.497],
  [-0.544838, -2.99941, -2.99941, 0.544838, 368.058, 427.104],
  [-1.00189, -2.87915, -2.87915, 1.00189, 385.81, 430.29],
];

const t = [
  [-3.185, 0, 0, 3.185, 322.878, 363.152], // 1
  [-3.185, 0, 0, 3.185, 322.878, 326.531],
  [-3.185, 0, 0, 3.185, 322.878, 322.754],
  [-3.185, 0, 0, 3.185, 322.878, 342.909],
  [-3.185, 0, 0, 3.185, 322.878, 374.29],
  [-3.185, 0, 0, 3.185, 322.878, 374.29],
  [-3.185, 0, 0, 3.185, 322.878, 385.949], //
  [-3.185, 0, 0, 3.185, 322.878, 367.777],
  [-3.185, 0, 0, 3.185, 322.878, 334.054],
  [-3.185, 0, 0, 3.185, 322.878, 315.881],
  [-3.185, 0, 0, 3.185, 322.878, 334.29],
  [-3.185, 0, 0, 3.185, 322.878, 368.451],
  [-3.185, 0, 0, 3.185, 322.878, 386.86],
];

// for rewritting drawable
const d1 = [
  `M 9.05078 11.8838 C 4.66681 26.3991 -7.42696 35.5582 -26.0808 41.5456 C -34.0486 45.7163 -48.2017 27.3976 -39.4295 16.4854 C -23.9682 5.57338 -17.8048 -2.3643 -17.8048 -2.3643`,
  `M 3.10011 17.4017 C -5.47574 24.787 -12.5549 31.2586 -32.48 32.2971 C -42.0648 33.3364 -49.6973 10.2258 -38.7857 4.79899 C -14.5675 -1.89869 -9.12679 -5.13786 -9.12679 -5.13786`,
  `M -0.609389 20.6205 C -9.07368 26.0835 -16.8021 29.6618 -38.1721 26.9362 C -48.5482 25.8597 -50.9202 0.602354 -39.8502 -1.29283 C -12.2857 -5.6394 -4.39541 -5.60662 -4.39541 -5.60662`,
  `M 11.0234 20.5315 C 3.21168 31.4135 -8.45186 40.7212 -23.2809 47.7808 C -33.0648 55.0173 -45.4398 34.8036 -42.3378 26.0278 C -27.7993 9.6644 -10.2856 1.02062 -10.2856 1.02062`,
  `M 9.76841 14.2915 C 6.19057 30.2734 -3.80336 43.2045 -15.3896 49.019 C -23.3269 54.9095 -36.3313 40.9469 -35.7657 32.9354 C -27.8865 19.1541 -14.3233 2.64773 -14.3233 2.64773`,
  `M 5.491 0.827 C 10.969 27.093 5.111 47.078 -0.353 48.885 C -4.382 50.749 -17.398 49.607 -21.237 44.173 C -25.985 37.587 -22.25 5.269 -22.25 5.269`,
  `M 5.491 0.827 C 10.969 27.093 5.111 47.078 -0.353 48.885 C -4.382 50.749 -17.398 49.607 -21.237 44.173 C -25.985 37.587 -22.25 5.269 -22.25 5.269`,
  `M 5.491 0.827 C 4.61371 24.8702 1.03044 43.9899 -9.85312 50.4728 C -18.7043 55.1453 -35.6006 45.9236 -31.7583 37.9045 C -27.7963 25.0972 -22.25 5.269 -22.25 5.269`,
  `M 5.491 0.827 C 6.509 27.975 3.0775 37.9455 -17.17 47.2815 C -29.902 52.584 -43.171 37.361 -36.114 27.435 C -27.575 13.369 -22.25 5.269 -22.25 5.269`,
  `M 5.491 0.827 C 18.603 38.31 2.954 38.556 -24.464 37.465 C -28.933 37.287 -39.529 25.587 -29.382 12.792 C -24.19 6.246 -22.25 5.269 -22.25 5.269`,
  `M 5.18107 2.92339 C 19.7743 39.5549 -2.84084 38.8662 -30.2007 37.1066 C -35.0998 36.7602 -43.0583 24.7433 -34.849 13.2985 C -30.2831 6.40654 -22.25 5.269 -22.25 5.269`,
  `M 4.60593 6.81361 C 21.9477 41.8651 -13.5942 39.4418 -40.8463 36.4414 C -46.5432 35.7828 -49.6077 23.1777 -44.994 14.2385 C -41.5899 6.70446 -22.25 5.269 -22.25 5.269`,
  `M 4.296 8.91 C 23.119 43.11 -19.389 39.752 -46.583 36.083 C -52.71 35.256 -53.137 22.334 -50.461 14.745 C -47.683 6.865 -22.25 5.269 -22.25 5.269`,
];

const d2 = [
  `M 9.05078 11.8838 C 4.66681 26.3991 -7.42696 35.5582 -26.0808 41.5456 C -34.0486 45.7163 -48.2017 27.3976 -39.4295 16.4854 C -23.9682 5.57338 -17.8048 -2.3643 -17.8048 -2.3643`,
  `M 5.49689 15.6593 C -3.11726 24.266 -9.97813 32.4944 -28.902 35.8969 C -38.0392 38.3596 -48.8517 16.5792 -38.2943 9.01201 C -16.3235 0.638693 -11.8822 -4.66114 -11.8822 -4.66114`,
  `M -0.609389 20.6205 C -9.07368 26.0835 -16.8021 29.6618 -38.1721 26.9362 C -48.5482 25.8597 -50.9202 0.602354 -39.8502 -1.29283 C -12.2857 -5.6394 -4.39541 -5.60662 -4.39541 -5.60662`,
  `M 11.0234 20.5315 C 3.21168 31.4135 -8.45186 40.7212 -23.2809 47.7808 C -33.0648 55.0173 -45.4398 34.8036 -42.3378 26.0278 C -27.7993 9.6644 -10.2856 1.02062 -10.2856 1.02062`,
  `M 8.62 10.6765 C 7.4735 29.4195 -1.41 44.2445 -11.3525 48.983 C -18.2405 53.7925 -31.248 43.272 -31.865 35.9525 C -27.376 24.103 -16.4515 3.3515 -16.4515 3.3515`,
  `M 5.491 0.827 C 10.969 27.093 5.111 47.078 -0.353 48.885 C -4.382 50.749 -17.398 49.607 -21.237 44.173 C -25.985 37.587 -22.25 5.269 -22.25 5.269`,
  `M 5.491 0.827 C 10.969 27.093 5.111 47.078 -0.353 48.885 C -4.382 50.749 -17.398 49.607 -21.237 44.173 C -25.985 37.587 -22.25 5.269 -22.25 5.269`,
  `M 5.491 0.827 C 4.61371 24.8702 1.03044 43.9899 -9.85312 50.4728 C -18.7043 55.1453 -35.6006 45.9236 -31.7583 37.9045 C -27.7963 25.0972 -22.25 5.269 -22.25 5.269`,
  `M 5.491 0.827 C 6.509 27.975 3.0775 37.9455 -17.17 47.2815 C -29.902 52.584 -43.171 37.361 -36.114 27.435 C -27.575 13.369 -22.25 5.269 -22.25 5.269`,
  `M 5.491 0.827 C 18.603 38.31 2.954 38.556 -24.464 37.465 C -28.933 37.287 -39.529 25.587 -29.382 12.792 C -24.19 6.246 -22.25 5.269 -22.25 5.269`,
  `M 5.18107 2.92339 C 19.7743 39.5549 -2.84084 38.8662 -30.2007 37.1066 C -35.0998 36.7602 -43.0583 24.7433 -34.849 13.2985 C -30.2831 6.40654 -22.25 5.269 -22.25 5.269`,
  `M 4.60593 6.81361 C 21.9477 41.8651 -13.5942 39.4418 -40.8463 36.4414 C -46.5432 35.7828 -49.6077 23.1777 -44.994 14.2385 C -41.5899 6.70446 -22.25 5.269 -22.25 5.269`,
  `M 4.296 8.91 C 23.119 43.11 -19.389 39.752 -46.583 36.083 C -52.71 35.256 -53.137 22.334 -50.461 14.745 C -47.683 6.865 -22.25 5.269 -22.25 5.269`,
];

const d3 = [
  `M -20.4362 -4.36998 C -20.4362 -4.36998 -43.3086 -3.50411 -51.8649 3.45547 C -56.8093 6.76189 -55.2077 28.437 -45.3719 30.4875 C -27.405 35.1095 -17.7225 28.3485 -10.1615 24.2275`,
  `M -21.3234 -4.53769 C -21.3234 -4.53769 -44.2808 -10.5502 -54.2076 -6.42511 C -61.5731 -3.75552 -64.2366 17.0395 -54.9336 22.1541 C -31.3714 30.6674 -19.1148 26.9417 -11.5538 22.8207`,
  `M -21.6962 -4.54018 C -21.6962 -4.54018 -44.6257 -12.9585 -54.9705 -9.8062 C -63.1656 -7.30199 -67.3089 13.0895 -58.1895 19.2597 C -32.7234 29.0866 -19.236 26.4707 -11.8564 22.0427`,
  `M -22.844 -2.9495 C -22.844 -2.9495 -44.1921 -7.38667 -52.1108 -2.10051 C -58.4492 2.29703 -59.8071 20.6537 -50.305 24.6232 C -29.4894 30.9372 -8.70518 27.8463 -6.15131 15.2556`,
  `M -24.4422 -0.734812 C -24.4422 -0.734812 -43.5883 0.370877 -48.1292 8.62807 C -51.8827 15.6617 -49.3624 31.1853 -39.3274 32.0906 C -24.9868 33.5137 5.95673 29.7615 1.7919 5.80582`,
  `M -25.036 0.088 C -25.036 0.088 -43.364 3.253 -46.65 12.614 C -49.443 20.627 -45.482 35.098 -35.249 34.865 C -23.314 34.471 11.404 30.473 4.743 2.295`,
  `M -25.036 0.088 C -25.036 0.088 -43.364 3.253 -46.65 12.614 C -49.443 20.627 -45.482 35.098 -35.249 34.865 C -23.314 34.471 11.404 30.473 4.743 2.295`,
  `M -20.8133 -1.89692 C -20.8133 -1.89692 -25.5838 3.90712 -42.4006 9.41175 C -49.0103 12.8705 -46.6488 32.841 -35.249 34.865 C -21.2327 38.313 4.12529 32.9712 5.88378 11.1349`,
  `M -15.5413 -4.75574 C -15.5413 -4.75574 -22.5109 4.02017 -41.6662 8.85831 C -48.9356 11.53 -46.8504 32.451 -35.249 34.865 C -20.873 38.977 -1.80362 33.24 5.99148 15.9502`,
  `M -2.137 -12.595 C -2.137 -12.595 -43.364 3.253 -46.65 12.614 C -49.443 20.627 -45.482 35.098 -35.249 34.865 C -23.314 34.471 -12.144 29.651 4.292 18.869`,
  `M -8.73532 -9.471 C -8.73532 -9.471 -44.827 -0.329539 -50.1732 7.42978 C -53.5137 13.3649 -51.4486 32.0309 -41.2156 31.7979 C -29.3087 30.7923 -18.5732 26.8958 -0.727082 21.2659`,
  `M -13.3452 -7.28868 C -13.3452 -7.28868 -44.3645 -0.278244 -50.7519 7.62563 C -54.1216 12.5276 -51.5179 33.063 -41.2849 32.83 C -28.7845 32.5842 -19.0629 27.2214 -4.23348 22.9404`,
  `M -19.775 -4.245 C -19.775 -4.245 -42.584 1.747 -50.119 10.819 C -53.259 14.6 -48.479 36.931 -38.246 36.698 C -24.449 38.42 -16.685 29.397 -9.124 25.276`,
];

const d4 = [
  `M -20.4362 -4.36998 C -20.4362 -4.36998 -43.3086 -3.50411 -51.8649 3.45547 C -56.8093 6.76189 -55.2077 28.437 -45.3719 30.4875 C -27.405 35.1095 -17.7225 28.3485 -10.1615 24.2275`,
  `M -21.3234 -4.53769 C -21.3234 -4.53769 -44.2808 -10.5502 -54.2076 -6.42511 C -61.5731 -3.75552 -64.2366 17.0395 -54.9336 22.1541 C -31.3714 30.6674 -19.1148 26.9417 -11.5538 22.8207`,
  `M -21.6962 -4.54018 C -21.6962 -4.54018 -44.6257 -12.9585 -54.9705 -9.8062 C -63.1656 -7.30199 -67.3089 13.0895 -58.1895 19.2597 C -32.7234 29.0866 -19.236 26.4707 -11.8564 22.0427`,
  `M -22.844 -2.9495 C -22.844 -2.9495 -44.1921 -7.38667 -52.1108 -2.10051 C -58.4492 2.29703 -59.8071 20.6537 -50.305 24.6232 C -29.4894 30.9372 -8.70518 27.8463 -6.15131 15.2556`,
  `M -24.4422 -0.734812 C -24.4422 -0.734812 -43.5883 0.370877 -48.1292 8.62807 C -51.8827 15.6617 -49.3624 31.1853 -39.3274 32.0906 C -24.9868 33.5137 5.95673 29.7615 1.7919 5.80582`,
  `M -25.036 0.088 C -25.036 0.088 -43.364 3.253 -46.65 12.614 C -49.443 20.627 -45.482 35.098 -35.249 34.865 C -23.314 34.471 11.404 30.473 4.743 2.295`,
  `M -25.036 0.088 C -25.036 0.088 -43.364 3.253 -46.65 12.614 C -49.443 20.627 -45.482 35.098 -35.249 34.865 C -23.314 34.471 11.404 30.473 4.743 2.295`,
  `M -20.8133 -1.89692 C -20.8133 -1.89692 -25.5838 3.90712 -42.4006 9.41175 C -49.0103 12.8705 -46.6488 32.841 -35.249 34.865 C -21.2327 38.313 4.12529 32.9712 5.88378 11.1349`,
  `M -15.5413 -4.75574 C -15.5413 -4.75574 -22.5109 4.02017 -41.6662 8.85831 C -48.9356 11.53 -46.8504 32.451 -35.249 34.865 C -20.873 38.977 -1.80362 33.24 5.99148 15.9502`,
  `M -2.137 -12.595 C -2.137 -12.595 -43.364 3.253 -46.65 12.614 C -49.443 20.627 -45.482 35.098 -35.249 34.865 C -23.314 34.471 -12.144 29.651 4.292 18.869`,
  `M -8.73532 -9.471 C -8.73532 -9.471 -44.827 -0.329539 -50.1732 7.42978 C -53.5137 13.3649 -51.4486 32.0309 -41.2156 31.7979 C -29.3087 30.7923 -18.5732 26.8958 -0.727082 21.2659`,
  `M -13.3452 -7.28868 C -13.3452 -7.28868 -44.3645 -0.278244 -50.7519 7.62563 C -54.1216 12.5276 -51.5179 33.063 -41.2849 32.83 C -28.7845 32.5842 -19.0629 27.2214 -4.23348 22.9404`,
  `M -19.775 -4.245 C -19.775 -4.245 -42.584 1.747 -50.119 10.819 C -53.259 14.6 -48.479 36.931 -38.246 36.698 C -24.449 38.42 -16.685 29.397 -9.124 25.276`,
];

const colorValue = {
  red: ["rgb(191,32,37)", "rgb(119,17,57)"],
  blue: ["rgb(57,78,161)", "rgb(42,47,133)"],
  orange: ["rgb(232,126,37)", "rgb(176,65,1)"],
  pink: ["rgb(208,95,162)", "rgb(152,64,151)"],
  green: ["rgb(96,236,15)", "rgb(40,170,74)"],
};

export const positionValue = {
  0: [56, 20], // x, y
  1: [56, 10],
  2: [65, 15],
  3: [74, 10],
  4: [74, 20],
};

export const renderPlayerHTMLContent = function (color, lt, tp, no) {
  const playerHTMLContent = `<div 
                                class="actualPlayer${no}" 
                                style="position: absolute; top: ${tp}rem; left: ${lt}rem; z-index: 10">
                                    <svg
                                    class="imposter"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 600 600"
                                    width="600"
                                    height="600"
                                    preserveAspectRatio="xMidYMid meet"
                                    style="
                                    width: 100%;
                                    height: 100%;
                                    transform: scale(1, 1);
                                    content-visibility: visible;
                                    "
                                    >
                                        <defs>
                                            <clipPath id="__lottie_element_3259">
                                                <rect width="600" height="600" x="0" y="0"></rect>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#__lottie_element_3259)">
                                            <g
                                            class="transform-1"
                                            transform="matrix(-3.1808760166168213,-0.16202646493911743,-0.16202646493911743,3.1808760166168213,309.8752746582031,309.6012268066406)"
                                            opacity="1"
                                            style="display: block"
                                            >
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    fill="${colorValue[color][1]}"
                                                    fill-opacity="1"
                                                    d=" M-31.625,-48.36199951171875 C-31.625,-48.36199951171875 -50.56399917602539,-59.66400146484375 -55.45100021362305,-43.16899871826172 C-60.3380012512207,-26.673999786376953 -63.08700180053711,18.22800064086914 -50.257999420166016,24.947999954223633 C-37.42900085449219,31.667999267578125 -30.708999633789062,21.283000946044922 -31.625,11.20300006866455 C-32.54100036621094,1.1230000257492065 -23.683000564575195,-42.25299835205078 -31.625,-48.36199951171875z"
                                                    ></path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    fill="${colorValue[color][0]}"
                                                    fill-opacity="1"
                                                    d=" M-43.36199951171875,-49.85200119018555 C-43.36199951171875,-49.85200119018555 -57.26100158691406,-47.56100082397461 -55.12300109863281,-39.92499923706055 C-52.98500061035156,-32.28900146484375 -39.8489990234375,-32.28799819946289 -35.41999816894531,-37.327999114990234 C-30.990999221801758,-42.36800003051758 -30.075000762939453,-52.29600143432617 -43.36199951171875,-49.85200119018555z"
                                                    ></path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="10"
                                                    stroke="rgb(0,0,0)"
                                                    stroke-opacity="1"
                                                    stroke-width="7"
                                                    d=" M-31.625,-48.36199951171875 C-31.625,-48.36199951171875 -50.56399917602539,-59.66400146484375 -55.45100021362305,-43.16899871826172 C-60.3380012512207,-26.673999786376953 -63.08700180053711,18.22800064086914 -50.257999420166016,24.947999954223633 C-37.42900085449219,31.667999267578125 -30.708999633789062,21.283000946044922 -31.625,11.20300006866455 C-32.54100036621094,1.1230000257492065 -23.683000564575195,-42.25299835205078 -31.625,-48.36199951171875z"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g
                                            class="transform-2"
                                            transform="matrix(-2.253847122192383,-2.052673578262329,-2.052673578262329,2.253847122192383,294.6316833496094,381.4578857421875)"
                                            opacity="1"
                                            style="display: block"
                                            >
                                                <g opacity="1" transform="matrix(1,0,0,1,9,13.730999946594238)">
                                                    <path
                                                    class="leg-11"
                                                    fill="${colorValue[color][1]}"
                                                    fill-opacity="1"
                                                    d=" M8.908981323242188,11.795159339904785 C5.21709680557251,26.897449493408203 -7.783701419830322,35.683311462402344 -26.69217872619629,41.3826904296875 C-34.6051139831543,45.404396057128906 -48.34886169433594,27.24654769897461 -39.75849151611328,16.433534622192383 C-24.67538833618164,5.611899375915527 -17.937402725219727,-2.1366519927978516 -17.937402725219727,-2.1366519927978516"
                                                    ></path>
                                                    <path
                                                    class="leg-12"
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(0,0,0)"
                                                    stroke-opacity="1"
                                                    stroke-width="7"
                                                    d=" M8.908981323242188,11.795159339904785 C5.21709680557251,26.897449493408203 -7.783701419830322,35.683311462402344 -26.69217872619629,41.3826904296875 C-34.6051139831543,45.404396057128906 -48.34886169433594,27.24654769897461 -39.75849151611328,16.433534622192383 C-24.67538833618164,5.611899375915527 -17.937402725219727,-2.1366519927978516 -17.937402725219727,-2.1366519927978516"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g
                                            class="transform-3"
                                            transform="matrix(-3.184999942779541,0,0,3.184999942779541,322.8775634765625,362.433837890625)"
                                            opacity="1"
                                            style="display: block"
                                            >
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    fill="${colorValue[color][1]}"
                                                    fill-opacity="1"
                                                    d=" M24.76099967956543,-89.48600006103516 C5.120999813079834,-97.95099639892578 -32.263999938964844,-92.95899963378906 -33.79100036621094,-61.137001037597656 C-34.85499954223633,-38.959999084472656 -37.448001861572266,-5.783999919891357 -30.083999633789062,15.42199993133545 C-23.33300018310547,34.86199951171875 23.666000366210938,44.57699966430664 37.52299880981445,12.227999687194824 C47.715999603271484,-11.567000389099121 50.23699951171875,-31 48.79100036621094,-53.18299865722656 C47.494998931884766,-73.06099700927734 38.25400161743164,-83.6709976196289 24.76099967956543,-89.48600006103516z"
                                                    ></path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    fill="${colorValue[color][0]}"
                                                    fill-opacity="1"
                                                    d=" M24.263999938964844,-88.02400207519531 C24.263999938964844,-88.02400207519531 -19.739999771118164,-103.33399963378906 -26.459999084472656,-71.87699890136719 C-29.253999710083008,-58.797000885009766 -23.16200065612793,-17.351999282836914 -10.206999778747559,-1.034999966621399 C3.0950000286102295,15.718999862670898 30.701000213623047,14.46500015258789 38.83700180053711,-0.4050000011920929 C53.20100021362305,-35.53499984741211 54.04100036621094,-72.86499786376953 24.263999938964844,-88.02400207519531z"
                                                    ></path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="10"
                                                    stroke="rgb(0,0,0)"
                                                    stroke-opacity="1"
                                                    stroke-width="7"
                                                    d=" M24.76099967956543,-89.48600006103516 C5.120999813079834,-97.95099639892578 -32.263999938964844,-92.95899963378906 -33.79100036621094,-61.137001037597656 C-34.85499954223633,-38.959999084472656 -37.448001861572266,-5.783999919891357 -30.083999633789062,15.42199993133545 C-23.33300018310547,34.86199951171875 23.666000366210938,44.57699966430664 37.52299880981445,12.227999687194824 C47.715999603271484,-11.567000389099121 50.23699951171875,-31 48.79100036621094,-53.18299865722656 C47.494998931884766,-73.06099700927734 38.25400161743164,-83.6709976196289 24.76099967956543,-89.48600006103516z"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g
                                            class="transform-4"
                                            transform="matrix(-1.3542972803115845,-2.731149196624756,-2.731149196624756,1.3542972803115845,392.87786865234375,392.5117492675781)"
                                            opacity="1"
                                            style="display: block"
                                            >
                                                <g opacity="1" transform="matrix(1,0,0,1,9,13.730999946594238)">
                                                    <path
                                                    class="leg-21"
                                                    fill="${colorValue[color][1]}"
                                                    fill-opacity="1"
                                                    d=" M-20.404985427856445,-4.364086627960205 C-20.404985427856445,-4.364086627960205 -43.27436828613281,-3.256317138671875 -51.78252410888672,3.802950382232666 C-56.64173126220703,7.13175630569458 -54.89022445678711,28.83780288696289 -45.03561782836914,30.780567169189453 C-27.265483856201172,35.26571273803711 -17.673587799072266,28.398014068603516 -10.112586975097656,24.277013778686523"
                                                    ></path>
                                                    <path
                                                    class="leg-22"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="4"
                                                    stroke="rgb(0,0,0)"
                                                    stroke-opacity="1"
                                                    stroke-width="7"
                                                    d=" M-20.404985427856445,-4.364086627960205 C-20.404985427856445,-4.364086627960205 -43.27436828613281,-3.256317138671875 -51.78252410888672,3.802950382232666 C-56.64173126220703,7.13175630569458 -54.89022445678711,28.83780288696289 -45.03561782836914,30.780567169189453 C-27.265483856201172,35.26571273803711 -17.673587799072266,28.398014068603516 -10.112586975097656,24.277013778686523"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g
                                            class="transform-5"
                                            transform="matrix(-3.184999942779541,0,0,3.184999942779541,322.8775634765625,364.2709045410156)"
                                            opacity="1"
                                            style="display: block"
                                            >
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    fill="rgb(71,97,108)"
                                                    fill-opacity="1"
                                                    d=" M56.930999755859375,-46.41400146484375 C56.64799880981445,-42.3120002746582 52.577999114990234,-29.576000213623047 24.263999938964844,-27.28499984741211 C2.7899999618530273,-25.54800033569336 -4.690999984741211,-34.84400177001953 -7.0929999351501465,-41.345001220703125 C-7.896999835968018,-43.520999908447266 -8.131999969482422,-45.382999420166016 -8.131999969482422,-46.41400146484375 C-8.131999969482422,-50.5260009765625 -13.859000205993652,-74.2490005493164 22.79599952697754,-71.95800018310547 C40.72800064086914,-70.83699798583984 58.07600021362305,-63.02299880981445 56.930999755859375,-46.41400146484375z"
                                                    ></path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    fill="rgb(147,201,218)"
                                                    fill-opacity="1"
                                                    d=" M56.11600112915039,-55.53200149536133 C55.97100067138672,-54.6619987487793 56.15299987792969,-53.827999114990234 56.249000549316406,-53.03300094604492 C56.60200119018555,-50.11899948120117 55.80500030517578,-47.71799850463867 33.5629997253418,-45.917999267578125 C17.277000427246094,-44.599998474121094 8.895999908447266,-48.582000732421875 4.696000099182129,-53.02000045776367 C1.5049999952316284,-56.391998291015625 0.7260000109672546,-60.027000427246094 0.7260000109672546,-61.801998138427734 C0.7260000109672546,-65.91400146484375 -0.6899999976158142,-76.13099670410156 35.507999420166016,-69.92500305175781 C47.053001403808594,-67.94599914550781 56.98400115966797,-60.733001708984375 56.11600112915039,-55.53200149536133z"
                                                    ></path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    fill="rgb(247,254,254)"
                                                    fill-opacity="1"
                                                    d=" M12.425000190734863,-62.10599899291992 C12.425000190734863,-62.10599899291992 15.47700023651123,-71.4000015258789 34.34199905395508,-65.98999786376953 C53.207000732421875,-60.58000183105469 49.73899841308594,-54.891998291015625 34.34199905395508,-54.6150016784668 C18.94499969482422,-54.3380012512207 10.89900016784668,-56.41899871826172 12.425000190734863,-62.10599899291992z"
                                                    ></path>
                                                </g>
                                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                    <path
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    fill-opacity="0"
                                                    stroke-miterlimit="10"
                                                    stroke="rgb(0,0,0)"
                                                    stroke-opacity="1"
                                                    stroke-width="7"
                                                    d=" M56.930999755859375,-46.41400146484375 C56.64799880981445,-42.3120002746582 52.577999114990234,-29.576000213623047 24.263999938964844,-27.28499984741211 C-4.395999908447266,-24.965999603271484 -8.131999969482422,-42.301998138427734 -8.131999969482422,-46.41400146484375 C-8.131999969482422,-50.5260009765625 -13.859000205993652,-74.2490005493164 22.79599952697754,-71.95800018310547 C40.72800064086914,-70.83699798583984 58.07600021362305,-63.02299880981445 56.930999755859375,-46.41400146484375z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>`;

  return playerHTMLContent;
};



/////////////////////////////////////////////////////////////////////////////////////all adjustment related to color, side, animation //////////////////////////


let mapCoordinate = [ //
    [[[735 , 297, 860, 833]]], // left path of cafeteria till navigation1 (R14)
    [[[735 , 297, 960, 393]]], // left path of cafeteria connecting cafeteria left entrance(R15)
    [[[735 , 650, 813, 1100]]], // Navigation1 path(R16)
    [[[861, 80, 1360, 547]]], // cafetaria (R17)

    [[[735 , 900, 890, 1100]]], // electrical up1(R18)
    [[[735 , 945, 930, 1100]]], // electrical down1(R19)
    [[[222 , 550, 390, 750]]], // weapon(R20)

    [[[1036, 457, 1130, 729]]],   // (R1) for cafteria and curve-path junction
    [[[200, 620, 1279, 729]]],  // (R2) long path from weapon to curve path
    [[[1185 ,613, 1272, 935]]], // curve-pathway (R3)
    [[[1185 ,708, 1435, 818]]], // curve-pathway (R4)
    [[[1024 ,800, 1282, 936]]], // curve-pathway (R5)
    [[[1024 ,800, 1130, 1270]]], // between curve-pathway and long straight horizontal path before medBed (R6)
    [[[255 ,1180, 1400, 1270]]], // horizontal path before medBed (R7)
    [[[1300 ,1180, 1400, 2660]]], // vertical path before medBed till last of map(R8)
    [[[1214 ,1500, 1490, 1742]]], // med-Bed (R9)
    [[[860 ,1968, 1400, 2080]]], // Polu-weapon and vertical path (R10)
    [[[900 ,1750, 1110, 2120]]], // Polu-weapon (R11)
    [[[620, 2504, 1400, 2660]]], // Navigation-weapon2 horizontal path (R12)
    [[[620, 2404, 820, 2760]]], // Navigation-weapon2 horizontal path (R13)
];
// resize coordinates Restriction
export const reMap = function() {
    const aspectRatio = 1536 / 730;
    coordinate.aspectRatio(aspectRatio, window.innerWidth, window.innerHeight);

    mapCoordinate.map((elm) => {
        elm.map((el) => {
            el.map((e) => {
                const val = coordinate.reTranslate(e[0], e[1], e[2], e[3]);
                e[0] = val[0];
                e[1] = val[1];
                e[2] = val[2];
                e[3] = val[3];
            })
        })
    })
}

let srcToDestCoordinate = {
// 'className' : [[[[srctodest coordinate], [stod dir.]], [std coo][stod dir.]], []]       srtodest, count, i
  'actualPlayer1': [[[1048, 642, 270 ] ,['r', 'd', 'l']], [[1048, 160, 896], ['r', 'u', 'l']], [true, 0, 0]],
  'actualPlayer2': [[[1048, 642, 740, 948 ] ,['r', 'd', 'l', 'd']], [[630, 1048, 240, 1040], ['u', 'r', 'u', 'l']], [true, 0, 0]],
  'actualPlayer3': [[[1048, 642, 1190, 858, 1040, 1200, 1315, 1978, 960] ,['l', 'd', 'r', 'd', 'l', 'd', 'r', 'd', 'l']], [[1337, 1213, 1053, 850, 1200, 642, 1050, 160, 896], ['r', 'u', 'l', 'u', 'r', 'u', 'l', 'u', 'r']], [true, 0, 0]],
  'actualPlayer4': [[[1048, 642, 1190, 858, 1040, 1200, 1315, 2552, 644] ,['l', 'd', 'r', 'd', 'l', 'd', 'r', 'd', 'l']], [[1337, 1213, 1053, 850, 1200, 642, 1050, 160, 896], ['r', 'u', 'l', 'u', 'r', 'u', 'l', 'u', 'r']], [true, 0, 0]]
}

const speed = 0.5;

function movePlayer(classN) {

  const ele = document.querySelector(`.${classN}`);
  const top = parseFloat(ele.style.top);
  const left = parseFloat(ele.style.left);

  let count = srcToDestCoordinate[classN][2][1];
  let srcToDest = srcToDestCoordinate[classN][2][0];

  const direction = srcToDestCoordinate[classN][srcToDest === true ? 0 : 1][1][count];
  const dest = srcToDestCoordinate[classN][srcToDest === true ? 0 : 1][0][count] / 16;

  if(direction === 'r') {
    ele.querySelector('svg').style.transform = 'scale(-1, 1)';
    if(left + coordinate.convertVal(speed) > dest) {
      ele.style.left = `${dest}rem`;
      count++;
      [srcToDest, count] = resetDirection(count, srcToDestCoordinate[classN][0][0].length, srcToDest);
    } else {
      ele.style.left = `${left + coordinate.convertVal(speed)}rem`;
    }
  } else if(direction === 'd') {
    if(top + coordinate.convertVal(speed) > dest) {
      ele.style.top = `${dest}rem`;
      count++;
      [srcToDest, count] = resetDirection(count, srcToDestCoordinate[classN][0][0].length, srcToDest);
    } else {
      ele.style.top = `${top + coordinate.convertVal(speed)}rem`;
    }
  } else if(direction === 'l') {
    ele.querySelector('svg').style.transform = 'scale(1, 1)';
    if(left - coordinate.convertVal(speed) < dest) {
      ele.style.left = `${dest}rem`;
      count++;
      [srcToDest, count] = resetDirection(count, srcToDestCoordinate[classN][0][0].length, srcToDest);
    } else {
      ele.style.left = `${left - coordinate.convertVal(speed)}rem`;
    }
  } else if(direction === 'u') {
    if(top - coordinate.convertVal(speed) < dest) {
      ele.style.top = `${dest}rem`;
      count++;
      [srcToDest, count] = resetDirection(count, srcToDestCoordinate[classN][0][0].length, srcToDest);
    } else {
      ele.style.top = `${top - coordinate.convertVal(speed)}rem`;
    }
  }

  srcToDestCoordinate[classN][2][1] = count;
  srcToDestCoordinate[classN][2][0] = srcToDest;
}

function resetDirection(count, length, srcToDest) {
  if(count >= length) {
    srcToDest = !srcToDest;
    count = 0;
  }
  return [srcToDest, count];
}

//////////////////////////////////////////////////////////////////////////////////////

function setRunning(el) {
  let a, leg_1, c, leg_2, e, d_leg_11, d_leg_12, d_leg_21, d_leg_22;
  const ele = document.querySelector(`.${el}`);

  let i = srcToDestCoordinate[el][2][2];

  a = ele.querySelector(".transform-1");
  leg_1 = ele.querySelector(".transform-2");
  c = ele.querySelector(".transform-3");
  leg_2 = ele.querySelector(".transform-4");
  e = ele.querySelector(".transform-5");

  d_leg_11 = ele.querySelector(".leg-11");
  d_leg_12 = ele.querySelector(".leg-12");
  d_leg_21 = ele.querySelector(".leg-21");
  d_leg_22 = ele.querySelector(".leg-22");

  // set the transformation
  a.style.transform = `matrix(${x[i][0]}, ${x[i][1]}, ${x[i][2]}, ${x[i][3]}, ${x[i][4]}, ${x[i][5]})`;
  leg_1.style.transform = `matrix(${y[i][0]}, ${y[i][1]}, ${y[i][2]}, ${y[i][3]}, ${y[i][4]}, ${y[i][5]})`;
  c.style.transform = `matrix(${z[i][0]}, ${z[i][1]}, ${z[i][2]}, ${z[i][3]}, ${z[i][4]}, ${z[i][5]})`;
  leg_2.style.transform = `matrix(${s[i][0]}, ${s[i][1]}, ${s[i][2]}, ${s[i][3]}, ${s[i][4]}, ${s[i][5]})`;
  e.style.transform = `matrix(${t[i][0]}, ${t[i][1]}, ${t[i][2]}, ${t[i][3]}, ${t[i][4]}, ${t[i][5]})`;

  // rewrite the drawable of legs
  d_leg_11.setAttribute("d", d1[i]);
  d_leg_12.setAttribute("d", d2[i]);
  d_leg_21.setAttribute("d", d3[i]);
  d_leg_22.setAttribute("d", d4[i]);
  i++;
  if(i > 12) i = 0;

  srcToDestCoordinate[el][2][2] = i;
}

function runPlayer(classN) {
  setRunning(classN);
  // move coordinates
  movePlayer(classN);
}


function runMovementForAllBot() {
    runPlayer('actualPlayer1');
    runPlayer('actualPlayer2');
    runPlayer('actualPlayer3');
    runPlayer('actualPlayer4');
}
export const runAllBot = function(bots) {
  setInterval(runMovementForAllBot, 75);
}
