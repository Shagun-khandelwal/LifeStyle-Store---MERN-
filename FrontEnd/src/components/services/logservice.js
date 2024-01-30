function init(){}

function log(error){
    console.error(error);
}

const tobeexported = {
    init,log
};

export default tobeexported;