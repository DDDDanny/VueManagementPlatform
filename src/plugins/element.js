import Vue from 'vue'
import {
    Button, Form, FormItem, Input, Message, Container, Header, Aside, Main, Menu, MenuItem, Submenu, MenuItemGroup
} from 'element-ui'

// 挂载为Vue上的属性
Vue.prototype.$message = Message

// 注册组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
