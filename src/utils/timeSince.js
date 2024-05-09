export const timeSince = (date) => {
    const second = Math.floor((new Date().valueOf() - date.valueOf())/1000);//divide by 100 for mili seconds

    let interval = second/31536000; //seconds in a year

    if(interval >1){
        return Math.floor(interval) + "years";
    }

    interval = second/2592000; //seconds in month

    if(interval>1){
        return Math.floor(interval) +"months";
    }

    interval = second/86400; //similarly days

    if(interval>1){
        return Math.floor(interval) + "days";
    }

    interval = second/3600; //and here hours

    if(interval>1){
        return Math.floor(interval) + "hours";
    }

    interval = second/60;

    if(interval>1){
        return Math.floor(interval) + "minutes";
    }

    return Math.floor(second) + "seconds";
};