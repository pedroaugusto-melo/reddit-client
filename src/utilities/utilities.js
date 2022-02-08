const formatDate = postDate => {
    let formatedDate = '';
    const currDate = new Date();

    if((currDate - postDate) < (3600*1000)) { //Less than 1 hour
        formatedDate = ((currDate - postDate)/1000/60).toFixed(0) + ' minutes ago';
    } else if ((currDate - postDate) < 3600*1000*23) { //Less than 24 hours
        formatedDate = ((currDate - postDate)/1000/60/60).toFixed(0) + ' hours ago';
    } else {
        formatedDate = ((currDate - postDate)/1000/60/60/24).toFixed(0) + ' days ago';
    }


    return formatedDate;
}

export { formatDate };