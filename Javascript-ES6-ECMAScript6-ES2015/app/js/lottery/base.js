/*
 * @Author: FangFeiyue 
 * @Date: 2018-01-10 18:52:08 
 * @Last Modified by: FangFeiyue
 * @Last Modified time: 2018-01-10 19:07:08
 */
import $ from 'jquery';
class Base{
    /**
     * 初始化奖金和玩法及说明
     */
    initPlayList(){
        this.play_list.set('r2',{
          bonus:6,
          tip:'从01～11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元',
          name:'任二'
        })
        .set('r3',{
          bonus:19,
          tip:'从01～11中任选3个或多个号码，选号与奖号任意三个号相同，即中奖<em class="red">19</em>元',
          name:'任三'
        })
        .set('r4',{
          bonus:78,
          tip:'从01～11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>元',
          name:'任四'
        })
        .set('r5',{
          bonus:540,
          tip:'从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
          name:'任五'
        })
        .set('r6',{
          bonus:90,
          tip:'从01～11中任选6个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">90</em>元',
          name:'任六'
        })
        .set('r7',{
          bonus:26,
          tip:'从01～11中任选7个或多个号码，选号与奖号五个号相同，即中奖<em class="red">26</em>元',
          name:'任七'
        })
        .set('r8',{
          bonus:9,
          tip:'从01～11中任选8个或多个号码，选号与奖号五个号相同，即中奖<em class="red">9</em>元',
          name:'任八'
        })
      }

      /**
       * 初始化号码
       */
      initNumber(){
        for (let i = 1; i < 12; i++){
            this.initNumber.add(('' + i).padStart(2, '0'));
        }
      }

      /**
       * 设置遗漏数据
       * @param omit 设置遗漏数据
       */
      setOmit(omit){
        let self = this;
        self.omit.clear();
        for (let [index, item] of omit.entries()){
            self.omit.set(index, item);
        }
        $(self.omit_el).each(function(index, item){
            $(item).text(self.omit.get(index));
        });
      }

      /**
       * 设置开奖
       * @param code 
       */
      setOpenCode(code){
        let self = this;
        self.open_code.clear();
        for (let item of code.values){
            self.open_code.add(item);
        }
        self.updateOpenCode && self.updateOpenCode.call(self, code);
      }

      /**
       * 号码选中取消
       * @param  e 
       */
      toggleCodeActive(e){
          let self = this;
          let $cur = $(e.currentTarget);
          $cur.toggleClass('btn-boll-active');
          self.getCount();
      }

      /**
       * 切换玩法
       * @param  e 
       */
      changePlayNav(e){
        let self = this;
         let $cur = $(e.currentTarget);
        $cur.addClass('active').siblings().removeClass('active');
        self.cur_play = $cur.attr('desc').toLocaleLowerCase();
        $('#zx_sm span').html(self.play_list.get(self.cur_play));
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        self.getCount();
      }

      /**
       * 操作区域，全选，选大，选小，奇数，偶数
       */
      assistHandle(e){
        e.preventDefault();
        let self = this,
            $cur = $(e.currentTarget),
            index = $cur.index();
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        
        //全选
        if (index === 0){
            $('.boll-list .btn-boll').addClass('btn-boll-active');
        }
        if (index === 1){
            $('.boll-list .btn-boll').each(function(index, item){
                 if (item.textContent - 5 > 0){
                     $(item).addClass('btn-boll-active');
                 }
            });
        }
        if (index === 2){
            $('.boll-list .btn-boll').each(function(index, item){
                if (item.textContent - 6 < 0){
                    $(item).addClass('btn-boll-active');
                }
           });
        }
        if (index === 3){
            $('.boll-list .btn-boll').each(function(index, item){
                if (item.textContent %2 === 1){
                    $(item).addClass('btn-boll-active');
                }
            });
        }
        if (index === 4){
            $('.boll-list .btn-boll').each(function(index, item){
                if (item.textContent %2 === 0){
                    $(item).addClass('btn-boll-active');
                }
            });
        }
        self.getCount();
      }
}