/*
 * @Author: FangFeiyue 
 * @Date: 2018-01-10 13:42:33 
 * @Last Modified by:   FangFeiyue 
 * @Last Modified time: 2018-01-10 13:42:33 
 */
import $ from 'jquery';

class Interface{
    //获取遗漏数据
    getOmit(issue){
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue
                },
                dataType: 'json',
                success: function(res){
                    self.setOmit(res.data);
                    resolve.call(self, res);
                },
                error: function(error){
                    reject.call(self, error);
                }
            });
        });
    }

    /**
     * 获取开奖号码
     * @param {string} issue 期号 
     */
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                data:{
                    issue
                },
                success: function(res){
                    self.setOpenCode(res);
                    resolve.call(self);
                },
                error: function(error){
                    reject.call(error);
                }
            });
        });
    }

    // 获取当前状态
    getState(){
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                data:{
                    issue
                },
                success: function(res){
                    self.setOpenCode(res);
                    resolve.call(self);
                },
                error: function(error){
                    reject.call(error);
                }
            });
        });
    }
}

export default Interface;