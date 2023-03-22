

class Log{

    info(message){
        console.info(message);
    }

    debug (message){
        console.log(message);
    }

    error (message){
        console.error(message);
    }
}

const f = new Log();
export {f}


