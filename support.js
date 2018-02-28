avalon.ready(function() {
    avalon.config({debug : false});
    var page = (function() {
        var model = {
            supportList : [
                // {province : '广东省', show : false, cardList : [{city : '广州', name : '羊城通'}]},
                // {province : '河南省', show : false, cardList : [{city : '郑州', name : '郑州城市一卡通'}]},
                // {province : '辽宁省', show : false, cardList : [{city : '沈阳', name : '沈阳城市一卡通'}]},
                {province : '宁夏回族自治区', show : false, cardList : [{city : '银川', name : '银川城市一卡通'}]},
                {province : '广东省(岭南通)', show : false, cardList : [{city : '潮州', name : ''}
                ,{city : '东莞', name : ''},{city : '佛山', name : ''},{city : '广州', name : ''},{city : '河源', name : ''}
                ,{city : '惠州', name : ''},{city : '江门', name : ''},{city : '揭阳', name : ''},{city : '茂名', name : ''}
                ,{city : '梅州', name : ''},{city : '清远', name : ''},{city : '韶关', name : ''},{city : '汕头', name : ''}
                ,{city : '汕尾', name : ''},{city : '深圳', name : ''},{city : '阳江', name : ''},{city : '云浮', name : ''}
                ,{city : '珠海', name : ''},{city : '湛江', name : ''},{city : '肇庆', name : ''},{city : '中山', name : ''}
                ]},
                {province : '湖北省', show : false, cardList : [{city : '武汉', name : '武汉通'}]}
            ],
            cityList : []
        };
        var fn = {
            swapDrawer : function(province) {
                if (province.show) {
                    province.show = false;
                    return;
                }
                avalon.each(this.supportList, function(index, el) {
                    el.show = false;
                });
                province.show = true;
            }
        };
        var watchEvent = function() {
            vm.$watch('onReady', function() {
                avalon.each(this.supportList, function(index, province) {
                    avalon.each(province.cardList, function(index2, card) {
                        vm.cityList.push(card.city);
                    });
                });
            });
        };
        var vm = null;
        return {
            init : function(conf) {
                $.hideLoading();
                vm = avalon.define(avalon.mix(conf, model, fn));
                watchEvent();
                avalon.scan(document.body);
            }
        };
    }());
    page.init({$id : 'page'});
});