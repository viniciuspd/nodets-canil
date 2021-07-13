type MenuOptions = '' | 'all' | 'dog' | 'fish' | 'cat' ;

export const createMenuObjects = (activeMenu: MenuOptions) => {
    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    };

    return returnObject;
};