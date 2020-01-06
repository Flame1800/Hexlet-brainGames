export const isEven = (num) => {
    if (num % 2 == 0) return 'yes'
    return 'no';
};
export const getRandNum = (n = 100) => Math.floor(Math.random(0, 1000) * n);


