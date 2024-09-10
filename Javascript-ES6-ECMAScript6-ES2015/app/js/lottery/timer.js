class Timer{
    /*
    end: 截止时间
    update: 时间更新的回调函数
    handle:  倒计时结束后的回调
    */
    countDown(end, update, handle){
        const now = new Date().getTime();
        const self = this;

        //倒计时是否结束
        if (now - end){
            handle.call(self);
        }else{
            let last_time = end - now;
            const px_d = 1000 * 60 * 60 * 24,
                  px_h = 1000 * 60 * 60,
                  px_m = 1000 * 60,
                  px_s = 1000;

            let r = [],
                d = Math.floor(last_time / px_d),
                h = Math.floor((last_time - d * px_d) / px_h),
                m = Math.floor((last_time - d * px_d - h * px_h) / px_m),
                s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
            
            if (d > 0){
                r.push(`<em>${d}</em>天`);
            }
            if (r.length || (h > 0)){
                r.push(`<em>${h}</em>时`);
            }
            if (r.length || (m > 0)){
                r.push(`<em>${m}</em>分`);
            }
            if (r.length || (s > 0)){
                r.push(`<em>${s}</em>秒`);
            }

            self.last_time = r.join('');
            update.call(self, r.join(''));
            
            setTimeout(() => {
                self.countDown(end, update, handle);
            }, 1000);
        }
    }
}

export default Timer;