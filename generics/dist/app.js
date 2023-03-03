"use strict";
// const names: Array<string> = ['test','new test']
function countAndDescribe(elememt) {
    let descriptionText = 'no value';
    if (elememt.length == 1) {
        descriptionText = 'Got 1 element';
    }
    else if (elememt.length > 1) {
        descriptionText = `Got ${elememt.length} element`;
    }
    return [elememt, descriptionText];
}
console.log(countAndDescribe('t'));
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
extractAndConvert({ name: 'ankit' }, 'name');
