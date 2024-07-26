const init = { Song_num: 0, User_num: 0, Revenue_num: 0, Visit_num: 0 };

export const dashboardModel = {
  init: init,
};

export type dashboardType = typeof init;

const initChar = [
  {
    reve: 0,
    month: 0,
    year: 0,
    title: " ",
  },
];

export const dashboardModelChar = {
  init: initChar,
};

export type dashboardTypeChar = typeof initChar;
