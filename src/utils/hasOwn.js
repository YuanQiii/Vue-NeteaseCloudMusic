/*
 * @Author: your name
 * @Date: 2022-02-24 23:18:20
 * @LastEditTime: 2022-02-24 23:46:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\utils\hasOwn.js
 */
function hasOwn(obj, attr){
    if(Object.prototype.toString.call(obj) === '[object Object]'){
        if(obj.hasOwnProperty(attr)){
            return obj[attr]
        }else{
            return null
        }
    }else{
        return null
    }

}

export function getValue(obj, ...attrs){
    let value = null
    attrs.forEach(element => {
        value = hasOwn(obj, element)
        console.log(value);
    });
    
    return value
}
