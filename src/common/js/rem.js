import en from "@lang/en"
import zh from "@lang/zh"

(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// 设置语言
let langHeader = (navigator.language || navigator.browserLanguage).toLowerCase();
let lang = ""
let cookieLang = getCookie("lang")
console.log(cookieLang)
    // 优先用户设置语言类型
if (cookieLang != null) {
    lang = cookieLang
} else if (cookieLang == null && langHeader.indexOf('zh') >= 0) {
    // 假如浏览器语言是中文
    lang = "zh"
} else if (cookieLang == null && langHeader.indexOf('en') >= 0) {
    // 假如浏览器语言是英文
    lang = "en"
} else {
    // 假如浏览器语言是其它语言
}

const messages = {
    en: en,
    zh: zh
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: lang, // set locale
    messages, // set locale messages
})


// 通用头部
let htmleHerder = `
    <div class="herder">
        <div class="top">
            <div class="topMenu" @click="showHerder()"></div>
        </div>
        <div class="top2" v-show="show" transition="dh">
            <div class="topMenu2" @click="showHerder()"></div>
        </div>
        <ul id="topli" class="fff" v-show="show" transition="dh">
            <li><a href="index.html">{{$t("common.home")}}</a></li>
            <li><a href="about.html">{{$t("common.about")}}</a></li>
            <li><a href="product.html">{{$t("common.product")}}</a></li>
            <li><a href="successfulCase.html">{{$t("common.successfulCase")}}</a></li>
            <li><a href="join.html">{{$t("common.job")}}</a></li>
            <li><a href="contact.html">{{$t("common.contact")}}</a></li>
            <li>
                <a href="javascript:;">{{$t("common.language")}}</a>
                    <a href="javascript:;" class="laguageBt" @click="setLanguage('zh')">{{$t("common.zh")}}</a>
                    <a href="javascript:;" class="laguageBt"  @click="setLanguage('en')">{{$t("common.en")}}</a>
            </li>
        </ul>
        
    </div>
`;
// 注册
Vue.component('header-component', {
    // props: ['isshow'],
    template: htmleHerder,
    data() {
        return {
            show: false
        }
    },
    mounted: function() {
        var _this = this;
    },
    methods: {
        setLanguage: function(type) {
            setCookie('lang', type)
            this.$i18n.locale = type
            this.show = false;
        },
        showHerder: function() {
            if (this.show) {
                this.show = false;
            } else {
                this.show = true;
            }
        }
    }
})

// Create a Vue instance with `i18n` option
new Vue({
    i18n
}).$mount('#app')


function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}