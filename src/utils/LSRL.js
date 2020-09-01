
const computeLSRL = (Xs, Ys) => {
    const xSqrd = [];
    const xY = [];
    for(let i = 0; i < Xs.length; i++)
    {
        xSqrd.push(Xs[i] * Xs[i]);
        xY.push(Xs[i] * Ys[i]);
    }
    const sumX = sumSet(Xs);
    const sumY = sumSet(Ys);
    const sumXSqrd = sumSet(xSqrd);
    const sumXY = sumSet(xY);
    const m = slope(Xs.length, sumX, sumY, sumXSqrd, sumXY);
    const b = yIntercept(x.length, sumX, sumY, m);
    console.log(`${m}x + ${b}`);
}



const sumSet = (set) => {
    let sum = 0;
    for(let i = 0; i < set.length; i++)
    {
        sum+=set[i];
    }
    return sum;
}

const slope = (numPoints, sumX, sumY, sumXSqrd, sumXY) => {
    return (numPoints * sumXY - sumX * sumY)/(numPoints * sumXSqrd - sumX * sumX);
}

const yIntercept = (numPoints, sumX, sumY, m) => {
    return (sumY - m * sumX)/numPoints
}