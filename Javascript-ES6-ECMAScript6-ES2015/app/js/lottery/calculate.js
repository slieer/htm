/*
 * @Author: FangFeiyue 
 * @Date: 2018-01-10 13:56:35 
 * @Last Modified by: FangFeiyue
 * @Last Modified time: 2018-01-10 18:37:11
 */
class Calculate{
    /**
     * 计算注数
     * @param {number} active 当前选中号码的个数 
     * @param {string} play_name 当前的玩法标识
     * @return {number} 注数
     */
    computeCount(active, play_name){
        let count = 0;
        const exist = this.play_list.has(pay_name);
        
        //创建指定长度为active，默认填充0的数组
        const arr = new Array(active).fill('0');
        
        if (exist && play_name.at(0) === 'r'){
            count = Calculate.combine(arr, play_name.split('')[1]);
        }

        return count;
    }
    /**
     * 奖金范围预测
     * @param {number} active 当前选中号码的个数 
     * @param {string} play_name 当前的玩法标识
     * @return {array} 奖金范围
     */
    computeBonus(active, play_name){
        const play = play_name.split(''),
              self = this;
        let arr = new Array(play[1*1]).fill(0),
            min,
            max;
        if (play[0] === 'r'){
            let min_active = 5 - (11 - active);
            if (min_active > 0){
                if (min_active-play[1] >= 0){
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr, play[1]).length;
                }else{
                    if (play[1] - 5 > 0 && active - play[1] >= 0){
                        arr = new Array(active - 5).fill(0);
                        min = Calculate.combine(arr, play[1] - 5).length ;
                    }else{
                        min = active-play[1] > -1 ? 1 : 0;
                    }
                }
            }else{
                min = active - play[1] > -1 ? 1 : 0;
            }
            
            let max_active = Math.min(active, 5);
            if (play[1] - 5 > 0){
                if (active-play[1] >= 0){
                    arr = new Array(active - 5).fill(0);
                    max = Calculate.combine(arr, play[1] - 5).length;
                }else{
                    max = 0;
                }
            }else if (play[1] - 5 < 0){
                arr = new Array(Math.min(active, 5)).fill(0);
                max = Calculate.combine(arr, play[1]).length;
            }else{
                max = 1;
            }
        }

        return [min, max].map(item => item * self.play_list.get(play_name).bonus);
    }

    /**
     * 组合运算 
     * @param {array} arr 参与组合运算的数组 
     * @param {number} size 组合运算的基数 
     * @return {number} 计算注数
     */
    static combine(arr, size){
        let allResult = [];
        (function f(arr, size, result){
            let arrLen = arr.length;
            if (size > arrLen){
                return;
            }
            if (size === arrLen){
                allResult.push([].concat(result, arr));
            }else{
                for (let i = 0; i < arrLen; i++){
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size === 1){
                        allResult.push(newResult);
                    }else{
                        let newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        f(newArr, size - 1, newResult);
                    }  
                }
            }
        })(arr, size, []);
    }
}

export default Calculate;