const debugMode = false;

export const debugTools = {
    log: (param, error) => {
        if(debugMode) {
            if(error) {
                console.error(param);
            } else {
                console.log(param);
            }
        }
    },

    tablePrint: (param) => {
        if(debugMode) {
            console.table(param);
        }
    }
}
